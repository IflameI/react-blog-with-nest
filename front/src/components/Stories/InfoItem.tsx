import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { NavLink } from 'react-router-dom';

interface IInfoItem {
  time: string;
  infoTitle: string;
  infoSupTitle: string;
  img: string;
  link: string;
}

const InfoItem: React.FC<IInfoItem> = ({ img, infoSupTitle, infoTitle, time, link }) => {
  const transformTime = formatDistanceToNow(new Date(time), { addSuffix: true, locale: ruLocale });
  return (
    <NavLink to={link}>
      <div className='stories__infoItem'>
        <div className='stories__time'>{transformTime}</div>
        <div className='stories__info'>
          <h3 className='stories__infoTitle'>{infoTitle}</h3>
          <p className='stories__infoSupTitle'>{infoSupTitle}</p>
        </div>
        <div className='stories__imgMini'>
          <img width='84px' height='84px' src={img} alt='news' />
        </div>
      </div>
    </NavLink>
  );
};

export default InfoItem;
