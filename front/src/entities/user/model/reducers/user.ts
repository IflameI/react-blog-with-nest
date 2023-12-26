import {createReducer} from "@reduxjs/toolkit";
import {userState} from "../config/config";
import {UserActions} from "../actions";

const initialState: userState = {
    data: null,
    token: window.localStorage.Bearer,
    isAuth: !!window.localStorage.Bearer,
};

export const user = createReducer(initialState, (builder) => builder
    .addCase(UserActions.authUser, (state) => ({
        ...state,
        isAuth: true,
    }))
    .addCase(UserActions.logoutUser, (state) => ({
        ...state,
        isAuth: true,
        token: null,
    }))
    .addCase(UserActions.addUserToken, (state, {payload: {token}}) => ({
        ...state,
        token: token,
    }))
);
