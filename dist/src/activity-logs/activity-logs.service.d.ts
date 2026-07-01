import { PrismaService } from '../prisma/prisma.service';
export type ActivityAction = 'CREATE' | 'UPDATE' | 'DELETE' | 'SYNC' | 'SEEN';
export interface LogActivityParams {
    userId: string;
    projectId?: string;
    action: ActivityAction;
    entityType: string;
    entityId: string;
    oldValue?: unknown;
    newValue?: unknown;
}
export declare class ActivityLogsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    log(params: LogActivityParams): import("../../generated/prisma/models").Prisma__ActivityLogClient<{
        id: string;
        createdAt: Date;
        action: string;
        entityType: string;
        entityId: string;
        oldValue: import("@prisma/client/runtime/client").JsonValue | null;
        newValue: import("@prisma/client/runtime/client").JsonValue | null;
        userId: string;
        projectId: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
