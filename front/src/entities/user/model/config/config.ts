export type userDataType = {
    email: string;
    password: string;
};

export interface userState {
    data: null | userDataType;
    token: string | null;
    isAuth: boolean;
}
