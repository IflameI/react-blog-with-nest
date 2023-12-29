export type CreateArticleRequestType = {
    title: string;
    content: string;
    image: string;
    author?: string;
};

export type ArticleType = {
    id: number;
    title: string;
    content: string;
    image: {
        type: string;
        data: Buffer
    };
    createdAt: Date;
    updatedAt: string;
    likes?: number;
    views?: number;
    author?: string;


};

export interface postState {
    mainPosts: ArticleType[];
    recentPosts: ArticleType[];
    popularPosts: ArticleType[];
    mostLikesPosts: ArticleType[];
}
