import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import { Modal } from '..';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';
import { useActions } from '../../redux/typeHooks/useActions';

type createArticleType = {
  title: string;
  author: string;
  content: string;
  image: string;
};

const MainHeader: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [createArticle, setCreateArticle] = useState<createArticleType>({
    title: '',
    author: '',
    content: '',
    image: '',
  });
  const { setUserLogout, createPost } = useActions();
  const { isAuth } = useTypedSelector((state) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost(createArticle);
    setModalActive(false);
  };

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__top'>
          <div className='header__left'>
            <NavLink exact to='/'>
              <h1 className='header__title'>Next-blog</h1>
            </NavLink>
          </div>
          <div className='header__right'>
            {isAuth && (
              <div className='header__button'>
                <button onClick={() => setModalActive(true)} className='btn'>
                  Написать статью
                </button>
              </div>
            )}
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
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__item'>
          <div className='modal__top'>Создание статьи</div>
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
        </div>
      </Modal>
    </header>
  );
};

export default MainHeader;
