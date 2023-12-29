import React from 'react';
import {Story} from "../../../entities/story";
import {Loader} from "../../../shared";
import {useGetRecentArticlesQuery} from "../../../entities/article/model/services/articleApi";

export const LastStories: React.FC = () => {
    const {data: recentPosts, isLoading} = useGetRecentArticlesQuery()

    return (
            <div className='stories__column'>
                <div className='stories__title'>LATEST STORIES</div>
                {!isLoading && recentPosts ? (
                        recentPosts
                                .slice(0, 8)
                                .map((article, index) => (
                                        <Story
                                                key={`${index}__${article.title}`}
                                                infoTitle={article.title}
                                                infoSupTitle={article.content}
                                                img={article.image.data}
                                                time={article.updatedAt}
                                                link={`article/${article.id}`}
                                        />
                                ))
                ) : (
                        <Loader/>
                )}
            </div>
    );
};

