import { NavLink, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useActions } from '../../../redux/typeHooks/useActions';
type Inputs = {
  email: string;
  password: string;
};

const Register = () => {
  const { fetchUserRegister } = useActions();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetchUserRegister(data);
    history.push('/auth/login');
  };
  return (
    <section className='register'>
      <div className='register__wrap'>
        <div className='register__item'>
          <h1 className='register__title'>Регистрация</h1>
          <div className='register__form'>
            <form onSubmit={handleSubmit(onSubmit)} className='register__body'>
              <div className='register__input'>
                <label>Почта</label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Некоректный email',
                    },
                  })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <span className='auth__error'>Это поле обязательное</span>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <span className='auth__error'>{errors.email.message}</span>
                )}
              </div>
              <div className='register__input'>
                <label>Пароль</label>
                <input
                  type='password'
                  {...register('password', { required: true, minLength: 4, maxLength: 16 })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <span className='auth__error'>Это поле обязательное</span>
                )}
                {errors.password && errors.password.type === 'maxLength' && (
                  <span className='auth__error'>Не больше 16 символов</span>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <span className='auth__error'>Не меньше 4 символов </span>
                )}
              </div>
              <div className='register__button'>
                <button type='submit' className='btn'>
                  Зарегистрироваться
                </button>
              </div>
            </form>
            <div className='register__note'>
              Уже есть аккаунт?
              <NavLink to='/auth/login'>Войти в аккаунт</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
