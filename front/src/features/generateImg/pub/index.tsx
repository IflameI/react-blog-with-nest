import React, {FC, useState} from "react";
import {fetchGeneratedImage} from "../../../entities/articleImage/model/services/articleImageApi";

type GenerateImageType = {
    promptQuery: string;
    handleImageResult: (value: string) => void;
}

export const GenerateImage: FC<GenerateImageType> = ({promptQuery, handleImageResult}) => {
    const [showLoader, setShowLoader] = useState(false);


    const handleGenerate = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        fetchData();
    };

    const fetchData = async () => {
        setShowLoader(true);
        const imageBlob = await fetchGeneratedImage(
                promptQuery,
        );

        try {
            const fileReaderInstance = new FileReader();

            fileReaderInstance.onload = () => {
                let base64data = fileReaderInstance.result;
                handleImageResult(String(base64data));
            };

            if (imageBlob) {
                setShowLoader(false);
                return fileReaderInstance.readAsDataURL(imageBlob);
            }
        } catch (error) {
            console.error("Error fetching images from API:", error);
            setShowLoader(false);
        }
    };

    return (
            <button
                    type='button'
                    disabled={!prompt || showLoader}
                    onClick={handleGenerate}
                    className='createArticleForm__generateImgBtn'>
                {showLoader ? 'Loading...' : 'Generate image'}
            </button>
    )
}
