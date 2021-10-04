import { ArticleItem, MainContentColumn } from '..';

const TheBest: React.FC = () => {
  return (
    <section className='theBest'>
      <div className='container'>
        <h3 className='theBest__title'>THE BEST</h3>
        <div className='theBest__row'>
          <div className='theBest__column theBest__column--big'>
            <MainContentColumn
              link='/'
              img='https://www.cnet.com/a/img/sI2iuvLpatn51wwH4TzfBrsXKq4=/644x385/2020/04/10/f5ded53d-7a30-4c44-85fb-1cf5dcbf9061/asus-chromebook-flip-c436-0053.jpg'
              title='The best 15-inch gaming and work laptop for 2021'
              smallHeight={true}
            />
          </div>
          <div className='theBest__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/Pn7wpKoAeUMab1T7bbCAaVf7zC4=/308x256/2020/09/05/1da2cb73-88bb-41e5-b2be-77284e9351b4/best-2020-phone-cameras-6986.jpg'
              link='/'
              suptitle='Best phones to give as gifts: iPhone 12, Galaxy S20 FE, Pixel 4A 5G and more'
              widthImg='420px'
            />
          </div>
          <div className='theBest__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/JXqJuUD6PCnu5NNgbeTadrFgttw=/308x256/2021/02/10/c3eda738-df98-4946-90d3-e49b76a7fdbb/vari-electric-standing-desk.jpg'
              link='/'
              suptitle='The best standing desk for 2021'
              widthImg='420px'
            />
          </div>
          <div className='theBest__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/lp-4YJKjXd9LEeavMzDWEvXxf8w=/308x256/2020/11/09/b70a0702-4c0f-40d6-9d06-6050fb9f8f0c/28-iphone-12-mini-and-iphone-12-pro-max.jpg'
              link='/'
              suptitle='Best iPhone 2021: We looked at all 7 models Apple sells to decide which is best'
              widthImg='420px'
            />
          </div>
          <div className='theBest__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/UD1YyAkmwBIpEt3azZd1WaL7zjg=/308x256/2020/06/30/0f2eab39-c63f-43da-ab29-dad9a1891d69/mattresses.png'
              link='/'
              suptitle='Best king mattresses: Nectar, Helix, Intellibed and more'
              widthImg='420px'
            />
          </div>
          <div className='theBest__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/OiaeHLJsKq-OlX-Aa5ZGClns89U=/308x256/2021/04/13/9b9b7d83-d2aa-4e84-aca6-ed7daf788e5c/epson-5050-3-of-10.jpg'
              link='/'
              suptitle='Best home theater projector for 2021'
              widthImg='420px'
            />
          </div>
          <div className='theBest__column'>
            <ArticleItem
              heightImg='300px'
              img='https://www.cnet.com/a/img/kTuS_xSeyDRI1rW5OZzIIQqTdCw=/308x256/2020/02/26/4dde67ee-0caa-4df6-9aed-b85d71795015/grill-testing-photos-feb-2020-4.jpg'
              link='/'
              suptitle='Best gas grills of 2021: Weber, Char-Broil and more'
              widthImg='420px'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBest;
