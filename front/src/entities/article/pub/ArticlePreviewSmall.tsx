import {Link} from 'react-router-dom';
import React from "react";
import {imgEnum} from "../../../shared/model/config";
import {imgToBase64} from "../../../shared/utils/imgToBase64";

interface IArticlePreviewSmall {
    link: string;
    widthImg: string;
    heightImg: string;
    img: Buffer;
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
                        <img width={widthImg} height={heightImg} src={imgToBase64(imgEnum.JPEG, img)} alt='news img'/>
                        {badge && <div className='article__badge'>{badge}</div>}
                    </div>
                    <div className='article__suptitle'>{suptitle}</div>
                </div>
            </Link>
    );
};

