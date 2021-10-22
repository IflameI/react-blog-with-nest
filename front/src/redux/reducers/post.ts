import { postActions, postActionsType, postState } from '../types/postTypeRedux';

const initialState: postState = {
  mainPosts: [],
  recentPosts: [],
  popularPosts: [],
  mostLikesPosts: [],
  currentPost: {
    title: '',
    content: '',
    author: '',
    createdAt: null,
    updatedAt: null,
    id: null,
    image: '',
    likes: 0,
    views: 0,
  },
};

export const post = (state = initialState, action: postActions): postState => {
  switch (action.type) {
    case postActionsType.SET_MAIN_POSTS:
      return {
        ...state,
        mainPosts: action.payload,
      };
    case postActionsType.SET_RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.payload,
      };
    case postActionsType.SET_POPULAR_POSTS:
      return {
        ...state,
        popularPosts: action.payload,
      };
    case postActionsType.SET_MOST_LIKES_POSTS:
      return {
        ...state,
        mostLikesPosts: action.payload,
      };
    case postActionsType.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case postActionsType.SET_CREATE_POST:
      return {
        ...state,
        recentPosts: [...state.recentPosts, action.payload],
      };
    default:
      return state;
  }
};
