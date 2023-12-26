import React from 'react';
import {Story} from "../../../entities/story";
import {Loader} from "../../../shared";
import {useGetRecentArticlesQuery} from "../../../entities/post/model/services/postApi";

export const LastStories: React.FC = () => {
    const {data: recentPosts, isLoading} = useGetRecentArticlesQuery()

    return (
            <div className='stories__column'>
                <div className='stories__title'>LATEST STORIES</div>
                {!isLoading && recentPosts ? (
                        recentPosts
                                .slice(0, 8)
                                .map((item, index) => (
                                        <Story
                                                key={`${index}__${item.title}`}
                                                infoTitle={item.title}
                                                infoSupTitle={item.content}
                                                img={item.image}
                                                time={item.updatedAt}
                                                link={`article/${item.id}`}
                                        />
                                ))
                ) : (
                        <Loader/>
                )}
            </div>
    );
};

