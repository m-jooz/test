import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';
import { JiraService } from '../jira/jira.service';
import { Platform, Priority } from '../../generated/prisma/enums.js';
import { GenerateReportDto } from './dto/generate-report.dto';
export declare class ReportsService {
    private readonly prisma;
    private readonly activityLogs;
    private readonly jiraService;
    constructor(prisma: PrismaService, activityLogs: ActivityLogsService, jiraService: JiraService);
    private getProjectOrThrow;
    private rate;
    private computeOverview;
    private groupByPlatform;
    private groupByPriority;
    getDashboard(projectId: string, userId: string): Promise<{
        project: {
            type: import("../../generated/prisma/enums.js").ProjectType;
            name: string;
            id: string;
        };
        overview: {
            totalTestCases: number;
            totalTestRuns: number;
            passRate: number;
            failRate: number;
            blockedRate: number;
            totalBugs: number;
            pendingBugs: number;
            approvedBugs: number;
            rejectedBugs: number;
        };
        byPlatform: {
            platform: Platform;
            total: number;
            pass: number;
            fail: number;
        }[];
        byPriority: {
            priority: Priority;
            total: number;
            pass: number;
            fail: number;
        }[];
        recentActivity: {
            id: string;
            action: string;
            entityType: string;
            entityId: string;
            userName: string;
            createdAt: Date;
        }[];
        unseenJiraTasks: number;
        pendingBugReviews: {
            id: string;
            severity: import("../../generated/prisma/enums.js").Severity | null;
            testCaseTitle: string;
            executedByName: string;
            executedAt: Date;
        }[];
    }>;
    generate(dto: GenerateReportDto, userId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        projectId: string;
        createdBy: string;
        filters: import("@prisma/client/runtime/client").JsonValue | null;
        shareToken: string;
    }>;
    findByProject(projectId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        creator: {
            name: string;
            email: string;
            id: string;
        };
        shareToken: string;
    }[]>;
    findOne(id: string): Promise<{
        creator: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        title: string;
        id: string;
        createdAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        projectId: string;
        createdBy: string;
        filters: import("@prisma/client/runtime/client").JsonValue | null;
        shareToken: string;
    }>;
    findByShareToken(shareToken: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        projectId: string;
        createdBy: string;
        filters: import("@prisma/client/runtime/client").JsonValue | null;
        shareToken: string;
    }>;
}
