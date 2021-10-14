import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    create(dto: CreatePostDto): Promise<import("./posts.model").Post>;
    getAll(): Promise<import("./posts.model").Post[]>;
}
