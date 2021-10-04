import { ArticleItem, MainContentColumn } from '..';

const TopStories: React.FC = () => {
  return (
    <div className='stories__column'>
      <div className='stories__title'>TOP STORIES</div>
      <div className='stories__wrap'>
        <MainContentColumn
          link='/'
          img='https://www.cnet.com/a/img/5nswtFDWk1EU205zKg24h2PutU0=/1000x620/2021/09/28/84c2315a-ba2d-40a0-80d7-a42400a37a6b/echo-show-15-media-lifestyle-16.png'
          title='Amazons event: Everything announced'
          subtitle='   The company puts a strong emphasis on family fun and home security.'
          smallHeight={true}
        />
      </div>
      <div className='stories__items'>
        <ArticleItem
          heightImg='300px'
          img='https://www.cnet.com/a/img/rAyrlPYOtXns5RZZyUb9FBVcDI0=/308x256/2021/09/28/e2539a49-2f7b-413e-a6db-cea74c901305/amazon-glow-projected-home-display.png'
          link='/'
          suptitle='  Hey, Disney! Amazon announces Disney version of Alexa coming to Echo devices'
          widthImg='420px'
        />
        <ArticleItem
          heightImg='300px'
          img='https://www.cnet.com/a/img/rAyrlPYOtXns5RZZyUb9FBVcDI0=/308x256/2021/09/28/e2539a49-2f7b-413e-a6db-cea74c901305/amazon-glow-projected-home-display.png'
          link='/'
          suptitle='  Hey, Disney! Amazon announces Disney version of Alexa coming to Echo devices'
          widthImg='420px'
        />
      </div>
    </div>
  );
};

export default TopStories;
