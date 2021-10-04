import axios from 'axios';

import { Dispatch } from 'redux';
import { storiesActionType, storiesActions } from '../types/storiesTypeRedux';

export const fetchStories = () => {
  return async (dispatch: Dispatch<storiesActions>) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/ping`);
      dispatch({ type: storiesActionType.FETCH_STORIES_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: storiesActionType.FETCH_STORIES_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};
