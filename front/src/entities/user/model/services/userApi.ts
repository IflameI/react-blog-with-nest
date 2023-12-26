import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {userDataType} from "../../../../redux/types/userTypeRedux";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3000/'}),
    endpoints: (builder) => ({
        register: builder.query<void, userDataType>({
            query: (patch) => ({
                url: `/auth/registration`,
                method: 'POST',
                body: patch,
            }),
        }),
        login: builder.query<void, userDataType>({
            query: (patch) => ({
                url: `/auth/login`,
                method: 'POST',
                body: patch,
            }),
        }),
    }),
})

export const {
    useRegisterQuery,
} = userApi
