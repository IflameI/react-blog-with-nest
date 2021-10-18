import { useEffect, useState } from 'react';

import { ArticleItem, Loader, MainContentColumn } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const TopStories: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { popularPosts } = useTypedSelector((state) => state.post);
  const { fetchPopularArticles } = useActions();

  useEffect(() => {
    fetchPopularArticles();
  }, []);
  if (popularPosts[0] && isLoaded !== true) {
    setIsLoaded(true);
  }
  return (
    <div className='stories__column'>
      <div className='stories__title'>TOP STORIES</div>
      {isLoaded ? (
        <>
          <div className='stories__wrap'>
            {popularPosts.slice(0, 1).map((item, index) => (
              <MainContentColumn
                link={`article/${item.id}`}
                img={item.image}
                title={item.title}
                subtitle={item.content}
                smallHeight={true}
              />
            ))}
          </div>
          <div className='stories__items'>
            {popularPosts.slice(1, 3).map((item, index) => (
              <ArticleItem
                heightImg='300px'
                img={item.image}
                link={`article/${item.id}`}
                suptitle={item.title}
                widthImg='420px'
              />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TopStories;
