"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRunsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const activity_logs_service_1 = require("../activity-logs/activity-logs.service");
const notifications_service_1 = require("../notifications/notifications.service");
const jira_service_1 = require("../jira/jira.service");
const enums_js_1 = require("../../generated/prisma/enums.js");
const testRunInclude = {
    executor: { select: { id: true, name: true, email: true } },
    bugReviewer: { select: { id: true, name: true, email: true } },
    attachments: true,
    testCase: {
        select: {
            id: true,
            title: true,
            steps: true,
            expectedResult: true,
            platform: true,
            projectId: true,
            jiraTaskId: true,
        },
    },
};
let TestRunsService = class TestRunsService {
    prisma;
    activityLogs;
    notifications;
    jiraService;
    constructor(prisma, activityLogs, notifications, jiraService) {
        this.prisma = prisma;
        this.activityLogs = activityLogs;
        this.notifications = notifications;
        this.jiraService = jiraService;
    }
    async findTestRunOrThrow(id) {
        const testRun = await this.prisma.testRun.findUnique({
            where: { id },
            include: testRunInclude,
        });
        if (!testRun) {
            throw new common_1.NotFoundException(`Test run with id ${id} not found`);
        }
        return testRun;
    }
    async create(dto, userId) {
        const testCase = await this.prisma.testCase.findUnique({
            where: { id: dto.testCaseId },
        });
        if (!testCase) {
            throw new common_1.NotFoundException(`Test case with id ${dto.testCaseId} not found`);
        }
        if (dto.retestOfRunId) {
            const previousRun = await this.prisma.testRun.findUnique({
                where: { id: dto.retestOfRunId },
            });
            if (!previousRun) {
                throw new common_1.NotFoundException(`Test run with id ${dto.retestOfRunId} not found`);
            }
            if (previousRun.testCaseId !== dto.testCaseId) {
                throw new common_1.BadRequestException('retestOfRunId must reference a run of the same test case');
            }
            if (previousRun.status !== enums_js_1.TestRunStatus.FAIL) {
                throw new common_1.BadRequestException('Can only retest a run that previously failed');
            }
        }
        const testRun = await this.prisma.testRun.create({
            data: {
                testCaseId: dto.testCaseId,
                status: dto.status,
                actualResult: dto.actualResult,
                notes: dto.notes,
                severity: dto.severity,
                isBug: dto.isBug ?? false,
                bugDetails: dto.bugDetails,
                bugStatus: dto.isBug ? enums_js_1.BugStatus.PENDING : undefined,
                retestOfRunId: dto.retestOfRunId,
                executedBy: userId,
            },
            include: testRunInclude,
        });
        await this.activityLogs.log({
            userId,
            projectId: testCase.projectId,
            action: 'CREATE',
            entityType: 'TEST_RUN',
            entityId: testRun.id,
            newValue: testRun,
        });
        if (dto.retestOfRunId && dto.status === enums_js_1.TestRunStatus.PASS) {
            const reviewers = await this.prisma.user.findMany({
                where: { role: { in: [enums_js_1.Role.LEAD, enums_js_1.Role.ADMIN] } },
                select: { id: true },
            });
            await Promise.all(reviewers.map((reviewer) => this.notifications.create({
                userId: reviewer.id,
                message: `Bug fixed and verified ✅ — ${testCase.title}`,
                entityType: 'test_run',
                entityId: testRun.id,
            })));
        }
        return testRun;
    }
    async findByTestCase(testCaseId) {
        const testCase = await this.prisma.testCase.findUnique({
            where: { id: testCaseId },
        });
        if (!testCase) {
            throw new common_1.NotFoundException(`Test case with id ${testCaseId} not found`);
        }
        return this.prisma.testRun.findMany({
            where: { testCaseId },
            include: testRunInclude,
            orderBy: { executedAt: 'desc' },
        });
    }
    findOne(id) {
        return this.findTestRunOrThrow(id);
    }
    async approveBug(id, dto, userId) {
        const testRun = await this.findTestRunOrThrow(id);
        if (!testRun.isBug || testRun.bugStatus !== enums_js_1.BugStatus.PENDING) {
            throw new common_1.BadRequestException('This test run is not a pending bug report');
        }
        if (!testRun.testCase.jiraTaskId) {
            throw new common_1.BadRequestException('The test case for this run is not linked to a Jira task; cannot sync to Jira');
        }
        const jiraTask = await this.prisma.jiraTask.findUnique({
            where: { id: testRun.testCase.jiraTaskId },
        });
        if (!jiraTask) {
            throw new common_1.NotFoundException(`Jira task with id ${testRun.testCase.jiraTaskId} not found`);
        }
        const projectId = testRun.testCase.projectId;
        const jiraKey = jiraTask.jiraKey;
        const jiraStatusBefore = await this.jiraService.getIssueStatus(projectId, jiraKey);
        const commentBody = this.buildBugCommentBody(testRun);
        const jiraCommentId = await this.jiraService.addComment(projectId, jiraKey, commentBody);
        await this.jiraService.transitionIssue(projectId, jiraKey, dto.jiraNewStatus);
        await this.jiraService.reassignIssue(projectId, jiraKey, dto.jiraReassignTo);
        const jiraStatusAfter = await this.jiraService.getIssueStatus(projectId, jiraKey);
        const updated = await this.prisma.testRun.update({
            where: { id },
            data: {
                bugStatus: enums_js_1.BugStatus.APPROVED,
                bugReviewedBy: userId,
                bugReviewedAt: new Date(),
                jiraCommentId,
                jiraStatusBefore,
                jiraStatusAfter,
                jiraReassignedTo: dto.jiraReassignTo,
            },
            include: testRunInclude,
        });
        await this.notifications.create({
            userId: testRun.executor.id,
            message: `Your bug report on ${testRun.testCase.title} was approved and sent to Jira`,
            entityType: 'test_run',
            entityId: id,
        });
        await this.activityLogs.log({
            userId,
            projectId,
            action: 'UPDATE',
            entityType: 'TEST_RUN',
            entityId: id,
            oldValue: { bugStatus: testRun.bugStatus },
            newValue: {
                bugStatus: updated.bugStatus,
                jiraStatusBefore,
                jiraStatusAfter,
            },
        });
        return updated;
    }
    async rejectBug(id, dto, userId) {
        const testRun = await this.findTestRunOrThrow(id);
        if (!testRun.isBug || testRun.bugStatus !== enums_js_1.BugStatus.PENDING) {
            throw new common_1.BadRequestException('This test run is not a pending bug report');
        }
        const updated = await this.prisma.testRun.update({
            where: { id },
            data: {
                bugStatus: enums_js_1.BugStatus.REJECTED,
                rejectReason: dto.rejectReason,
                bugReviewedBy: userId,
                bugReviewedAt: new Date(),
            },
            include: testRunInclude,
        });
        await this.notifications.create({
            userId: testRun.executor.id,
            message: `Your bug report on ${testRun.testCase.title} was rejected. Reason: ${dto.rejectReason}`,
            entityType: 'test_run',
            entityId: id,
        });
        await this.activityLogs.log({
            userId,
            projectId: testRun.testCase.projectId,
            action: 'UPDATE',
            entityType: 'TEST_RUN',
            entityId: id,
            oldValue: { bugStatus: testRun.bugStatus },
            newValue: {
                bugStatus: updated.bugStatus,
                rejectReason: dto.rejectReason,
            },
        });
        return updated;
    }
    buildBugCommentBody(testRun) {
        const { testCase, executor, attachments } = testRun;
        return [
            `🔴 Bug Found — [${testRun.severity ?? 'UNKNOWN'}]`,
            `Reported by: ${executor.name}`,
            `Date: ${testRun.executedAt.toISOString()}`,
            '',
            `Test Case: ${testCase.title}`,
            `Platform: ${testCase.platform}`,
            '',
            'Steps to reproduce:',
            testCase.steps,
            '',
            `Expected Result: ${testCase.expectedResult}`,
            `Actual Result: ${testRun.actualResult ?? 'N/A'}`,
            '',
            `Notes: ${testRun.notes ?? 'N/A'}`,
            `Attachments: ${attachments.length}`,
        ].join('\n');
    }
};
exports.TestRunsService = TestRunsService;
exports.TestRunsService = TestRunsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_logs_service_1.ActivityLogsService,
        notifications_service_1.NotificationsService,
        jira_service_1.JiraService])
], TestRunsService);
//# sourceMappingURL=test-runs.service.js.map