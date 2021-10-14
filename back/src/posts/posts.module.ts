import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { User } from 'src/users/users.model';
import { PostsController } from './posts.controller';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), RolesModule, forwardRef(() => AuthModule)],
})
export class PostsModule {}
