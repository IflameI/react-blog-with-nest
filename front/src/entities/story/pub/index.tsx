import {formatDistanceToNow} from 'date-fns';
import {NavLink} from 'react-router-dom';
import React from "react";
import {imgToBase64} from "../../../shared/utils/imgToBase64";
import {imgEnum} from "../../../shared/model/config";
import {isString} from "../../../shared/utils/isString";

interface IStory {
    time: string;
    infoTitle: string;
    infoSupTitle: string;
    img: Buffer | string;
    link: string;
}

export const Story: React.FC<IStory> = ({img, infoSupTitle, infoTitle, time, link}) => {
    const transformTime = formatDistanceToNow(new Date(time), {addSuffix: true});
    return (
            <NavLink to={link}>
                <div className='stories__infoItem'>
                    <div className='stories__time'>{transformTime}</div>
                    <div className='stories__info'>
                        <h3 className='stories__infoTitle'>{infoTitle}</h3>
                        <p className='stories__infoSupTitle'>{infoSupTitle}</p>
                    </div>
                    <div className='stories__imgMini'>
                        <img width='84px' height='84px'
                             src={isString(img) ? String(img) : imgToBase64(imgEnum.JPEG, img)} alt='news'/>
                    </div>
                </div>
            </NavLink>
    );
};
