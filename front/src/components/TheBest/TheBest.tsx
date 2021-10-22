import { useEffect, useState } from 'react';
import { ArticleItem, Loader, MainContentColumn } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const TheBest: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { mostLikesPosts } = useTypedSelector((state) => state.post);
  const { fetchMostLikesArticles } = useActions();

  useEffect(() => {
    fetchMostLikesArticles();
  }, []);
  if (mostLikesPosts[0] && isLoaded !== true) {
    setIsLoaded(true);
  }
  return (
    <section className='theBest'>
      <h3 className='theBest__title'>THE BEST</h3>
      <div className='theBest__row'>
        {isLoaded ? (
          <>
            <div className='theBest__column theBest__column--big'>
              {mostLikesPosts.slice(0, 1).map((item, index: number) => (
                <MainContentColumn
                  key={`${item.title}__${index}`}
                  link={`article/${item.id}`}
                  img={item.image}
                  title={item.title}
                  subtitle={item.content}
                  smallHeight={true}
                />
              ))}
            </div>
            {mostLikesPosts.slice(1, 7).map((item, index: number) => (
              <div className='theBest__column' key={`${index}__${item.title}`}>
                <ArticleItem
                  link={`article/${item.id}`}
                  img={item.image}
                  suptitle={item.title}
                  widthImg='420px'
                  heightImg='300px'
                />
              </div>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default TheBest;
