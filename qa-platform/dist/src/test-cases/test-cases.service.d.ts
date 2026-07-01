import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';
import { CreateTestCaseDto } from './dto/create-test-case.dto';
import { UpdateTestCaseDto } from './dto/update-test-case.dto';
export declare class TestCasesService {
    private readonly prisma;
    private readonly activityLogs;
    constructor(prisma: PrismaService, activityLogs: ActivityLogsService);
    private assertProjectExists;
    private assertJiraTaskBelongsToProject;
    private findExistingOrThrow;
    create(dto: CreateTestCaseDto, userId: string): Promise<{
        jiraTask: {
            title: string;
            id: string;
            jiraKey: string;
            currentStatus: string | null;
        } | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        type: import("../../generated/prisma/enums").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums").Platform;
        priority: import("../../generated/prisma/enums").Priority;
    }>;
    findByProject(projectId: string): Promise<({
        jiraTask: {
            title: string;
            id: string;
            jiraKey: string;
            currentStatus: string | null;
        } | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        type: import("../../generated/prisma/enums").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums").Platform;
        priority: import("../../generated/prisma/enums").Priority;
    })[]>;
    findOne(id: string): Promise<{
        project: {
            name: string;
            id: string;
        };
        jiraTask: {
            title: string;
            id: string;
            jiraKey: string;
            currentStatus: string | null;
        } | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        type: import("../../generated/prisma/enums").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums").Platform;
        priority: import("../../generated/prisma/enums").Priority;
    }>;
    update(id: string, dto: UpdateTestCaseDto, userId: string): Promise<{
        jiraTask: {
            title: string;
            id: string;
            jiraKey: string;
            currentStatus: string | null;
        } | null;
        creator: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        type: import("../../generated/prisma/enums").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums").Platform;
        priority: import("../../generated/prisma/enums").Priority;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
    }>;
}
