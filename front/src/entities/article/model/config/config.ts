export type ArticleType = {
    id: number;
    title: string;
    content: string;
    image: string;
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
