import { useEffect } from 'react';

import { ArticleItem, MainContentColumn } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const TopStories: React.FC = () => {
  const { popularPosts, isLoaded } = useTypedSelector((state) => state.post);
  const { fetchPopularArticles } = useActions();

  useEffect(() => {
    fetchPopularArticles();
  }, []);

  return (
    <div className='stories__column'>
      <div className='stories__title'>TOP STORIES</div>
      <div className='stories__wrap'>
        {popularPosts.slice(0, 1).map((item, index) => (
          <MainContentColumn
            link='/'
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
            link='/'
            suptitle={item.title}
            widthImg='420px'
          />
        ))}
      </div>
    </div>
  );
};

export default TopStories;
