import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogsService } from '../activity-logs/activity-logs.service';
import { NotificationsService } from '../notifications/notifications.service';
import { JiraService } from '../jira/jira.service';
import { BugStatus, TestRunStatus } from '../../generated/prisma/enums.js';
import { CreateTestRunDto } from './dto/create-test-run.dto';
import { ApproveBugDto } from './dto/approve-bug.dto';
import { RejectBugDto } from './dto/reject-bug.dto';
export declare class TestRunsService {
    private readonly prisma;
    private readonly activityLogs;
    private readonly notifications;
    private readonly jiraService;
    constructor(prisma: PrismaService, activityLogs: ActivityLogsService, notifications: NotificationsService, jiraService: JiraService);
    private findTestRunOrThrow;
    create(dto: CreateTestRunDto, userId: string): Promise<{
        testCase: {
            title: string;
            id: string;
            projectId: string;
            jiraTaskId: string | null;
            steps: string;
            expectedResult: string;
            platform: import("../../generated/prisma/enums.js").Platform;
        };
        executor: {
            name: string;
            email: string;
            id: string;
        };
        bugReviewer: {
            name: string;
            email: string;
            id: string;
        } | null;
        attachments: {
            type: import("../../generated/prisma/enums.js").AttachmentType;
            id: string;
            createdAt: Date;
            testRunId: string;
            fileUrl: string;
        }[];
    } & {
        id: string;
        status: TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    findByTestCase(testCaseId: string): Promise<({
        testCase: {
            title: string;
            id: string;
            projectId: string;
            jiraTaskId: string | null;
            steps: string;
            expectedResult: string;
            platform: import("../../generated/prisma/enums.js").Platform;
        };
        executor: {
            name: string;
            email: string;
            id: string;
        };
        bugReviewer: {
            name: string;
            email: string;
            id: string;
        } | null;
        attachments: {
            type: import("../../generated/prisma/enums.js").AttachmentType;
            id: string;
            createdAt: Date;
            testRunId: string;
            fileUrl: string;
        }[];
    } & {
        id: string;
        status: TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        testCase: {
            title: string;
            id: string;
            projectId: string;
            jiraTaskId: string | null;
            steps: string;
            expectedResult: string;
            platform: import("../../generated/prisma/enums.js").Platform;
        };
        executor: {
            name: string;
            email: string;
            id: string;
        };
        bugReviewer: {
            name: string;
            email: string;
            id: string;
        } | null;
        attachments: {
            type: import("../../generated/prisma/enums.js").AttachmentType;
            id: string;
            createdAt: Date;
            testRunId: string;
            fileUrl: string;
        }[];
    } & {
        id: string;
        status: TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    approveBug(id: string, dto: ApproveBugDto, userId: string): Promise<{
        testCase: {
            title: string;
            id: string;
            projectId: string;
            jiraTaskId: string | null;
            steps: string;
            expectedResult: string;
            platform: import("../../generated/prisma/enums.js").Platform;
        };
        executor: {
            name: string;
            email: string;
            id: string;
        };
        bugReviewer: {
            name: string;
            email: string;
            id: string;
        } | null;
        attachments: {
            type: import("../../generated/prisma/enums.js").AttachmentType;
            id: string;
            createdAt: Date;
            testRunId: string;
            fileUrl: string;
        }[];
    } & {
        id: string;
        status: TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    rejectBug(id: string, dto: RejectBugDto, userId: string): Promise<{
        testCase: {
            title: string;
            id: string;
            projectId: string;
            jiraTaskId: string | null;
            steps: string;
            expectedResult: string;
            platform: import("../../generated/prisma/enums.js").Platform;
        };
        executor: {
            name: string;
            email: string;
            id: string;
        };
        bugReviewer: {
            name: string;
            email: string;
            id: string;
        } | null;
        attachments: {
            type: import("../../generated/prisma/enums.js").AttachmentType;
            id: string;
            createdAt: Date;
            testRunId: string;
            fileUrl: string;
        }[];
    } & {
        id: string;
        status: TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    private buildBugCommentBody;
}
