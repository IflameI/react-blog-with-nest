import React from 'react';
import {Loader} from "../../../shared";
import {useGetPopularArticlesQuery} from "../../../entities/post/model/services/postApi";
import {ArticlePreview, ArticlePreviewSmall} from "../../../entities/article";

export const TopStories: React.FC = () => {
    const {data: popularArticles, isLoading} = useGetPopularArticlesQuery()

    return (
            <div className='stories__column'>
                <div className='stories__title'>TOP STORIES</div>
                {!isLoading && popularArticles ? (
                        <>
                            <div className='stories__wrap'>
                                {popularArticles.slice(0, 1).map((item, index: number) => (
                                        <ArticlePreview
                                                key={`${item.title}__${index}`}
                                                link={`article/${item.id}`}
                                                img={item.image}
                                                title={item.title}
                                                subtitle={item.content}
                                                smallHeight={true}
                                        />
                                ))}
                            </div>
                            <div className='stories__items'>
                                {popularArticles.slice(1, 3).map((item, index: number) => (
                                        <ArticlePreviewSmall
                                                key={`${item.title}__${index}`}
                                                heightImg='300px'
                                                img={item.image}
                                                link={`article/${item.id}`}
                                                suptitle={item.title}
                                                widthImg='420px'
                                        />
                                ))}
                            </div>
                        </>
                ) : (
                        <Loader/>
                )}
            </div>
    );
};

