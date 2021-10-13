export type mainPostsType = {
  id: number;
  title: string;
  content: string;
  image: string;
  userId: number;
};

export interface postState {
  mainPosts: mainPostsType[];
}

export enum postActionsType {
  SET_MAIN_POSTS = 'SET_MAIN_POSTS',
}

interface setMainPostsType {
  type: postActionsType.SET_MAIN_POSTS;
  payload: mainPostsType[];
}

export type postActions = setMainPostsType;
