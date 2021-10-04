import { Burger } from '..';
import { NavLink } from 'react-router-dom';

const MainHeader: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__top'>
            <div className='header__left'>
              <NavLink exact to='/'>
                <h1 className='header__title'>Next-blog</h1>
              </NavLink>
              <Burger />
            </div>
            <div className='header__right'>
              <div className='header__button'>
                <NavLink to='/auth/register'>
                  <button className='btn'>Регистрация / вход</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
