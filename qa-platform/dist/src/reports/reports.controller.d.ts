import { ReportsService } from './reports.service';
import { DashboardQueryDto } from './dto/dashboard-query.dto';
import { GenerateReportDto } from './dto/generate-report.dto';
import { FindReportsQueryDto } from './dto/find-reports-query.dto';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getDashboard(query: DashboardQueryDto, user: AuthenticatedUser): Promise<{
        project: {
            type: import("../../generated/prisma/enums").ProjectType;
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
            platform: import("../../generated/prisma/enums").Platform;
            total: number;
            pass: number;
            fail: number;
        }[];
        byPriority: {
            priority: import("../../generated/prisma/enums").Priority;
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
            severity: import("../../generated/prisma/enums").Severity | null;
            testCaseTitle: string;
            executedByName: string;
            executedAt: Date;
        }[];
    }>;
    generate(dto: GenerateReportDto, user: AuthenticatedUser): Promise<{
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
    findByProject(query: FindReportsQueryDto): Promise<{
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
}
