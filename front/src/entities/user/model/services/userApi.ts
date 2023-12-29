import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {userDataType} from "../config/config";

const backendURL = 'http://127.0.0.1:3000'
type responseType = {
    data: {
        token: string;
        name: string;
    }
}
export const registerUser = createAsyncThunk(
    'auth/registration',
    async ({email, name, password}: userDataType, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/auth/registration`,
                {email, name, password},
                config
            )
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error."
            return rejectWithValue(message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password}: userDataType, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const {data}: responseType = await axios.post(
                `${backendURL}/auth/login`,
                {email, password},
                config
            )
            localStorage.setItem('Bearer', data.token)
            localStorage.setItem('userName', data.name)
            return data
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error."
            return rejectWithValue(message)
        }
    }
)
