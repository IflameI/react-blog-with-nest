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

  async getThreeArticles() {
    const posts = await this.postRepository.findAll({
      include: { all: true },
      order: ['id'],
    });
    return posts.slice(0, 3);
  }

  async getRecentArticles() {
    const posts = await this.postRepository.findAll({
      include: { all: true },
    });
    let sortPostsByDate = posts.sort(function (a: any, b: any) {
      a = new Date(a.updatedAt);
      b = new Date(b.updatedAt);
      return a > b ? -1 : a < b ? 1 : 0;
    });
    return sortPostsByDate;
  }

  async getSortArticlesByViews() {
    const posts = await this.postRepository.findAll({
      include: { all: true },
    });
    let sortPostsByViews = posts.sort(function (a: any, b: any) {
      a = a.views;
      b = b.views;
      return b - a;
    });
    return sortPostsByViews;
  }

  async getSortArticlesByLikes() {
    const posts = await this.postRepository.findAll({
      include: { all: true },
    });
    let sortPostsByLikes = posts.sort(function (a: any, b: any) {
      a = a.likes;
      b = b.likes;
      return b - a;
    });
    return sortPostsByLikes;
  }

  async getPostById(id: number) {
    const post = await this.postRepository.findOne({ where: { id }, include: { all: true } });
    return post;
  }
}
