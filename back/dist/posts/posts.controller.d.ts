import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    create(dto: CreatePostDto): Promise<import("./posts.model").Post>;
    getThreeArticles(): Promise<import("./posts.model").Post[]>;
    getRecentArticles(): Promise<import("./posts.model").Post[]>;
    getSortArticlesByViews(): Promise<import("./posts.model").Post[]>;
    getSortArticlesByLikes(): Promise<import("./posts.model").Post[]>;
}
