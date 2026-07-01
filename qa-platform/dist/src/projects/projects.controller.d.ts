import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(dto: CreateProjectDto, user: AuthenticatedUser): Promise<{
        type: import("../../generated/prisma/enums.js").ProjectType;
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
        type: import("../../generated/prisma/enums.js").ProjectType;
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
        type: import("../../generated/prisma/enums.js").ProjectType;
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
    update(id: string, dto: UpdateProjectDto, user: AuthenticatedUser): Promise<{
        type: import("../../generated/prisma/enums.js").ProjectType;
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
    remove(id: string, user: AuthenticatedUser): Promise<{
        id: string;
    }>;
}
