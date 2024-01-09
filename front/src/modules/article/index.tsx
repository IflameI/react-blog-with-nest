import React from 'react';
import {useParams} from "react-router-dom";
import {useGetArticleByIdQuery} from "../../entities/article/model/services/articleApi";
import {imgToBase64} from "../../shared/utils/imgToBase64";
import {imgEnum} from "../../shared/model/config";
import Markdown from "markdown-to-jsx";

const Article: React.FC = () => {
    const {id} = useParams()
    const {data: article, isLoading} = useGetArticleByIdQuery(Number(id))

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
            <>
                {article && <section className='article'>
                    <h1 className='article__title'>{article.title}</h1>
                    <div className='article__info'>
                        <div className='article__views'>
                            Author: <span>{article.author}</span>
                        </div>
                    </div>
                    <div className='article__image'>
                        <img
                                width='800px'
                                height='600px'
                                src={imgToBase64(imgEnum.JPEG, article.image.data)}
                                alt='img'
                        />
                    </div>
                    <div className='article__text'>
                        <Markdown>
                            {article.contentHtml}
                        </Markdown>
                    </div>
                </section>}
            </>
    );
};

export default Article;
