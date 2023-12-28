import {RootState} from "../../../../app/store/model/store.model";
import {createSelector} from "@reduxjs/toolkit";
import {LoadingStatusEnum} from "../../../../shared/model/config";

export const selectUser = (state: RootState) => state.user;

export const selectUserIsAuth = createSelector(
    selectUser,
    (state) => state?.isAuth,
);

export const selectUserToken = createSelector(
    selectUser,
    (state) => state.userData.token,
);

export const selectIsUserAuthSucceeded = createSelector(
    selectUser,
    (state) => state.loading === LoadingStatusEnum.SUCCEEDED,
);

export const selectIsUserAuthFail = createSelector(
    selectUser,
    (state) => state.loading === LoadingStatusEnum.FAILED,
);

export const selectIsUserAuthLoading = createSelector(
    selectUser,
    (state) => state.loading === LoadingStatusEnum.PENDING,
);

