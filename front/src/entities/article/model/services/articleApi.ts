import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ArticleType, CreateArticleRequestType} from "../config/config";

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:3000/'}),
    endpoints: (builder) => ({
        getThreeArticles: builder.query<ArticleType[], void>({
            query: () => `/posts/threeArticles`,
        }),
        getPopularArticles: builder.query<ArticleType[], void>({
            query: () => `/posts/popularArticles`,
        }),
        getRecentArticles: builder.query<ArticleType[], void>({
            query: () => `/posts/recentArticles`,
        }),
        getMostLikesArticles: builder.query<ArticleType[], void>({
            query: () => `/posts/mostLikesArticles`,
        }),
        getArticleById: builder.query<ArticleType, number>({
            query: (id) => `/posts/arcticle/${id}`,
            transformResponse: (response: ArticleType) => response,
        }),
        createArticle: builder.mutation<ArticleType, CreateArticleRequestType>({
            query: (args) => ({
                url: '/posts',
                method: "POST",
                body: args,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            transformResponse: (response: ArticleType) => response,

        }),
    }),
})

export const {
    useGetThreeArticlesQuery,
    useGetPopularArticlesQuery,
    useGetRecentArticlesQuery,
    useGetArticleByIdQuery,
    useGetMostLikesArticlesQuery,
    useCreateArticleMutation
} = articleApi
