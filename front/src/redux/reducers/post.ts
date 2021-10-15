import { postActions, postActionsType, postState } from '../types/postTypeRedux';

const initialState: postState = {
  mainPosts: [],
  recentPosts: [],
  popularPosts: [],
  mostLikesPosts: [],
  isLoaded: false,
};

export const post = (state = initialState, action: postActions): postState => {
  switch (action.type) {
    case postActionsType.SET_MAIN_POSTS:
      return {
        ...state,
        mainPosts: action.payload,
        isLoaded: true,
      };
    case postActionsType.SET_RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.payload,
        isLoaded: true,
      };
    case postActionsType.SET_POPULAR_POSTS:
      return {
        ...state,
        popularPosts: action.payload,
        isLoaded: true,
      };
    case postActionsType.SET_MOST_LIKES_POSTS:
      return {
        ...state,
        mostLikesPosts: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};
