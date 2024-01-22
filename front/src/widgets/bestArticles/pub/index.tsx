import React, {useEffect} from 'react';
import {Loader} from "../../../shared";
import {ArticlePreview, ArticlePreviewSmall} from "../../../entities/article";
import {useGetMostLikesArticlesQuery} from "../../../entities/article/model/services/articleApi";
import {isString} from "../../../shared/utils/isString";
import {imgToBase64} from "../../../shared/utils/imgToBase64";
import {imgEnum} from "../../../shared/model/config";

export const TheBestArticles: React.FC = () => {
    const {data: mostLikedArticles, isLoading, refetch} = useGetMostLikesArticlesQuery()

    useEffect(() => {
        if (mostLikedArticles && mostLikedArticles.length) {
            refetch()
        }
    }, [])

    return (
            <section className='theBest'>
                <h3 className='theBest__title'>THE BEST</h3>
                <div className='theBest__row'>
                    {!isLoading && mostLikedArticles ? (
                            <>
                                <div className='theBest__column theBest__column--big'>
                                    {mostLikedArticles.slice(0, 1).map((article, index) => (
                                            <ArticlePreview
                                                    key={`${article.title}__${index}`}
                                                    link={`article/${article.id}`}
                                                    img={isString(article.image) ? article.image : imgToBase64(imgEnum.JPEG, article.image.data)}
                                                    title={article.title}
                                                    subtitle={article.content}
                                                    smallHeight={true}
                                            />
                                    ))}
                                </div>
                                {mostLikedArticles.slice(1, 7).map((article, index) => (
                                        <div className='theBest__column' key={`${index}__${article.title}`}>
                                            <ArticlePreviewSmall
                                                    link={`article/${article.id}`}
                                                    img={isString(article.image) ? article.image : imgToBase64(imgEnum.JPEG, article.image.data)}
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

