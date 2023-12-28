import {combineReducers} from "@reduxjs/toolkit";
import {StoreEnum} from "../model/store.model";
import user from "../../../entities/user/model/reducers/user";
import {articleApi} from "../../../entities/article/model/services/articleApi";


export const rootReducer = combineReducers({
    [StoreEnum.USER]: user,
    [articleApi.reducerPath]: articleApi.reducer,
});


