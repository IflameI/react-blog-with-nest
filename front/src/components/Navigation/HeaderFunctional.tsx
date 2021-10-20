import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, ModalBody } from '..';

import { useActions } from '../../redux/typeHooks/useActions';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const HeaderFunctional: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const { setUserLogout } = useActions();
  const { isAuth } = useTypedSelector((state) => state.user);

  return (
    <>
      <div className='header__right'>
        {isAuth && (
          <div className='header__button'>
            <button onClick={() => setModalActive(true)} className='btn'>
              Write article
            </button>
          </div>
        )}
        <div className='header__button'>
          {!isAuth ? (
            <NavLink to='/auth/register'>
              <button className='btn'>Registration / Login</button>
            </NavLink>
          ) : (
            <button onClick={() => setUserLogout()} className='btn'>
              Logout
            </button>
          )}
        </div>
      </div>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <div className='modal__item'>
          <div className='modal__top'>Creation article</div>
          <ModalBody setModalActive={setModalActive} />
        </div>
      </Modal>
    </>
  );
};

export default HeaderFunctional;
