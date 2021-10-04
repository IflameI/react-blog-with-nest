interface IInfoItem {
  time: string;
  infoTitle: string;
  infoSupTitle: string;
  img: string;
}

const InfoItem: React.FC<IInfoItem> = ({ img, infoSupTitle, infoTitle, time }) => {
  return (
    <div className='stories__infoItem'>
      <div className='stories__time'>{time}</div>
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
