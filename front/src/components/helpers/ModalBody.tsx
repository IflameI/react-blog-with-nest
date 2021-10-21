import { SubmitHandler, useForm } from 'react-hook-form';

import { Dispatcher } from '../../globalTypes/setActionType';
import { useActions } from '../../redux/typeHooks/useActions';

interface IModalBody {
  setModalActive: Dispatcher<boolean>;
}

type Inputs = {
  title: string;
  name: string;
  content: string;
  image: string;
};

const ModalBody: React.FC<IModalBody> = ({ setModalActive }) => {
  const { createPost } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createPost(data);
    setModalActive(false);
    reset();
  };
  return (
    <div className='modal__body'>
      <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
        <div className='modal__wrap'>
          <label>Article title</label>
          <input
            {...register('title', {
              required: true,
            })}
          />
          {errors.title && errors.title.type === 'required' && (
            <span className='auth__error'>This field is required</span>
          )}
        </div>
        <div className='modal__wrap'>
          <label>Author's name</label>
          <input
            {...register('name', {
              required: true,
            })}
          />
          {errors.name && errors.name.type === 'required' && (
            <span className='auth__error'>This field is required</span>
          )}
        </div>
        <div className='modal__wrap'>
          <label>The content of the article</label>
          <textarea
            {...register('content', {
              required: true,
            })}
          />
          {errors.content && errors.content.type === 'required' && (
            <span className='auth__error'>This field is required</span>
          )}
        </div>
        <div className='modal__wrap'>
          <label>Link to picture for article</label>
          <input
            {...register('image', {
              required: true,
            })}
          />
          {errors.image && errors.image.type === 'required' && (
            <span className='auth__error'>This field is required</span>
          )}
        </div>
        <div className='modal__footer'>
          <button className='btn'>Submit an article</button>
        </div>
      </form>
    </div>
  );
};

export default ModalBody;
