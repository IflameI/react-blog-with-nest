import {Link} from 'react-router-dom';

import React from "react";
import HeaderFunctional from "./HeaderFunctional";

const Header: React.FC = () => {
    return (
            <header className='header'>
                <div className='header__wrapper'>
                    <div className='header__top'>
                        <div className='header__left'>
                            <Link to={'/'}>
                                <h1 className='header__title'>React-blog</h1>
                            </Link>
                        </div>
                        <HeaderFunctional/>
                    </div>
                </div>
            </header>
    );
};

export default Header;
