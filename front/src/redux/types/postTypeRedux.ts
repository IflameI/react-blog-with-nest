export type mainPostsType = {
  id: number;
  title: string;
  content: string;
  image: string;
  userId: number;
  createdAt: Date;
  updatedAt: string;
};

export interface postState {
  mainPosts: mainPostsType[];
  recentPosts: mainPostsType[];
  popularPosts: mainPostsType[];
  mostLikesPosts: mainPostsType[];
  currentPost: {
    id: number | null;
    title: string;
    content: string;
    image: string;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: string | null;
    views: number;
    likes: number;
  };
}

export enum postActionsType {
  SET_MAIN_POSTS = 'SET_MAIN_POSTS',
  SET_RECENT_POSTS = 'SET_RECENT_POSTS',
  SET_POPULAR_POSTS = 'SET_POPULAR_POSTS',
  SET_MOST_LIKES_POSTS = 'SET_MOST_LIKES_POSTS',
  SET_CURRENT_POST = 'SET_CURRENT_POST',
  SET_POST_LOADING = 'SET_POST_LOADING',
}

interface setMainPostsType {
  type: postActionsType.SET_MAIN_POSTS;
  payload: mainPostsType[];
}

interface setRecentPostsType {
  type: postActionsType.SET_RECENT_POSTS;
  payload: mainPostsType[];
}

interface setPopularPostsType {
  type: postActionsType.SET_POPULAR_POSTS;
  payload: mainPostsType[];
}

interface setMostLikesPostsType {
  type: postActionsType.SET_MOST_LIKES_POSTS;
  payload: mainPostsType[];
}

interface setCurrentPostType {
  type: postActionsType.SET_CURRENT_POST;
  payload: {
    id: number | null;
    title: string;
    content: string;
    image: string;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: string | null;
    views: number;
    likes: number;
  };
}

export type postActions =
  | setMainPostsType
  | setRecentPostsType
  | setPopularPostsType
  | setMostLikesPostsType
  | setCurrentPostType;
