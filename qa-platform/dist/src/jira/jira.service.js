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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const prisma_service_1 = require("../prisma/prisma.service");
const activity_logs_service_1 = require("../activity-logs/activity-logs.service");
let JiraService = class JiraService {
    prisma;
    activityLogs;
    constructor(prisma, activityLogs) {
        this.prisma = prisma;
        this.activityLogs = activityLogs;
    }
    async getProjectOrThrow(projectId) {
        const project = await this.prisma.project.findUnique({
            where: { id: projectId },
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${projectId} not found`);
        }
        return project;
    }
    assertJiraConfigured(project) {
        if (!project.jiraBaseUrl || !project.jiraApiToken) {
            throw new common_1.BadRequestException('Project is missing Jira configuration (jiraBaseUrl, jiraApiToken)');
        }
    }
    jiraBaseUrl(project) {
        return project.jiraBaseUrl.replace(/\/+$/, '');
    }
    authHeaders(project) {
        return { Authorization: `Bearer ${project.jiraApiToken}` };
    }
    async getIssueStatus(projectId, jiraKey) {
        const project = await this.getProjectOrThrow(projectId);
        this.assertJiraConfigured(project);
        try {
            const response = await axios_1.default.get(`${this.jiraBaseUrl(project)}/rest/api/2/issue/${jiraKey}`, {
                params: { fields: 'status' },
                headers: this.authHeaders(project),
            });
            return response.data.fields?.status?.name ?? null;
        }
        catch {
            throw new common_1.BadGatewayException('Failed to fetch issue status from Jira');
        }
    }
    async addComment(projectId, jiraKey, body) {
        const project = await this.getProjectOrThrow(projectId);
        this.assertJiraConfigured(project);
        try {
            const response = await axios_1.default.post(`${this.jiraBaseUrl(project)}/rest/api/2/issue/${jiraKey}/comment`, { body }, { headers: this.authHeaders(project) });
            return response.data.id;
        }
        catch {
            throw new common_1.BadGatewayException('Failed to add comment on Jira issue');
        }
    }
    async transitionIssue(projectId, jiraKey, transitionId) {
        const project = await this.getProjectOrThrow(projectId);
        this.assertJiraConfigured(project);
        try {
            await axios_1.default.post(`${this.jiraBaseUrl(project)}/rest/api/2/issue/${jiraKey}/transitions`, { transition: { id: transitionId } }, { headers: this.authHeaders(project) });
        }
        catch {
            throw new common_1.BadGatewayException('Failed to transition Jira issue');
        }
    }
    async reassignIssue(projectId, jiraKey, accountId) {
        const project = await this.getProjectOrThrow(projectId);
        this.assertJiraConfigured(project);
        try {
            await axios_1.default.put(`${this.jiraBaseUrl(project)}/rest/api/2/issue/${jiraKey}`, { fields: { assignee: { accountId } } }, { headers: this.authHeaders(project) });
        }
        catch {
            throw new common_1.BadGatewayException('Failed to reassign Jira issue');
        }
    }
    async sync(projectId, userId) {
        const project = await this.getProjectOrThrow(projectId);
        if (!project.jiraBaseUrl ||
            !project.jiraProjectKey ||
            !project.jiraApiToken) {
            throw new common_1.BadRequestException('Project is missing Jira configuration (jiraBaseUrl, jiraProjectKey, jiraApiToken)');
        }
        let issues;
        try {
            const response = await axios_1.default.get(`${project.jiraBaseUrl.replace(/\/+$/, '')}/rest/api/2/search`, {
                params: {
                    jql: `project=${project.jiraProjectKey}`,
                    fields: 'summary,status,assignee,updated',
                    maxResults: 100,
                },
                headers: { Authorization: `Bearer ${project.jiraApiToken}` },
            });
            issues = response.data.issues ?? [];
        }
        catch {
            throw new common_1.BadGatewayException('Failed to fetch tasks from Jira');
        }
        const syncedTasks = await Promise.all(issues.map((issue) => this.prisma.jiraTask.upsert({
            where: { projectId_jiraKey: { projectId, jiraKey: issue.key } },
            create: {
                projectId,
                jiraKey: issue.key,
                title: issue.fields.summary,
                currentStatus: issue.fields.status?.name,
                currentAssignee: issue.fields.assignee?.displayName,
                jiraUrl: `${project.jiraBaseUrl.replace(/\/+$/, '')}/browse/${issue.key}`,
                jiraUpdatedAt: issue.fields.updated
                    ? new Date(issue.fields.updated)
                    : null,
            },
            update: {
                title: issue.fields.summary,
                currentStatus: issue.fields.status?.name,
                currentAssignee: issue.fields.assignee?.displayName,
                jiraUpdatedAt: issue.fields.updated
                    ? new Date(issue.fields.updated)
                    : null,
                syncedAt: new Date(),
            },
        })));
        await this.activityLogs.log({
            userId,
            projectId,
            action: 'SYNC',
            entityType: 'PROJECT',
            entityId: projectId,
            newValue: { syncedCount: syncedTasks.length },
        });
        return { syncedCount: syncedTasks.length, tasks: syncedTasks };
    }
    async listTasks(projectId, userId) {
        await this.getProjectOrThrow(projectId);
        const tasks = await this.prisma.jiraTask.findMany({
            where: { projectId },
            orderBy: { syncedAt: 'desc' },
        });
        const views = await this.prisma.jiraTaskView.findMany({
            where: { userId, jiraTaskId: { in: tasks.map((t) => t.id) } },
        });
        const viewByTaskId = new Map(views.map((v) => [v.jiraTaskId, v]));
        return tasks.map((task) => ({
            ...task,
            unseen: this.isUnseen(task.jiraUpdatedAt, viewByTaskId.get(task.id)?.seenAt),
        }));
    }
    async getTask(projectId, taskId, userId) {
        await this.getProjectOrThrow(projectId);
        const task = await this.prisma.jiraTask.findFirst({
            where: { id: taskId, projectId },
        });
        if (!task) {
            throw new common_1.NotFoundException(`Jira task with id ${taskId} not found in this project`);
        }
        const view = await this.prisma.jiraTaskView.findUnique({
            where: { jiraTaskId_userId: { jiraTaskId: taskId, userId } },
        });
        return { ...task, unseen: this.isUnseen(task.jiraUpdatedAt, view?.seenAt) };
    }
    async markSeen(projectId, taskId, userId) {
        await this.getProjectOrThrow(projectId);
        const task = await this.prisma.jiraTask.findFirst({
            where: { id: taskId, projectId },
        });
        if (!task) {
            throw new common_1.NotFoundException(`Jira task with id ${taskId} not found in this project`);
        }
        return this.prisma.jiraTaskView.upsert({
            where: { jiraTaskId_userId: { jiraTaskId: taskId, userId } },
            create: { jiraTaskId: taskId, userId },
            update: { seenAt: new Date() },
        });
    }
    isUnseen(jiraUpdatedAt, seenAt) {
        if (!seenAt)
            return true;
        if (!jiraUpdatedAt)
            return false;
        return jiraUpdatedAt > seenAt;
    }
};
exports.JiraService = JiraService;
exports.JiraService = JiraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_logs_service_1.ActivityLogsService])
], JiraService);
//# sourceMappingURL=jira.service.js.map