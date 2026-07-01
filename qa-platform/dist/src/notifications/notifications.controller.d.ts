import { NotificationsService } from './notifications.service';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(user: AuthenticatedUser): Promise<{
        notifications: {
            id: string;
            createdAt: Date;
            entityType: string;
            entityId: string;
            userId: string;
            message: string;
            isRead: boolean;
        }[];
        unreadCount: number;
    }>;
    markAllRead(user: AuthenticatedUser): Promise<{
        notifications: {
            id: string;
            createdAt: Date;
            entityType: string;
            entityId: string;
            userId: string;
            message: string;
            isRead: boolean;
        }[];
        unreadCount: number;
    }>;
    markRead(id: string, user: AuthenticatedUser): Promise<{
        notifications: {
            id: string;
            createdAt: Date;
            entityType: string;
            entityId: string;
            userId: string;
            message: string;
            isRead: boolean;
        }[];
        unreadCount: number;
    }>;
}
