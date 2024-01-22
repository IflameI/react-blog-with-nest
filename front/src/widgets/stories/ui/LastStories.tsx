import React, {useEffect} from 'react';
import {Story} from "../../../entities/story";
import {Loader} from "../../../shared";
import {useGetRecentArticlesQuery} from "../../../entities/article/model/services/articleApi";
import {isString} from "../../../shared/utils/isString";
import {imgToBase64} from "../../../shared/utils/imgToBase64";
import {imgEnum} from "../../../shared/model/config";

export const LastStories: React.FC = () => {
    const {data: recentPosts, isLoading, refetch} = useGetRecentArticlesQuery()


    useEffect(() => {
        if (recentPosts && recentPosts.length) {
            refetch()
        }
    }, [])

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
                                                img={isString(article.image) ? article.image : imgToBase64(imgEnum.JPEG, article.image.data)}
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

