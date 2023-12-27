import {rootReducer} from './reducers';
import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "../../entities/post/model/services/postApi";


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware),
    devTools: true,
})

