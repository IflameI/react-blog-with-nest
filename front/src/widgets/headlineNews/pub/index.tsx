import React from "react";
import {Loader} from "../../../shared";
import {ArticlePreview} from "../../../entities/article";
import {useGetThreeArticlesQuery} from "../../../entities/article/model/services/articleApi";

export const HeadlineNews: React.FC = () => {
    const {data: articles, isLoading} = useGetThreeArticlesQuery()

    return (
            <section className='articlePreview'>
                <div className='articlePreview__row'>
                    {!isLoading && articles ? (
                            articles.map((article, index) => (
                                    <ArticlePreview
                                            key={`${article.title}__${index}`}
                                            link={`article/${article.id}`}
                                            img={article.image}
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
