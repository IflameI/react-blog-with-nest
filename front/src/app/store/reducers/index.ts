import {combineReducers} from "@reduxjs/toolkit";
import {StoreEnum} from "../model/store.model";
import {postApi} from "../../../entities/post/model/services/postApi";
import user from "../../../entities/user/model/reducers/user";


export const rootReducer = combineReducers({
    [StoreEnum.USER]: user,
    [postApi.reducerPath]: postApi.reducer,
});


