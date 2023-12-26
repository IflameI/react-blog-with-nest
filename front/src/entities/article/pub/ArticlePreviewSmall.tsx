import {Link} from 'react-router-dom';
import React from "react";

interface IArticlePreviewSmall {
    link: string;
    widthImg: string;
    heightImg: string;
    img: string;
    suptitle: string;
    badge?: string;
}

export const ArticlePreviewSmall: React.FC<IArticlePreviewSmall> = ({
                                                                        heightImg,
                                                                        img,
                                                                        link,
                                                                        suptitle,
                                                                        widthImg,
                                                                        badge,
                                                                    }) => {
    return (
            <Link to={link}>
                <div className='article__item'>
                    <div className='article__img'>
                        <img width={widthImg} height={heightImg} src={img} alt='news img'/>
                        {badge && <div className='article__badge'>{badge}</div>}
                    </div>
                    <div className='article__suptitle'>{suptitle}</div>
                </div>
            </Link>
    );
};

