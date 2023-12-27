import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Inputs} from "../../../../features/register";

const backendURL = 'http://127.0.0.1:3000'
type responseType = {
    data: {
        token: string
    }
}
export const registerUser = createAsyncThunk(
    'auth/registration',
    async ({email, password}: Inputs, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/auth/registration`,
                {email, password},
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
    async ({email, password}: Inputs, {rejectWithValue}) => {
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
            return data
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error."
            return rejectWithValue(message)
        }
    }
)
