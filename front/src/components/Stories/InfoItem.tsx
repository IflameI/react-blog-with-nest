import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

interface IInfoItem {
  time: string;
  infoTitle: string;
  infoSupTitle: string;
  img: string;
}

const InfoItem: React.FC<IInfoItem> = ({ img, infoSupTitle, infoTitle, time }) => {
  const transformTime = formatDistanceToNow(new Date(time), { addSuffix: true, locale: ruLocale });
  return (
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
  );
};

export default InfoItem;
