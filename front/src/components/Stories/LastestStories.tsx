import { useEffect, useState } from 'react';

import { InfoItem, Loader } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const LastestStories: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { recentPosts } = useTypedSelector((state) => state.post);
  const { fetchRecentArticles } = useActions();

  useEffect(() => {
    fetchRecentArticles();
  }, []);

  if (recentPosts[0] && isLoaded !== true) {
    setIsLoaded(true);
  }
  return (
    <div className='stories__column'>
      <div className='stories__title'>LATEST STORIES</div>
      {isLoaded ? (
        recentPosts
          .slice(0, 8)
          .map((item, index) => (
            <InfoItem
              key={`${index}__${item.title}`}
              infoTitle={item.title}
              infoSupTitle={item.content}
              img={item.image}
              time={item.updatedAt}
              link={`article/${item.id}`}
            />
          ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default LastestStories;
