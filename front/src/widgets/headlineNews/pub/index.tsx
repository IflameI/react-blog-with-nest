import React, {useEffect} from "react";
import {Loader} from "../../../shared";
import {ArticlePreview} from "../../../entities/article";
import {useGetThreeArticlesQuery} from "../../../entities/article/model/services/articleApi";
import {imgToBase64} from "../../../shared/utils/imgToBase64";
import {imgEnum} from "../../../shared/model/config";
import {isString} from "../../../shared/utils/isString";

export const HeadlineNews: React.FC = () => {
    const {data: articles, isLoading, refetch} = useGetThreeArticlesQuery()


    useEffect(() => {
        if (articles && articles.length) {
            refetch()
        }
    }, [])

    return (
            <section className='articlePreview'>
                <div className='articlePreview__row'>
                    {!isLoading && articles ? (
                            articles.map((article) => (
                                    <ArticlePreview
                                            link={`article/${article.id}`}
                                            img={isString(article.image) ? article.image : imgToBase64(imgEnum.JPEG, article.image.data)}
                                            title={article.title}
                                    />
                            ))
                    ) : (
                            <Loader/>
                    )}
                </div>
            </section>
    );
};
