export type MainPostType = {
    id: number;
    title: string;
    content: string;
    image: string;
    createdAt: Date;
    updatedAt: string;
};

export type CurrentPostType = {
    id: number | null;
    title: string;
    content: string;
    author: string;
    image: string;
    createdAt: Date | null;
    updatedAt: string | null;
    views: number;
    likes: number;
};

export interface postState {
    mainPosts: MainPostType[];
    recentPosts: MainPostType[];
    popularPosts: MainPostType[];
    mostLikesPosts: MainPostType[];
    currentPost: CurrentPostType
}
