import { postActions, postActionsType, postState } from '../types/postTypeRedux';

const initialState: postState = {
  mainPosts: [],
};

export const post = (state = initialState, action: postActions): postState => {
  switch (action.type) {
    case postActionsType.SET_MAIN_POSTS:
      return {
        ...state,
        mainPosts: action.payload,
      };
    default:
      return state;
  }
};
