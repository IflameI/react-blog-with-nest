/// <reference types="node" />
import { Model } from 'sequelize-typescript';
interface PostCreationAttrs {
    title: string;
    content: string;
    contentHtml: string;
    author: string;
    image: Buffer;
    views: number;
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    title: string;
    content: string;
    contentHtml: string;
    image: Buffer;
    views: number;
    likes: number;
    author: string;
}
export {};
