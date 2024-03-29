"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const posts_model_1 = require("./posts.model");
let PostsService = class PostsService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async createPost(dto) {
        const dtoWithBuffer = Object.assign(Object.assign({}, dto), { image: Buffer.from(dto.image, 'base64') });
        const post = await this.postRepository.create(dtoWithBuffer);
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
        let sortPostsByDate = posts.sort(function (a, b) {
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
        let sortPostsByViews = posts.sort(function (a, b) {
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
        let sortPostsByLikes = posts.sort(function (a, b) {
            a = a.likes;
            b = b.likes;
            return b - a;
        });
        return sortPostsByLikes;
    }
    async getArticleById(id) {
        const post = await this.postRepository.findOne({ where: { id }, include: { all: true } });
        return post;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(posts_model_1.Post)),
    __metadata("design:paramtypes", [Object])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map