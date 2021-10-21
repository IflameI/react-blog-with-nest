import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: typeof Post);
    createPost(dto: CreatePostDto): Promise<Post>;
    getThreeArticles(): Promise<Post[]>;
    getRecentArticles(): Promise<Post[]>;
    getSortArticlesByViews(): Promise<Post[]>;
    getSortArticlesByLikes(): Promise<Post[]>;
    getArticleById(id: number): Promise<Post>;
    incrementLikeCounter(id: number): Promise<Post>;
}
