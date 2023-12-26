import {rootReducer} from './reducers';
import {configureStore, isAnyOf} from "@reduxjs/toolkit";
import {postApi} from "../../entities/post/model/services/postApi";
import {startAppListening} from "./listenerMiddleware";
import {userApi} from "../../entities/user/model/services/userApi";


export const store = configureStore({
    reducer: {
        rootReducer,
        [postApi.reducerPath]: postApi.reducer,
        [userApi.reducerPath]: userApi.reducer

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware),
    devTools: true,
})


startAppListening({
    matcher: isAnyOf(userApi.endpoints.register.matchFulfilled, userApi.endpoints.login.matchFulfilled),
    effect: (action, listenerApi) => {
        localStorage.setItem('', JSON.stringify(listenerApi.getState().));
    },
})
