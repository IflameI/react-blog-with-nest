import React from 'react';
import {Loader} from "../../../shared";
import {ArticlePreview, ArticlePreviewSmall} from "../../../entities/article";
import {useGetMostLikesArticlesQuery} from "../../../entities/article/model/services/articleApi";

export const TheBestArticles: React.FC = () => {
    const {data: mostLikedArticles, isLoading} = useGetMostLikesArticlesQuery()

    return (
            <section className='theBest'>
                <h3 className='theBest__title'>THE BEST</h3>
                <div className='theBest__row'>
                    {!isLoading && mostLikedArticles ? (
                            <>
                                <div className='theBest__column theBest__column--big'>
                                    {mostLikedArticles.slice(0, 1).map((article, index: number) => (
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
                                {mostLikedArticles.slice(1, 7).map((article, index: number) => (
                                        <div className='theBest__column' key={`${index}__${article.title}`}>
                                            <ArticlePreviewSmall
                                                    link={`article/${article.id}`}
                                                    img={article.image}
                                                    suptitle={article.title}
                                                    widthImg='420px'
                                                    heightImg='300px'
                                            />
                                        </div>
                                ))}
                            </>
                    ) : (
                            <Loader/>
                    )}
                </div>
            </section>
    );
};

