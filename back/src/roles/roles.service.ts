import {Injectable, OnModuleInit} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {CreateRoleDto} from './dto/create-role-dto';
import {Role} from './roles.model';

@Injectable()
export class RolesService implements OnModuleInit {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        if ((await this.roleRepository.count()) > 0) return;
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async onModuleInit() {
        await this.createRole({value: 'USER', description: 'Стандартная роль пользователя'});
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}});
        return role;
    }
}
