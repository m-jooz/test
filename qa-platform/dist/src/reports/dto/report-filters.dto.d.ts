import { Platform, Priority, TestRunStatus } from '../../../generated/prisma/enums.js';
export declare class ReportFiltersDto {
    platform?: Platform;
    priority?: Priority;
    status?: TestRunStatus;
    dateFrom?: string;
    dateTo?: string;
}
