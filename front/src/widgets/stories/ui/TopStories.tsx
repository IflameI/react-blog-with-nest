import React, {useEffect} from 'react';
import {Loader} from "../../../shared";
import {ArticlePreview, ArticlePreviewSmall} from "../../../entities/article";
import {useGetPopularArticlesQuery} from "../../../entities/article/model/services/articleApi";
import {isString} from "../../../shared/utils/isString";
import {imgToBase64} from "../../../shared/utils/imgToBase64";
import {imgEnum} from "../../../shared/model/config";

export const TopStories: React.FC = () => {
    const {data: popularArticles, isLoading, refetch} = useGetPopularArticlesQuery()

    useEffect(() => {
        if (popularArticles && popularArticles.length) {
            refetch()
        }
    }, [])

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
                                                img={isString(article.image) ? article.image : imgToBase64(imgEnum.JPEG, article.image.data)}
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
                                                img={isString(article.image) ? article.image : imgToBase64(imgEnum.JPEG, article.image.data)}
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

