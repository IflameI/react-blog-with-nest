import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface INavSite {
  open: boolean;
}

const NavSite: React.FC<INavSite> = ({ open }) => {
  return (
    <nav
      className={classNames('header__navTop', {
        open: open,
      })}>
      <ul className='header__list'>
        <li>
          <NavLink to='/news'>
            <div>Новости</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/tech'>
            <div>Технологии</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/money'>
            <div>Финансы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/health'>
            <div>Здоровье</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavSite;
