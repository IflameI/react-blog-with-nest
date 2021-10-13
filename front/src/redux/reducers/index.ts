import { user } from './user';
import { post } from './post';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user,
  post,
});

export type RootState = ReturnType<typeof rootReducer>;
