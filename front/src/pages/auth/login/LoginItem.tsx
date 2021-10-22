import { NavLink, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useActions } from '../../../redux/typeHooks/useActions';

type Inputs = {
  email: string;
  password: string;
};

const LoginItem: React.FC = () => {
  const { fetchUserLogin } = useActions();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetchUserLogin(data);
    history.push('/');
  };
  return (
    <div className='register__item'>
      <h1 className='register__title'>Authorization</h1>
      <div className='register__form'>
        <form onSubmit={handleSubmit(onSubmit)} className='register__body'>
          <div className='register__input'>
            <label>Email</label>
            <input
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Incorrect email',
                },
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span className='auth__error'>This field is required</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span className='auth__error'>{errors.email.message}</span>
            )}
          </div>
          <div className='register__input'>
            <label>Password</label>
            <input
              type='password'
              {...register('password', { required: true, minLength: 4, maxLength: 16 })}
            />
            {errors.password && errors.password.type === 'required' && (
              <span className='auth__error'>This field is required</span>
            )}
            {errors.password && errors.password.type === 'maxLength' && (
              <span className='auth__error'>16 characters maximum</span>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <span className='auth__error'>At least 4 characters </span>
            )}
          </div>
          <div className='register__button'>
            <button type='submit' className='btn'>
              Login
            </button>
          </div>
        </form>
        <div className='register__note'>
          Don't have an account?
          <NavLink to='/auth/register'>Register now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginItem;
