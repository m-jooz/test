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
exports.TestCasesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const activity_logs_service_1 = require("../activity-logs/activity-logs.service");
const testCaseInclude = {
    creator: { select: { id: true, name: true, email: true } },
    jiraTask: {
        select: { id: true, jiraKey: true, title: true, currentStatus: true },
    },
};
let TestCasesService = class TestCasesService {
    prisma;
    activityLogs;
    constructor(prisma, activityLogs) {
        this.prisma = prisma;
        this.activityLogs = activityLogs;
    }
    async assertProjectExists(projectId) {
        const project = await this.prisma.project.findUnique({
            where: { id: projectId },
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        return project;
    }
    async assertJiraTaskBelongsToProject(jiraTaskId, projectId) {
        const jiraTask = await this.prisma.jiraTask.findUnique({
            where: { id: jiraTaskId },
        });
        if (!jiraTask || jiraTask.projectId !== projectId) {
            throw new common_1.BadRequestException(`Jira task with id ${jiraTaskId} does not belong to project ${projectId}`);
        }
    }
    async findExistingOrThrow(id) {
        const testCase = await this.prisma.testCase.findUnique({ where: { id } });
        if (!testCase) {
            throw new common_1.NotFoundException(`Test case with id ${id} not found`);
        }
        return testCase;
    }
    async create(dto, userId) {
        await this.assertProjectExists(dto.projectId);
        if (dto.jiraTaskId) {
            await this.assertJiraTaskBelongsToProject(dto.jiraTaskId, dto.projectId);
        }
        const testCase = await this.prisma.testCase.create({
            data: { ...dto, createdBy: userId },
            include: testCaseInclude,
        });
        await this.activityLogs.log({
            userId,
            projectId: dto.projectId,
            action: 'CREATE',
            entityType: 'TEST_CASE',
            entityId: testCase.id,
            newValue: testCase,
        });
        return testCase;
    }
    async findByProject(projectId) {
        await this.assertProjectExists(projectId);
        return this.prisma.testCase.findMany({
            where: { projectId },
            include: testCaseInclude,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const testCase = await this.prisma.testCase.findUnique({
            where: { id },
            include: {
                ...testCaseInclude,
                project: { select: { id: true, name: true } },
            },
        });
        if (!testCase) {
            throw new common_1.NotFoundException(`Test case with id ${id} not found`);
        }
        return testCase;
    }
    async update(id, dto, userId) {
        const existing = await this.findExistingOrThrow(id);
        if (dto.jiraTaskId) {
            await this.assertJiraTaskBelongsToProject(dto.jiraTaskId, existing.projectId);
        }
        const updated = await this.prisma.testCase.update({
            where: { id },
            data: dto,
            include: testCaseInclude,
        });
        await this.activityLogs.log({
            userId,
            projectId: existing.projectId,
            action: 'UPDATE',
            entityType: 'TEST_CASE',
            entityId: id,
            oldValue: existing,
            newValue: updated,
        });
        return updated;
    }
    async remove(id, userId) {
        const existing = await this.findExistingOrThrow(id);
        await this.prisma.testCase.delete({ where: { id } });
        await this.activityLogs.log({
            userId,
            projectId: existing.projectId,
            action: 'DELETE',
            entityType: 'TEST_CASE',
            entityId: id,
            oldValue: existing,
        });
        return { id };
    }
};
exports.TestCasesService = TestCasesService;
exports.TestCasesService = TestCasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_logs_service_1.ActivityLogsService])
], TestCasesService);
//# sourceMappingURL=test-cases.service.js.map