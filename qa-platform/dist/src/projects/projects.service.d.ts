import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private readonly prisma;
    private readonly activityLogs;
    constructor(prisma: PrismaService, activityLogs: ActivityLogsService);
    create(dto: CreateProjectDto, userId: string): Promise<{
        type: import("../../generated/prisma/enums").ProjectType;
        description: string | null;
        name: string;
        id: string;
        createdAt: Date;
        jiraProjectKey: string | null;
        jiraBaseUrl: string | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
        createdBy: string;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        type: import("../../generated/prisma/enums").ProjectType;
        description: string | null;
        name: string;
        id: string;
        createdAt: Date;
        jiraProjectKey: string | null;
        jiraBaseUrl: string | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
        createdBy: string;
    }[]>;
    findOne(id: string): Promise<{
        stats: {
            testCasesCount: number;
            jiraTasksCount: number;
        };
        type: import("../../generated/prisma/enums").ProjectType;
        description: string | null;
        name: string;
        id: string;
        createdAt: Date;
        jiraProjectKey: string | null;
        jiraBaseUrl: string | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
        createdBy: string;
    }>;
    private findExistingOrThrow;
    update(id: string, dto: UpdateProjectDto, userId: string): Promise<{
        type: import("../../generated/prisma/enums").ProjectType;
        description: string | null;
        name: string;
        id: string;
        createdAt: Date;
        jiraProjectKey: string | null;
        jiraBaseUrl: string | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
        createdBy: string;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
    }>;
}
