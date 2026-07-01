import { Severity, TestRunStatus } from '../../../generated/prisma/enums.js';
export declare class CreateTestRunDto {
    testCaseId: string;
    status: TestRunStatus;
    actualResult?: string;
    notes?: string;
    severity?: Severity;
    isBug?: boolean;
    bugDetails?: string;
    retestOfRunId?: string;
}
