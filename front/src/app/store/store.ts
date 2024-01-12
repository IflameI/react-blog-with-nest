import {rootReducer} from './reducers';
import {configureStore, isRejectedWithValue, Middleware, MiddlewareAPI} from "@reduxjs/toolkit";
import {articleApi} from "../../entities/article/model/services/articleApi";
import {toast} from "react-toastify";

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            console.warn('We got a rejected action!')
            toast.error(`Something went wrong: ${action.payload}`)
        }
        return next(action)
    }

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articleApi.middleware, rtkQueryErrorLogger),
    devTools: true,
})

