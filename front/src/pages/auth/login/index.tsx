import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <section className='register'>
      <div className='register__wrap'>
        <div className='register__item'>
          <h1 className='register__title'>Авторизация</h1>
          <div className='register__form'>
            <form className='register__body'>
              <div className='register__input'>
                <label>Имя</label>
                <input />
              </div>
              <div className='register__input'>
                <label>Пароль</label>
                <input />
              </div>
              <div className='register__input'>
                <label>Повторите пароль</label>
                <input />
              </div>
              <div className='register__button'>
                <button className='btn'>Зарегистрироваться</button>
              </div>
            </form>
            <div className='register__note'>
              Нет аккаунта?
              <NavLink to='/auth/register'>Зарегистрироваться</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
