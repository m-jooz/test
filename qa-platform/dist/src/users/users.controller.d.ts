import { UsersService } from './users.service';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { Role } from '../../generated/prisma/enums.js';
import type { AuthenticatedUser } from '../auth/types/authenticated-user.type';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(user: AuthenticatedUser): Promise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        createdAt: Date;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        createdAt: Date;
    }>;
    updateRole(id: string, dto: UpdateUserRoleDto): Promise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
