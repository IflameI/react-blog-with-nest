import { NavLink, useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useActions } from '../../../redux/typeHooks/useActions';

type Inputs = {
  email: string;
  password: string;
};

const RegisterItem: React.FC = () => {
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
    <div className='register__item'>
      <h1 className='register__title'>Registration</h1>
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
              <span className='auth__error'></span>
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
              Register
            </button>
          </div>
        </form>
        <div className='register__note'>
          Already have an account?
          <NavLink to='/auth/login'>Sign in to your account</NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterItem;
