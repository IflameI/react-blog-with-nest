import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectUserIsAuth} from "../../entities/user/model/selectors/user.selectors";
import {UserActions} from "../../entities/user/model/actions";

const HeaderFunctional: React.FC = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectUserIsAuth)
    const [modalActive, setModalActive] = useState<boolean>(false);

    const onClickLogoutButton = () => {
        dispatch(UserActions.logoutUser)
    }

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
                                <NavLink to='/register'>
                                    <button className='btn'>Registration / Login</button>
                                </NavLink>
                        ) : (
                                <button onClick={onClickLogoutButton} className='btn'>
                                    Logout
                                </button>
                        )}
                    </div>
                </div>
                {/*<Modal active={modalActive} setModalActive={setModalActive}>*/}
                {/*  <div className='modal__item'>*/}
                {/*    <div className='modal__top'>Creation article</div>*/}
                {/*    <ModalBody setModalActive={setModalActive} />*/}
                {/*  </div>*/}
                {/*</Modal>*/}
            </>
    );
};

export default HeaderFunctional;
