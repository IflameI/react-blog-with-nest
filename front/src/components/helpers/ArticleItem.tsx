import { NavLink } from 'react-router-dom';

interface IArticleItem {
  link: string;
  widthImg: string;
  heightImg: string;
  img: string;
  suptitle: string;
  badge?: string;
}

const ArticleItem: React.FC<IArticleItem> = ({
  heightImg,
  img,
  link,
  suptitle,
  widthImg,
  badge,
}) => {
  return (
    <NavLink to={link}>
      <div className='article__item'>
        <div className='article__img'>
          <img width={widthImg} height={heightImg} src={img} alt='news img' />
          {badge && <div className='article__badge'>{badge}</div>}
        </div>
        <div className='article__suptitle'>{suptitle}</div>
      </div>
    </NavLink>
  );
};

export default ArticleItem;
