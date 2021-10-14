import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}
  async createPost(dto: CreatePostDto) {
    const post = await this.postRepository.create(dto);
    return post;
  }

  async getTopThreeArticle() {
    const posts = await this.postRepository.findAll({ include: { all: true } });
    return posts;
  }

  async getPostById(id: number) {
    const post = await this.postRepository.findOne({ where: { id }, include: { all: true } });
    return post;
  }
}
