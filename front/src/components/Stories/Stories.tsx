import { LastestStories, TopStories } from '..';

const Stories: React.FC = () => {
  return (
    <section className='stories'>
      <div className='container '>
        <div className='stories__row'>
          <TopStories />
          <LastestStories />
        </div>
      </div>
    </section>
  );
};

export default Stories;
