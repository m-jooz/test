import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface CreateNotificationParams {
  userId: string;
  message: string;
  entityType: string;
  entityId: string;
}

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(params: CreateNotificationParams) {
    return this.prisma.notification.create({ data: params });
  }

  async findAllForUser(userId: string) {
    const [notifications, unreadCount] = await Promise.all([
      this.prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.notification.count({ where: { userId, isRead: false } }),
    ]);

    return { notifications, unreadCount };
  }

  async markRead(id: string, userId: string) {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });
    if (!notification) {
      throw new NotFoundException(`Notification with id ${id} not found`);
    }
    if (notification.userId !== userId) {
      throw new ForbiddenException(
        'You can only manage your own notifications',
      );
    }

    await this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
    return this.findAllForUser(userId);
  }

  async markAllRead(userId: string) {
    await this.prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });
    return this.findAllForUser(userId);
  }
}
