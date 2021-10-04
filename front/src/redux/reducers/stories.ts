import { storiesActionType, storiesActions, storiesState } from '../types/storiesTypeRedux';

const initialState: storiesState = {
  items: {},
  loading: false,
  error: '',
};

export const stories = (state = initialState, action: storiesActions): storiesState => {
  switch (action.type) {
    case storiesActionType.FETCH_STORIES_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case storiesActionType.FETCH_STORIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
