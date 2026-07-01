import { TestCasesService } from './test-cases.service';
import { CreateTestCaseDto } from './dto/create-test-case.dto';
import { UpdateTestCaseDto } from './dto/update-test-case.dto';
import { FindTestCasesQueryDto } from './dto/find-test-cases-query.dto';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';
export declare class TestCasesController {
    private readonly testCasesService;
    constructor(testCasesService: TestCasesService);
    create(dto: CreateTestCaseDto, user: AuthenticatedUser): Promise<{
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
        type: import("../../generated/prisma/enums.js").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums.js").Platform;
        priority: import("../../generated/prisma/enums.js").Priority;
    }>;
    findByProject(query: FindTestCasesQueryDto): Promise<({
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
        type: import("../../generated/prisma/enums.js").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums.js").Platform;
        priority: import("../../generated/prisma/enums.js").Priority;
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
        type: import("../../generated/prisma/enums.js").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums.js").Platform;
        priority: import("../../generated/prisma/enums.js").Priority;
    }>;
    update(id: string, dto: UpdateTestCaseDto, user: AuthenticatedUser): Promise<{
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
        type: import("../../generated/prisma/enums.js").TestCaseType;
        title: string;
        id: string;
        createdAt: Date;
        projectId: string;
        createdBy: string;
        jiraTaskId: string | null;
        steps: string;
        expectedResult: string;
        platform: import("../../generated/prisma/enums.js").Platform;
        priority: import("../../generated/prisma/enums.js").Priority;
    }>;
    remove(id: string, user: AuthenticatedUser): Promise<{
        id: string;
    }>;
}
