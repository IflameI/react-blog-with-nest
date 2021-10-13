import { userActions, userActionsType, userState } from '../types/userTypeRedux';

const initialState: userState = {
  data: null,
  token: window.localStorage.Bearer,
  isAuth: window.localStorage.Bearer ? true : false,
  loading: false,
};

export const user = (state = initialState, action: userActions): userState => {
  switch (action.type) {
    case userActionsType.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case userActionsType.SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case userActionsType.SET_USER_LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
