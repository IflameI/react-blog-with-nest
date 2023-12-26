import {combineReducers, Reducer} from "@reduxjs/toolkit";
import {RootState, StoreEnum} from "../model/store.model";
import {user} from "../../../entities/user/model/reducers/user";


export const rootReducer: Reducer<RootState> = combineReducers({
    [StoreEnum.USER]: user,
});


