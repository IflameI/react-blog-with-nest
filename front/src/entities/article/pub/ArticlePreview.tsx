import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import React from "react";
import {imgToBase64} from "../../../shared/utils/imgToBase64";
import {imgEnum} from "../../../shared/model/config";

interface IArticlePreview {
    link: string;
    img: Buffer;
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
                                backgroundImage: `url(${imgToBase64(imgEnum.JPEG, img)})`,
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

