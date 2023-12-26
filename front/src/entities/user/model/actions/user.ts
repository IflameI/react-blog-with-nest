import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "../../../../shared/model/config/actionWithPayload";

export const authUser = createAction('[USER/AUTH] SET_IS_USER_AUTH');

export const addUserToken = createAction('[USER/AUTH] SET_USER_TOKEN',
    actionWithPayloadType<{ token: string }>());

export const logoutUser = createAction('[USER/AUTH] USER_LOGOUT');
