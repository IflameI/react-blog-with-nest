import React, {FC} from "react";
import Markdown from "markdown-to-jsx";
import {useFormContext} from "react-hook-form";
import {CreateArticleRequestType} from "../../../entities/article/model/config/config";

type CreateArticlePreviewType = {
    img: string | null;
}

export const CreateArticlePreview: FC<CreateArticlePreviewType> = ({img}) => {
    const {watch} = useFormContext<CreateArticleRequestType>();

    const [watchedContent, watchedTitle, watchedImage] = watch(['contentHtml', 'title', 'image']);

    return (
            <div className='createArticleForm__preview'>
                <div className='createArticleForm__preview--title'>{watchedTitle}</div>
                {img && (
                        <div>
                            <div className="imageBox">
                                <img style={{maxWidth: '200px', maxHeight: '200px', objectFit: 'cover'}}
                                     src={String(img)} alt={watchedImage} loading="lazy"/>
                            </div>
                        </div>
                )}
                <Markdown>
                    {watchedContent}
                </Markdown>
            </div>)
}
