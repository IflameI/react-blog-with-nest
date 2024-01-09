import React, {FC, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {CreateArticleRequestType} from "../../../entities/article/model/config/config";
import {CreateArticleForm, CreateArticlePreview} from "../ui";

export const CreateArticle: FC = () => {
    const [imageResult, setImageResult] = useState<string | null>(null);

    const methods = useForm<CreateArticleRequestType>({
        mode: 'onChange',
        defaultValues: {
            title: '',
            image: '',
            content: '',
            contentHtml: '',
        },
    });

    return (
            <div>
                <div className='createArticleForm'>
                    <FormProvider {...methods}>
                        <div className='createArticleForm__left'>
                            <CreateArticleForm imageResult={imageResult} setImageResult={setImageResult}/>
                        </div>
                        <div className='createArticleForm__right'>
                            <CreateArticlePreview img={imageResult}/>
                        </div>
                    </FormProvider>
                </div>
            </div>
    )
}
