import axios from 'axios';

import { Dispatch } from 'redux';
import { postActions, postActionsType } from '../../types/postTypeRedux';

export const fetchThreeArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/threeArticles');
      dispatch({ type: postActionsType.SET_MAIN_POSTS, payload: response.data });
    } catch (e: any) {
      console.warn('Произошла ошибка при получении 3 главных статей' + e);
    }
  };
};

export const fetchRecentArticles = () => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get('/posts/recentArticles');
      dispatch({ type: postActionsType.SET_RECENT_POSTS, payload: response.data });
    } catch (e: any) {
      console.warn('Произошла ошибка при получении последних статей' + e);
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
      console.warn('Произошла ошибка при получении наиболее залайконных статей' + e);
    }
  };
};

export const fetchCurrentArticle = (id: number) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.get(`/posts/arcticle/${id}`);
      dispatch({ type: postActionsType.SET_CURRENT_POST, payload: response.data });
    } catch (e: any) {
      console.warn('Произошла ошибка при получении выбранной статьи' + e);
    }
  };
};

export const createPost = (postData: any) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.post('/posts', postData);
      dispatch({ type: postActionsType.SET_CREATE_POST, payload: response.data });
    } catch (e: any) {
      console.warn('Произошла ошибка при создании статьи' + e);
    }
  };
};

export const incrementLike = (id: number) => {
  return async (dispatch: Dispatch<postActions>) => {
    try {
      const response = await axios.put(`/posts/like/${id}`);
      dispatch({ type: postActionsType.SET_INCREMENT_LIKE, payload: response.data });
    } catch (e: any) {
      console.warn('Произошла ошибка при постановке лайка' + e);
    }
  };
};
