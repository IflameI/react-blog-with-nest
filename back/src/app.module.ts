import {Module} from '@nestjs/common';

import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './users/users.model';
import {UsersModule} from './users/users.module';
import {RolesModule} from './roles/roles.module';
import {Role} from './roles/roles.model';
import {UserRoles} from './roles/user-roles.model';
import {AuthModule} from './auth/auth.module';
import {PostsModule} from './posts/posts.module';
import {Post} from './posts/posts.model';
import {FilesModule} from './files/files.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import {ConfigModule} from '@nestjs/config';
import {join} from 'path';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),

        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'build'),
        }),

        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ],
})
export class AppModule {
}
