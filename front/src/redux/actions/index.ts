/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from './user/user';
import * as postActionCreators from './post/post';

export default {
  ...userActionCreators,
  ...postActionCreators,
};
