import { useState } from 'react';
import { Dispatcher } from '../../globalTypes/setActionType';
import { useActions } from '../../redux/typeHooks/useActions';

interface IModalBody {
  setModalActive: Dispatcher<boolean>;
}

type createArticleType = {
  title: string;
  author: string;
  content: string;
  image: string;
};

const ModalBody: React.FC<IModalBody> = ({ setModalActive }) => {
  const { createPost } = useActions();
  const [createArticle, setCreateArticle] = useState<createArticleType>({
    title: '',
    author: '',
    content: '',
    image: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(createArticle);
    setModalActive(false);
  };
  return (
    <div className='modal__body'>
      <form onSubmit={handleSubmit} className='modal__form'>
        <div className='modal__wrap'>
          <label>Заголовок статьи</label>
          <input
            value={createArticle.title}
            onChange={(e) =>
              setCreateArticle((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className='modal__wrap'>
          <label>Имя автора</label>
          <input
            value={createArticle.author}
            onChange={(e) =>
              setCreateArticle((prevState) => ({
                ...prevState,
                author: e.target.value,
              }))
            }
          />
        </div>
        <div className='modal__wrap'>
          <label>Содержание статьи</label>
          <textarea
            value={createArticle.content}
            onChange={(e) =>
              setCreateArticle((prevState) => ({
                ...prevState,
                content: e.target.value,
              }))
            }
          />
        </div>
        <div className='modal__wrap'>
          <label>Ссылка на картину для статьи</label>
          <input
            value={createArticle.image}
            onChange={(e) =>
              setCreateArticle((prevState) => ({
                ...prevState,
                image: e.target.value,
              }))
            }
          />
        </div>
        <div className='modal__footer'>
          <button className='btn'>Отправить статью</button>
        </div>
      </form>
    </div>
  );
};

export default ModalBody;
