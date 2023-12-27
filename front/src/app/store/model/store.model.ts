import {store} from "../store";
import {rootReducer} from "../reducers";

export enum StoreEnum {
    USER = 'user',
    POST = 'post',
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
