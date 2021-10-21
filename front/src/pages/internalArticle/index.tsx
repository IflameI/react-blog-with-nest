import { useEffect } from 'react';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const InternalStory = ({ match }: any) => {
  const { currentPost } = useTypedSelector((state) => state.post);
  const { fetchCurrentArticle, incrementLike } = useActions();
  const currentIdPost: number = match.params.article;
  useEffect(() => {
    fetchCurrentArticle(currentIdPost);
  }, [currentPost.likes]);

  const handleIncrementLike = () => {
    incrementLike(currentIdPost);
  };

  return (
    <section className='internalStory'>
      <h1 className='internalStory__title'>{currentPost.title}</h1>
      <div className='internalStory__info'>
        <div className='internalStory__views'>
          Author: <span>{currentPost.author}</span>
        </div>
        <div className='internalStory__views'>
          Views: <span>{currentPost.views}</span>
        </div>
        <div className='internalStory__views'>
          Likes: <span onClick={handleIncrementLike}>{currentPost.likes}</span>
        </div>
      </div>
      <div className='internalStory__image'>
        <img width='800px' height='600px' src={currentPost.image} alt='img' />
      </div>
      <p className='internalStory__text'>{currentPost.content}</p>
    </section>
  );
};

export default InternalStory;
