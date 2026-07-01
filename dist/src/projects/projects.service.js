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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const activity_logs_service_1 = require("../activity-logs/activity-logs.service");
const projectSelect = {
    id: true,
    name: true,
    type: true,
    description: true,
    jiraProjectKey: true,
    jiraBaseUrl: true,
    createdBy: true,
    createdAt: true,
    creator: { select: { id: true, name: true, email: true } },
};
let ProjectsService = class ProjectsService {
    prisma;
    activityLogs;
    constructor(prisma, activityLogs) {
        this.prisma = prisma;
        this.activityLogs = activityLogs;
    }
    async create(dto, userId) {
        const project = await this.prisma.project.create({
            data: { ...dto, createdBy: userId },
            select: projectSelect,
        });
        await this.activityLogs.log({
            userId,
            projectId: project.id,
            action: 'CREATE',
            entityType: 'PROJECT',
            entityId: project.id,
            newValue: project,
        });
        return project;
    }
    findAll() {
        return this.prisma.project.findMany({
            select: projectSelect,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const project = await this.prisma.project.findUnique({
            where: { id },
            select: {
                ...projectSelect,
                _count: { select: { testCases: true, jiraTasks: true } },
            },
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${id} not found`);
        }
        const { _count, ...rest } = project;
        return {
            ...rest,
            stats: {
                testCasesCount: _count.testCases,
                jiraTasksCount: _count.jiraTasks,
            },
        };
    }
    async findExistingOrThrow(id) {
        const project = await this.prisma.project.findUnique({ where: { id } });
        if (!project) {
            throw new common_1.NotFoundException(`Project with id ${id} not found`);
        }
        return project;
    }
    async update(id, dto, userId) {
        const existing = await this.findExistingOrThrow(id);
        const updated = await this.prisma.project.update({
            where: { id },
            data: dto,
            select: projectSelect,
        });
        await this.activityLogs.log({
            userId,
            projectId: id,
            action: 'UPDATE',
            entityType: 'PROJECT',
            entityId: id,
            oldValue: { ...existing, jiraApiToken: undefined },
            newValue: updated,
        });
        return updated;
    }
    async remove(id, userId) {
        const existing = await this.findExistingOrThrow(id);
        await this.prisma.project.delete({ where: { id } });
        await this.activityLogs.log({
            userId,
            projectId: undefined,
            action: 'DELETE',
            entityType: 'PROJECT',
            entityId: id,
            oldValue: { ...existing, jiraApiToken: undefined },
        });
        return { id };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        activity_logs_service_1.ActivityLogsService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map