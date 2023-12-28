import { Model } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
}
export {};
