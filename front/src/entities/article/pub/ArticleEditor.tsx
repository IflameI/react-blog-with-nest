import React, {useRef} from "react";
import {Editor} from "@tinymce/tinymce-react";
import {Editor as TinyMCEEditor} from "tinymce";
import {Controller, useFormContext} from "react-hook-form";
import {CreateArticleRequestType} from "../model/config/config";

export const ArticleEditor = () => {
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const {control, setValue, formState: {errors}} = useFormContext<CreateArticleRequestType>();

    return (
            <>
                <div style={{display: 'flex'}}>
                    <div style={{flex: '1 1 auto'}}>
                        <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                name="contentHtml"
                                render={({field: {onChange, value}}) => (
                                        <Editor
                                                apiKey={process.env.REACT_APP_TINY_API_KEY}
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                onEditorChange={(a, e) => {
                                                    onChange(a)
                                                    setValue('content', e.getContent({format: "text"}))
                                                }}
                                                value={value}
                                                init={{
                                                    height: '300px',
                                                    menubar: false,
                                                    plugins: [
                                                        'searchreplace',
                                                        'pagebreak',
                                                    ],
                                                    toolbar:
                                                            "undo redo | formatselect | " +
                                                            "bold italic backcolor | alignleft aligncenter " +
                                                            "alignright alignjustify | bullist numlist outdent indent | " +
                                                            "removeformat | emoticons",
                                                    content_style:
                                                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                                    emoticons_append: {
                                                        custom_mind_explode: {
                                                            keywords: ["brain", "mind", "explode", "blown"],
                                                            char: "🤯",
                                                        },
                                                    },
                                                }}
                                        />
                                )}
                        />
                        {errors.content && errors.content.type === 'required' && (
                                <span className='input_error' style={{paddingTop: '10px'}}>This field is required</span>
                        )}
                    </div>
                </div>
            </>
    );
}
