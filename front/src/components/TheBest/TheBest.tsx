import { useEffect } from 'react';
import { ArticleItem, MainContentColumn } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const TheBest: React.FC = () => {
  const { mostLikesPosts, isLoaded } = useTypedSelector((state) => state.post);
  const { fetchMostLikesArticles } = useActions();

  useEffect(() => {
    fetchMostLikesArticles();
  }, []);
  return (
    <section className='theBest'>
      <div className='container'>
        <h3 className='theBest__title'>THE BEST</h3>
        <div className='theBest__row'>
          <div className='theBest__column theBest__column--big'>
            {mostLikesPosts.slice(0, 1).map((item, index) => (
              <MainContentColumn
                link='/'
                img={item.image}
                title={item.title}
                subtitle={item.content}
                smallHeight={true}
              />
            ))}
          </div>
          {mostLikesPosts.slice(1, 6).map((item, index) => (
            <div className='theBest__column'>
              <ArticleItem
                link='/'
                img={item.image}
                suptitle={item.title}
                widthImg='420px'
                heightImg='300px'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheBest;
