import { LastestStories, TopStories } from '..';

const Stories: React.FC = () => {
  return (
    <section className='stories'>
      <div className='stories__row'>
        <TopStories />
        <LastestStories />
      </div>
    </section>
  );
};

export default Stories;
