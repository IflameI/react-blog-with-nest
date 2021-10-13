import { useEffect } from 'react';
import { MainContentColumn } from '..';
import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const MainContent: React.FC = () => {
  const { mainPosts } = useTypedSelector((state) => state.post);
  const { fetchTopArticles } = useActions();

  useEffect(() => {
    fetchTopArticles();
  }, []);
  return (
    <section className='mainContent'>
      <div className='mainContent__row'>
        {mainPosts.map((item, index) => (
          <MainContentColumn link={`article/${item.id}`} img={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default MainContent;
