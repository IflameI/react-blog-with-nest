import { useEffect } from 'react';

import { InfoItem, Loader } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const LastestStories: React.FC = () => {
  const { recentPosts, isLoaded } = useTypedSelector((state) => state.post);
  const { fetchRecentArticles } = useActions();

  useEffect(() => {
    fetchRecentArticles();
  }, []);

  return (
    <div className='stories__column'>
      <div className='stories__title'>LATEST STORIES</div>
      {isLoaded ? (
        recentPosts.map((item, index) => (
          <InfoItem
            key={`${index}__${item.title}`}
            infoTitle={item.title}
            infoSupTitle={item.content}
            img={item.image}
            time={item.updatedAt}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default LastestStories;
