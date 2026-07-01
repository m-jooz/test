import { Injectable } from '@nestjs/common';
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

@Injectable()
export class ActivityLogsService {
  constructor(private readonly prisma: PrismaService) {}

  log(params: LogActivityParams) {
    return this.prisma.activityLog.create({
      data: {
        userId: params.userId,
        projectId: params.projectId,
        action: params.action,
        entityType: params.entityType,
        entityId: params.entityId,
        oldValue:
          params.oldValue === undefined
            ? undefined
            : (params.oldValue as object),
        newValue:
          params.newValue === undefined
            ? undefined
            : (params.newValue as object),
      },
    });
  }
}
