import axios from 'axios';

import { Dispatch } from 'redux';
import { postActions, postActionsType } from '../../types/postTypeRedux';

export const fetchThreeArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/threeArticles');
      dispatch({ type: postActionsType.SET_MAIN_POSTS, payload: response.data });
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const fetchRecentArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/recentArticles');
      dispatch({ type: postActionsType.SET_RECENT_POSTS, payload: response.data });
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const fetchPopularArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/popularArticles');
      dispatch({ type: postActionsType.SET_POPULAR_POSTS, payload: response.data });
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const fetchMostLikesArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/mostLikesArticles');
      dispatch({ type: postActionsType.SET_MOST_LIKES_POSTS, payload: response.data });
    } catch (e: any) {
      console.log(e);
    }
  };
};
