import { Platform, Priority, TestCaseType } from '../../../generated/prisma/enums.js';
export declare class CreateTestCaseDto {
    projectId: string;
    jiraTaskId?: string;
    title: string;
    steps: string;
    expectedResult: string;
    platform: Platform;
    type: TestCaseType;
    priority?: Priority;
}
