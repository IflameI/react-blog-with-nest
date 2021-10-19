import { useEffect } from 'react';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const InternalStory = ({ match }: any) => {
  const { currentPost } = useTypedSelector((state) => state.post);
  const { fetchCurrentArticle } = useActions();

  useEffect(() => {
    fetchCurrentArticle(match.params.article);
  }, []);

  return (
    <section className='internalStory'>
      <div className='container'>
        <h1 className='internalStory__title'>{currentPost.title}</h1>
        <div className='internalStory__info'>
          <div className='internalStory__views'>
            Author: <span>{currentPost.author}</span>
          </div>
          <div className='internalStory__views'>
            Views: <span>{currentPost.views}</span>
          </div>
          <div className='internalStory__views'>
            Likes: <span>{currentPost.likes}</span>
          </div>
        </div>
        <div className='internalStory__image'>
          <img width='800px' height='600px' src={currentPost.image} alt='img' />
        </div>
        <p className='internalStory__text'>{currentPost.content}</p>
      </div>
    </section>
  );
};

export default InternalStory;
