import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import React from "react";

interface IArticlePreview {
    link: string;
    img: string;
    title: string;
    subtitle?: string;
    smallHeight?: boolean;
}

export const ArticlePreview: React.FC<IArticlePreview> = ({
                                                              img,
                                                              link,
                                                              subtitle,
                                                              title,
                                                              smallHeight,
                                                          }) => {
    return (
            <div className='articlePreview__column'>
                <NavLink to={link}>
                    <div
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                            className={classNames('articlePreview__item', {
                                'articlePreview__item--small': smallHeight,
                            })}>
                        <h2 className='articlePreview__title'>{title}</h2>
                        {subtitle && <p className='articlePreview__subtitle'>{subtitle}</p>}
                    </div>
                </NavLink>
            </div>
    );
};

