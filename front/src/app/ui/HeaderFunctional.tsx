import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {selectUserIsAuth} from "../../entities/user/model/selectors/user.selectors";
import {logout} from "../../entities/user/model/reducers/user";
import {RoutesLinkEnum} from "../routes/model";

const HeaderFunctional: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(selectUserIsAuth)

    const onClickWriteArticleBtn = () => {
        navigate(RoutesLinkEnum.CreateArticle)
    }

    const onClickLogoutButton = () => {
        dispatch(logout())
    }

    return (
            <>
                <div className='header__right'>
                    {isAuth && (
                            <div className='header__button'>
                                <button onClick={onClickWriteArticleBtn} className='btn'>
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
            </>
    );
};

export default HeaderFunctional;
