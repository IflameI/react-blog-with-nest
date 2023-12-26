import React, { useEffect } from 'react';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const Article: React.FC = ({ match }: any) => {
  const { currentPost } = useTypedSelector((state) => state.post);
  const { fetchCurrentArticle } = useActions();

  const currentIdPost: number = match.params.article;
  useEffect(() => {
    fetchCurrentArticle(currentIdPost);
  }, []);

  return (
    <section className='internalStory'>
      <h1 className='internalStory__title'>{currentPost.title}</h1>
      <div className='internalStory__info'>
        <div className='internalStory__views'>
          Author: <span>{currentPost.author}</span>
        </div>
      </div>
      <div className='internalStory__image'>
        <img width='800px' height='600px' src={currentPost.image} alt='img' />
      </div>
      <p className='internalStory__text'>{currentPost.content}</p>
    </section>
  );
};

export default Article;
