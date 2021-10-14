import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: typeof Post);
    createPost(dto: CreatePostDto): Promise<Post>;
    getTopThreeArticle(): Promise<Post[]>;
    getPostById(id: number): Promise<Post>;
}
