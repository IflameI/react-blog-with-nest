import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import {GenerateImage} from "../../../features/generateImg";
import {ArticleEditor} from "../../../entities/article/pub/ArticleEditor";
import React, {FC} from "react";
import {CreateArticleRequestType} from "../../../entities/article/model/config/config";
import {useCreateArticleMutation} from "../../../entities/article/model/services/articleApi";

type CreateArticleFormType = {
    imageResult: string | null;
    setImageResult: (img: string) => void;
}

export const CreateArticleForm: FC<CreateArticleFormType> = ({imageResult, setImageResult}) => {
    const [create, {isLoading}] = useCreateArticleMutation()

    const {watch, control, handleSubmit} = useFormContext<CreateArticleRequestType>();

    const handleImageResult = (img: string) => {
        setImageResult(img)
    }

    const onSubmit: SubmitHandler<CreateArticleRequestType> = (data) => {
        if (!imageResult) return;

        create({
            title: data.title,
            author: 'anonymus',
            content: data.content,
            contentHtml: data.contentHtml,
            image: imageResult ? imageResult.split(',')[1] : ''
        })
    }

    const [watchedImage] = watch(['image']);

    return (
            <div className='createArticleForm__item'>
                <h1 className='createArticleForm__title'>Create article</h1>
                <form onSubmit={handleSubmit(onSubmit)}
                      style={{
                          height: '95%',
                          display: 'flex',
                          flexDirection: "column",
                          justifyContent: 'space-between'
                      }}
                >
                    <div>
                        <div className='createArticleForm__input'>
                            <label>Title *</label>
                            <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                        minLength: 3,
                                    }}
                                    name="title"
                                    render={({field: {onChange, value}}) => (
                                            <input
                                                    onChange={onChange}
                                                    placeholder="Some incredible title"
                                                    value={value}
                                                    required
                                            />
                                    )}
                            />
                        </div>
                        <div className='createArticleForm__input'>
                            <label>Image prompt for ai (generate img preview) *</label>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{flex: '0 1 84.5%'}}>
                                    <Controller
                                            control={control}
                                            rules={{
                                                required: true,
                                            }}
                                            name="image"
                                            render={({field: {onChange, value}}) => (
                                                    <input
                                                            onChange={onChange}
                                                            value={value}
                                                            placeholder="A plush toy robot sitting against a yellow wall"
                                                            required
                                                    />
                                            )}
                                    />
                                </div>
                                <GenerateImage
                                        promptQuery={watchedImage}
                                        handleImageResult={handleImageResult}
                                />
                            </div>
                            {!imageResult && watchedImage &&
                                    <div className='input_error' style={{marginTop: '5px'}}>
                                        Please press generate button
                                    </div>}
                        </div>
                        <div className='createArticleForm__input'>
                            <label>Article content *</label>
                            <ArticleEditor/>
                        </div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <button className='btn'
                                disabled={!imageResult || isLoading}
                                type='submit'
                                style={{color: 'red', borderRadius: '4px', border: '1px solid #000'}}>
                            {isLoading ? 'LOADING...' : 'CREATE'}
                        </button>
                    </div>
                </form>
            </div>
    )
}
