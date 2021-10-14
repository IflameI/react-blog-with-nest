import axios from 'axios';

import { Dispatch } from 'redux';
import { postActions, postActionsType } from '../../types/postTypeRedux';

export const fetchTopArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/top-articles');
      dispatch({ type: postActionsType.SET_MAIN_POSTS, payload: response.data });
    } catch (e: any) {
      console.log(e);
    }
  };
};
