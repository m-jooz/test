import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Role } from '../../generated/prisma/client.js';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto, role?: Role): Promise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        passwordHash: string;
        createdAt: Date;
    }>;
    findByEmail(email: string): Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        role: Role;
        id: string;
        passwordHash: string;
        createdAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findById(id: string): Promise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        createdAt: Date;
    }>;
    findAll(): Prisma.PrismaPromise<{
        name: string;
        email: string;
        role: Role;
        id: string;
        createdAt: Date;
    }[]>;
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
