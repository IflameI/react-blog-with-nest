import React, {useRef, useState} from "react";
import {Editor} from "@tinymce/tinymce-react";
import {Editor as TinyMCEEditor} from "tinymce";
import Markdown from "markdown-to-jsx";

export const ArticleEditor = () => {
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const [content, setContent] = useState("");
    const [text, setText] = useState();

    const onEditorChange = function (a: string, editor: any) {
        setContent(a);
        setText(editor.getContent({format: "text"}));
    };

    return (
            <>
                <div style={{height: "80px", overflow: "auto"}}>{text}</div>
                <div style={{display: 'flex'}}>
                    <div style={{flex: ' 0 1 50%'}}>
                        <Editor
                                initialValue={`<p class="mceNonDeletable">Non editable content</p>`}
                                onInit={(evt, editor) => editorRef.current = editor}
                                onEditorChange={onEditorChange}
                                value={content}
                                init={{
                                    height: '91vh',
                                    menubar: false,
                                    plugins: [
                                        'searchreplace',
                                        'pagebreak',
                                        'rollbackHistory',
                                    ],
                                    setup: function (editor) {
                                        editor.ui.registry.addButton("testBTN", {
                                            text: "My Button",
                                            onAction: () => console.log(2)
                                        });
                                        editor.on("keydown", function (event) {
                                            if (event.keyCode === 8 || event.keyCode === 46) {
                                                const currentLine = editor.selection.getNode();

                                                // Prevent deletion of non editable text
                                                if (currentLine.className.includes("mceNonDeletable")) {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                    return false;
                                                }
                                            }
                                        });
                                    },
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
                    </div>
                    <div style={{color: 'red', width: '100%'}}>
                        <Markdown>
                            {content}
                        </Markdown>
                    </div>
                </div>
            </>
    );
}
