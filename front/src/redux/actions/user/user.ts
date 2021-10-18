import axios from 'axios';

import { Dispatch } from 'redux';
import { userActions, userActionsType, userDataType } from '../../types/userTypeRedux';

export const fetchUserRegister = (postData: userDataType) => {
  return async () => {
    try {
      const response = await axios.post('/auth/registration', postData);
      return response;
    } catch (e: any) {
      if (e.response.status === 400) {
        alert('Пользователь с таким email уже существует');
      }
    }
  };
};

export const fetchUserLogin = (postData: userDataType) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const response: any = await axios.post('/auth/login', postData);
      dispatch({ type: userActionsType.SET_IS_AUTH, payload: true });
      dispatch({ type: userActionsType.SET_USER_TOKEN, payload: response.data.token });
      window.localStorage.setItem('Bearer', response.data.token);
      if (window.localStorage.Bearer === response.data.token) {
      }
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const setUserLogout = () => {
  return async (dispatch: Dispatch<userActions>) => {
    dispatch({ type: userActionsType.SET_IS_AUTH, payload: false });
    dispatch({ type: userActionsType.SET_USER_TOKEN, payload: null });
    window.localStorage.removeItem('Bearer');
  };
};

export const fetchInfoAboutMe = (email: string) => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const response = await axios.get(`/users/me/${email}`);
      dispatch({ type: userActionsType.SET_USER_DATA, payload: response.data });
      return response;
    } catch (e: any) {
      console.log(e);
    }
  };
};
