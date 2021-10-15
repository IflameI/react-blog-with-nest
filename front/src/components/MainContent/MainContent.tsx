import { useEffect } from 'react';

import { Loader, MainContentColumn } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';
import { mainPostsType } from '../../redux/types/postTypeRedux';

const MainContent: React.FC = () => {
  const { mainPosts, isLoaded } = useTypedSelector((state) => state.post);
  const { fetchThreeArticles } = useActions();

  useEffect(() => {
    fetchThreeArticles();
  }, []);

  return (
    <section className='mainContent'>
      <div className='mainContent__row'>
        {isLoaded ? (
          mainPosts
            .slice(0, 3)
            .map((item: mainPostsType) => (
              <MainContentColumn link={`article/${item.id}`} img={item.image} title={item.title} />
            ))
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default MainContent;
