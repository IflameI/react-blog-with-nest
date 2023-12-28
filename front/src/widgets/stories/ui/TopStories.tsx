import React from 'react';
import {Loader} from "../../../shared";
import {ArticlePreview, ArticlePreviewSmall} from "../../../entities/article";
import {useGetPopularArticlesQuery} from "../../../entities/article/model/services/articleApi";

export const TopStories: React.FC = () => {
    const {data: popularArticles, isLoading} = useGetPopularArticlesQuery()

    return (
            <div className='stories__column'>
                <div className='stories__title'>TOP STORIES</div>
                {!isLoading && popularArticles ? (
                        <>
                            <div className='stories__wrap'>
                                {popularArticles.slice(0, 1).map((article, index) => (
                                        <ArticlePreview
                                                key={`${article.title}__${index}`}
                                                link={`article/${article.id}`}
                                                img={article.image}
                                                title={article.title}
                                                subtitle={article.content}
                                                smallHeight={true}
                                        />
                                ))}
                            </div>
                            <div className='stories__items'>
                                {popularArticles.slice(1, 3).map((article, index) => (
                                        <ArticlePreviewSmall
                                                key={`${article.title}__${index}`}
                                                heightImg='300px'
                                                img={article.image}
                                                link={`article/${article.id}`}
                                                suptitle={article.title}
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

