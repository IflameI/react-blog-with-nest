export type userDataType = {
  email: string;
  password: string;
};

export interface userState {
  data: null | userDataType;
  token: string;
  isAuth: boolean;
  loading: boolean;
}

export enum userActionsType {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER_DATA_PENDING = 'SET_USER_DATA_PENDING',
  SET_USER_DATA_SUCCESS = 'SET_USER_DATA_SUCCESS',
  SET_USER_TOKEN = 'SET_USER_TOKEN',
}

interface setUserIsAuthType {
  type: userActionsType.SET_IS_AUTH;
  payload: boolean;
}

interface setUserDataPendingType {
  type: userActionsType.SET_USER_DATA_PENDING;
}

interface setUserTokenType {
  type: userActionsType.SET_USER_TOKEN;
  payload: string;
}

interface setUserDataSuccessType {
  type: userActionsType.SET_USER_DATA_SUCCESS;
  payload: any;
}

export type userActions =
  | setUserDataPendingType
  | setUserIsAuthType
  | setUserDataSuccessType
  | setUserTokenType;
