import React from 'react';
import {useGetMostLikesArticlesQuery} from "../../../entities/post/model/services/postApi";
import {Loader} from "../../../shared";
import {ArticlePreview, ArticlePreviewSmall} from "../../../entities/article";

export const TheBestArticles: React.FC = () => {
    const {data: mostLikesPosts, isLoading} = useGetMostLikesArticlesQuery()

    return (
            <section className='theBest'>
                <h3 className='theBest__title'>THE BEST</h3>
                <div className='theBest__row'>
                    {!isLoading && mostLikesPosts ? (
                            <>
                                <div className='theBest__column theBest__column--big'>
                                    {mostLikesPosts.slice(0, 1).map((item, index: number) => (
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
                                {mostLikesPosts.slice(1, 7).map((item, index: number) => (
                                        <div className='theBest__column' key={`${index}__${item.title}`}>
                                            <ArticlePreviewSmall
                                                    link={`article/${item.id}`}
                                                    img={item.image}
                                                    suptitle={item.title}
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

