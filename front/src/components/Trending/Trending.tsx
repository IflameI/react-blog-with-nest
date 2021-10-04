import { ArticleItem } from '..';

const Trending: React.FC = () => {
  return (
    <section className='trending'>
      <div className='container'>
        <h3 className='trending__title'>TRENDING NOW</h3>
        <div className='trending__row'>
          <div className='trending__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/rAyrlPYOtXns5RZZyUb9FBVcDI0=/308x256/2021/09/28/e2539a49-2f7b-413e-a6db-cea74c901305/amazon-glow-projected-home-display.png'
              link='/'
              suptitle='  Hey, Disney! Amazon announces Disney version of Alexa coming to Echo devices'
              widthImg='420px'
              badge='MOST TWEETS'
            />
          </div>
          <div className='trending__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/rAyrlPYOtXns5RZZyUb9FBVcDI0=/308x256/2021/09/28/e2539a49-2f7b-413e-a6db-cea74c901305/amazon-glow-projected-home-display.png'
              link='/'
              suptitle='  Hey, Disney! Amazon announces Disney version of Alexa coming to Echo devices'
              widthImg='420px'
              badge='MOST COMMENTS'
            />
          </div>
          <div className='trending__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/rAyrlPYOtXns5RZZyUb9FBVcDI0=/308x256/2021/09/28/e2539a49-2f7b-413e-a6db-cea74c901305/amazon-glow-projected-home-display.png'
              link='/'
              suptitle='  Hey, Disney! Amazon announces Disney version of Alexa coming to Echo devices'
              widthImg='420px'
              badge='MOST LIKES'
            />
          </div>
          <div className='trending__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/rAyrlPYOtXns5RZZyUb9FBVcDI0=/308x256/2021/09/28/e2539a49-2f7b-413e-a6db-cea74c901305/amazon-glow-projected-home-display.png'
              link='/'
              suptitle='  Hey, Disney! Amazon announces Disney version of Alexa coming to Echo devices'
              widthImg='420px'
              badge='MOST LIKES'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
