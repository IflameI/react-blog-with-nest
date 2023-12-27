import { OnModuleInit } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role-dto';
import { Role } from './roles.model';
export declare class RolesService implements OnModuleInit {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    onModuleInit(): Promise<void>;
    getRoleByValue(value: string): Promise<Role>;
}
