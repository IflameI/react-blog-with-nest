import {rootReducer} from './reducers';
import {configureStore} from "@reduxjs/toolkit";
import {articleApi} from "../../entities/article/model/services/articleApi";


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articleApi.middleware),
    devTools: true,
})

