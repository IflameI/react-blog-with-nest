import {Injectable, OnModuleInit} from '@nestjs/common';
import {CreatePostDto} from './dto/create-post.dto';
import {InjectModel} from '@nestjs/sequelize';
import {Post} from './posts.model';
import * as posts from '../stubs/posts.json';

const isUrl = string => {
    try {
        return Boolean(new URL(string));
    } catch (e) {
        return false;
    }
}

@Injectable()
export class PostsService implements OnModuleInit {
    constructor(@InjectModel(Post) private postRepository: typeof Post) {
    }

    async createPost(dto: CreatePostDto) {
        console.log(isUrl(dto.image), dto.image)
        const dtoWithBuffer = {...dto, image: isUrl(dto.image) ? dto.image : Buffer.from(dto.image, 'base64')}
        const post = await this.postRepository.create(dtoWithBuffer);
        return post;
    }

    async getThreeArticles() {
        const posts = await this.postRepository.findAll({
            include: {all: true},
            order: ['id'],
        });
        return posts.slice(0, 3);
    }

    async getRecentArticles() {
        const posts = await this.postRepository.findAll({
            include: {all: true},
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
            include: {all: true},
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
            include: {all: true},
        });
        let sortPostsByLikes = posts.sort(function (a: any, b: any) {
            a = a.likes;
            b = b.likes;
            return b - a;
        });
        return sortPostsByLikes;
    }

    async getArticleById(id: number) {
        const post = await this.postRepository.findOne({where: {id}, include: {all: true}});
        return post;
    }

    async onModuleInit() {
        const postsRepository = await this.postRepository.findAll({
            include: {all: true},
            order: ['id'],
        });
        if (postsRepository.length !== 0) return;
        console.log(posts)
        await posts.data.forEach((post) => {
            this.createPost({
                title: post.title,
                image: post.image,
                author: post.author,
                likes: post.likes,
                views: post.views,
                content: post.content,
                contentHtml: post.contentHtml
            });
        })
    }
}
