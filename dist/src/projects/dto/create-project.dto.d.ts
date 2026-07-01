import { ProjectType } from '../../../generated/prisma/enums.js';
export declare class CreateProjectDto {
    name: string;
    type: ProjectType;
    description?: string;
    jiraProjectKey?: string;
    jiraBaseUrl?: string;
    jiraApiToken?: string;
}
