import {createSlice} from "@reduxjs/toolkit";
import {userState} from "../config/config";
import {loginUser, registerUser} from "../services/userApi";
import {LoadingStatusEnum} from "../../../../shared/model/config";

const initialState: userState = {
    data: null,
    error: null,
    loading: LoadingStatusEnum.IDLE,
    token: window.localStorage.Bearer,
    isAuth: !!window.localStorage.Bearer,
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearState(state) {
            state.isAuth = false
            state.token = null
            state.error = null
            state.loading = LoadingStatusEnum.IDLE
        },
        logout(state) {
            localStorage.removeItem('Bearer')
            state.isAuth = false
            state.token = null
            state.error = null
            state.loading = LoadingStatusEnum.IDLE
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = LoadingStatusEnum.PENDING
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = LoadingStatusEnum.SUCCEEDED
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            if (action.error) {
                state.error = action.error
                state.loading = LoadingStatusEnum.FAILED
            }
        })
        builder.addCase(loginUser.pending, (state) => {
            // Add user to the state array
            state.loading = LoadingStatusEnum.PENDING
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.token = action.payload.token
                state.isAuth = true
                state.loading = LoadingStatusEnum.SUCCEEDED
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            if (action.error) {
                state.error = action.error
                state.loading = LoadingStatusEnum.FAILED
            }
        })
    },
})
export const {logout, clearState} = user.actions
export default user.reducer

