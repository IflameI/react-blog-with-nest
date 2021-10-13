import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface IMainContentColumn {
  link: string;
  img: string;
  title: string;
  subtitle?: string;
  smallHeight?: boolean;
}

const MainContentColumn: React.FC<IMainContentColumn> = ({
  img,
  link,
  subtitle,
  title,
  smallHeight,
}) => {
  return (
    <div className='mainContent__column'>
      <NavLink to={link}>
        <div
          style={{
            backgroundImage: `url(localhost:5000/${img})`,
          }}
          className={classNames('mainContent__item', {
            'mainContent__item--small': smallHeight,
          })}>
          <h2 className='mainContent__title'>{title}</h2>
          {subtitle && <p className='mainContent__subtitle'>{subtitle}</p>}
        </div>
      </NavLink>
    </div>
  );
};

export default MainContentColumn;
