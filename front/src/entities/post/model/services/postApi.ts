import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {MainPostType} from "../config/config";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3000/'}),
    endpoints: (builder) => ({
        getThreeArticles: builder.query<MainPostType[], void>({
            query: () => `/posts/threeArticles`,
        }),
        getPopularArticles: builder.query<MainPostType[], void>({
            query: () => `/posts/popularArticles`,
        }),
        getRecentArticles: builder.query<MainPostType[], void>({
            query: () => `/posts/recentArticles`,
        }),
        getMostLikesArticles: builder.query<MainPostType[], void>({
            query: () => `/posts/mostLikesArticles`,
        }),
    }),
})

export const {
    useGetThreeArticlesQuery,
    useGetPopularArticlesQuery,
    useGetRecentArticlesQuery,
    useGetMostLikesArticlesQuery
} = postApi
