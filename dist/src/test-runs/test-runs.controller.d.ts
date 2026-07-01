import { TestRunsService } from './test-runs.service';
import { CreateTestRunDto } from './dto/create-test-run.dto';
import { ApproveBugDto } from './dto/approve-bug.dto';
import { RejectBugDto } from './dto/reject-bug.dto';
import { FindTestRunsQueryDto } from './dto/find-test-runs-query.dto';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';
export declare class TestRunsController {
    private readonly testRunsService;
    constructor(testRunsService: TestRunsService);
    create(dto: CreateTestRunDto, user: AuthenticatedUser): Promise<{
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
        status: import("../../generated/prisma/enums.js").TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: import("../../generated/prisma/enums.js").BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    findByTestCase(query: FindTestRunsQueryDto): Promise<({
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
        status: import("../../generated/prisma/enums.js").TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: import("../../generated/prisma/enums.js").BugStatus | null;
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
        status: import("../../generated/prisma/enums.js").TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: import("../../generated/prisma/enums.js").BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    approveBug(id: string, dto: ApproveBugDto, user: AuthenticatedUser): Promise<{
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
        status: import("../../generated/prisma/enums.js").TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: import("../../generated/prisma/enums.js").BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
    rejectBug(id: string, dto: RejectBugDto, user: AuthenticatedUser): Promise<{
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
        status: import("../../generated/prisma/enums.js").TestRunStatus;
        testCaseId: string;
        actualResult: string | null;
        notes: string | null;
        severity: import("../../generated/prisma/enums.js").Severity | null;
        isBug: boolean;
        bugDetails: string | null;
        retestOfRunId: string | null;
        rejectReason: string | null;
        bugStatus: import("../../generated/prisma/enums.js").BugStatus | null;
        bugReviewedBy: string | null;
        bugReviewedAt: Date | null;
        jiraCommentId: string | null;
        jiraStatusBefore: string | null;
        jiraStatusAfter: string | null;
        jiraReassignedTo: string | null;
        executedBy: string;
        executedAt: Date;
    }>;
}
