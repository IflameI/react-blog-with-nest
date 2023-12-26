import {userState} from "../../../redux/types/userTypeRedux";
import {store} from "../store";

export enum StoreEnum {
    USER = 'user',
    POST = 'post',
}

export type AppDispatch = typeof store.dispatch

export interface RootState {
    [StoreEnum.USER]: userState;
}
