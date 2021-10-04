import { MainContent, Stories, TheBest, Trending } from '../components';

const MainPage: React.FC = () => {
  return (
    <>
      <MainContent />
      <Stories />
      <TheBest />
      <Trending />
    </>
  );
};

export default MainPage;
