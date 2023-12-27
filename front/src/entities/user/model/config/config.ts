import {SerializedError} from "@reduxjs/toolkit";
import {LoadingStatusEnum} from "../../../../shared/model/config";

export type userDataType = {
    email: string;
    password: string;
};

export interface userState {
    data: null | userDataType;
    loading: LoadingStatusEnum;
    error: SerializedError | null;
    token: string | null;
    isAuth: boolean;
}
