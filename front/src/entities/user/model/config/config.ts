import {SerializedError} from "@reduxjs/toolkit";
import {LoadingStatusEnum} from "../../../../shared/model/config";

export type userDataType = {
    name?: string;
    email: string;
    password: string;
};

export interface userState {
    userData: {
        token: string | null;
        name: string;
    };
    loading: LoadingStatusEnum;
    error: SerializedError | null;
    isAuth: boolean;
}
