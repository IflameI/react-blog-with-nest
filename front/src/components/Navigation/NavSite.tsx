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
      })}></nav>
  );
};

export default NavSite;
