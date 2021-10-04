import { stories } from './stories';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  stories,
});

export type RootState = ReturnType<typeof rootReducer>;
