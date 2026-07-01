import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';
export declare class JiraService {
    private readonly prisma;
    private readonly activityLogs;
    constructor(prisma: PrismaService, activityLogs: ActivityLogsService);
    private getProjectOrThrow;
    private assertJiraConfigured;
    private jiraBaseUrl;
    private authHeaders;
    getIssueStatus(projectId: string, jiraKey: string): Promise<string | null>;
    addComment(projectId: string, jiraKey: string, body: string): Promise<string>;
    transitionIssue(projectId: string, jiraKey: string, transitionId: string): Promise<void>;
    reassignIssue(projectId: string, jiraKey: string, accountId: string): Promise<void>;
    sync(projectId: string, userId: string): Promise<{
        syncedCount: number;
        tasks: {
            title: string;
            id: string;
            projectId: string;
            jiraKey: string;
            currentStatus: string | null;
            currentAssignee: string | null;
            jiraUrl: string | null;
            jiraUpdatedAt: Date | null;
            syncedAt: Date;
        }[];
    }>;
    listTasks(projectId: string, userId: string): Promise<{
        unseen: boolean;
        title: string;
        id: string;
        projectId: string;
        jiraKey: string;
        currentStatus: string | null;
        currentAssignee: string | null;
        jiraUrl: string | null;
        jiraUpdatedAt: Date | null;
        syncedAt: Date;
    }[]>;
    getTask(projectId: string, taskId: string, userId: string): Promise<{
        unseen: boolean;
        title: string;
        id: string;
        projectId: string;
        jiraKey: string;
        currentStatus: string | null;
        currentAssignee: string | null;
        jiraUrl: string | null;
        jiraUpdatedAt: Date | null;
        syncedAt: Date;
    }>;
    markSeen(projectId: string, taskId: string, userId: string): Promise<{
        id: string;
        userId: string;
        jiraTaskId: string;
        seenAt: Date;
    }>;
    private isUnseen;
}
