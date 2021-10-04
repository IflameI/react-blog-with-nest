import { MainContentColumn } from '..';

const MainContent: React.FC = () => {
  return (
    <section className='mainContent'>
      <div className='mainContent__row'>
        <MainContentColumn
          link='/story/123'
          img='https://www.cnet.com/a/img/5nswtFDWk1EU205zKg24h2PutU0=/1000x620/2021/09/28/84c2315a-ba2d-40a0-80d7-a42400a37a6b/echo-show-15-media-lifestyle-16.png'
          title='Amazons event: Everything announced'
          subtitle='   The company puts a strong emphasis on family fun and home security.'
        />
        <MainContentColumn
          link='/story/1234'
          img='https://www.cnet.com/a/img/byWL2fU6ZLVh-x2VrgLx5iIqZEQ=/500x620/2021/09/28/5c70afa6-494f-44d6-8b79-c1879204c1f6/screen-shot-2021-09-28-at-9-59-13-am.png'
          title='  Hello, Astro! Amazons home robot could be the one weve been waiting for'
        />
        <MainContentColumn
          link='/'
          img='https://www.cnet.com/a/img/kv4_gr377P9dytYCHIx1fvZU8LQ=/500x620/2021/09/27/9e16b35f-ba09-4455-adef-5e7154e086fd/r1t-ext-offroaduphill-00515-final-rx.jpg'
          title='    2022 Rivian R1T was definitely worth the wait'
        />
      </div>
    </section>
  );
};

export default MainContent;
