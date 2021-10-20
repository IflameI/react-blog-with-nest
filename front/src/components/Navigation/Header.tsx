import { NavLink } from 'react-router-dom';

import { HeaderFunctional } from '..';

const MainHeader: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__top'>
          <div className='header__left'>
            <NavLink exact to='/'>
              <h1 className='header__title'>Next-blog</h1>
            </NavLink>
          </div>
          <HeaderFunctional />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
