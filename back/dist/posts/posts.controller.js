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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_post_dto_1 = require("./dto/create-post.dto");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postService) {
        this.postService = postService;
    }
    create(dto) {
        return this.postService.createPost(dto);
    }
    getThreeArticles() {
        return this.postService.getThreeArticles();
    }
    getRecentArticles() {
        return this.postService.getRecentArticles();
    }
    getSortArticlesByViews() {
        return this.postService.getSortArticlesByViews();
    }
    getSortArticlesByLikes() {
        return this.postService.getSortArticlesByLikes();
    }
    getArticleById(id) {
        return this.postService.getArticleById(id);
    }
    like(id) {
        return this.postService.incrementLikeCounter(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание статьи' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: common_1.Post }),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить 3 статьи' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [common_1.Post] }),
    (0, common_1.Get)('threeArticles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getThreeArticles", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить отсортированные по дате обновления' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [common_1.Post] }),
    (0, common_1.Get)('recentArticles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getRecentArticles", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить статьи отсортированные по популярности' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [common_1.Post] }),
    (0, common_1.Get)('popularArticles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getSortArticlesByViews", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить статьи отсортированные по лайкам' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [common_1.Post] }),
    (0, common_1.Get)('mostLikesArticles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getSortArticlesByLikes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить статью по id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: common_1.Post }),
    (0, common_1.Get)('arcticle/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getArticleById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Поставить лайка на запись' }),
    (0, common_1.Put)('like/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "like", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)('Статьи'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map