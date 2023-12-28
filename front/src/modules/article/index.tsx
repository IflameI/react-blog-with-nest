import React from 'react';
import {useParams} from "react-router-dom";
import {useGetArticleByIdQuery} from "../../entities/article/model/services/articleApi";

const Article: React.FC = () => {
    const {id} = useParams()
    const {data: article, isLoading} = useGetArticleByIdQuery(Number(id))

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
            <>
                {article && <section className='internalStory'>
                    <h1 className='internalStory__title'>{article.title}</h1>
                    <div className='internalStory__info'>
                        <div className='internalStory__views'>
                            Author: <span>{article.author}</span>
                        </div>
                    </div>
                    <div className='internalStory__image'>
                        <img width='800px' height='600px' src={article.image} alt='img'/>
                    </div>
                    <p className='internalStory__text'>{article.content}</p>
                </section>}
            </>
    );
};

export default Article;
