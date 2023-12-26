import {RootState} from "../../../../app/store/model/store.model";
import {createSelector} from "@reduxjs/toolkit";

export const selectUser = (state: RootState) => state.user;

export const selectUserIsAuth = createSelector(
    selectUser,
    (state) => state?.isAuth,
);

export const selectUserToken = createSelector(
    selectUser,
    (state) => state.token,
);

