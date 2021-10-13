import { Burger } from '..';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';
import { useActions } from '../../redux/typeHooks/useActions';

const MainHeader: React.FC = () => {
  const { setUserLogout } = useActions();
  const { isAuth } = useTypedSelector((state) => state.user);
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
                {!isAuth ? (
                  <NavLink to='/auth/register'>
                    <button className='btn'>Регистрация / вход</button>
                  </NavLink>
                ) : (
                  <button onClick={() => setUserLogout()} className='btn'>
                    Выход
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
