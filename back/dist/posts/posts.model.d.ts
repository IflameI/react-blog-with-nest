import { Model } from 'sequelize-typescript';
interface PostCreationAttrs {
    title: string;
    content: string;
    author: string;
    image: string;
    views: number;
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    title: string;
    content: string;
    image: string;
    views: string;
    likes: string;
    author: string;
}
export {};
