import {FC, useState} from "react";
import {fetchGeneratedImage} from "../model/services/articleImageApi";
import {useCreateArticleMutation} from "../../article/model/services/articleApi";

export const ArticleImage: FC = () => {
    const [create, response] = useCreateArticleMutation()
    const [showLoader, setShowLoader] = useState(false);
    const [imageResult, setImageResult] = useState<string | null>(null);
    const [promptQuery, setPromptQuery] = useState("");

    //
    // useEffect(() => {
    //     const loaderInterval = setInterval(() => {
    //         setLoaderMessage(getRandom(loaderMessages));
    //     }, 3000);
    //     // to avoid memory leak
    //     return () => {
    //         clearInterval(loaderInterval);
    //     };
    // }, [loaderMessage]);

    const handleSearch = (event) => {
        setPromptQuery(event.target.value);
    };

    const handleChange = (event) => {
        if (event.target.name === "radio") {
            setRadioValue(event.target.value);
        } else if (event.target.name === "dropdown") {
            setDropDownValue(event.target.value);
        } else {
            setSeedValue(event.target.value);
        }
    };

    const handleGenerate = (e) => {
        e.preventDefault();
        fetchData();
    };

    const fetchData = async () => {
        const imageBlob = await fetchGeneratedImage(
                promptQuery,
        );

        console.log(imageBlob)
        try {
            setShowLoader(true);


            const fileReaderInstance = new FileReader();
            // This event will fire when the image Blob is fully loaded and ready to be displayed
            fileReaderInstance.onload = () => {
                let base64data = fileReaderInstance.result;
                setImageResult(String(base64data));
            };

            if (imageBlob) {
                fileReaderInstance.readAsDataURL(imageBlob);
                setShowLoader(false);
            }
        } catch (error) {
            // Handle error
            console.error("Error fetching images from API:", error);
            setShowLoader(false);
        }
    };

    // const handleSurpriseMe = (e) => {
    //     const surprisePrompt = getRandom(promptIdeas);
    //     setPromptQuery(surprisePrompt);
    // };

    const handleAvailOptions = (option) => {
        setPromptQuery(option);
    };

    console.log(imageResult && imageResult)
    return (
            <div style={{paddingTop: '100px'}}>
                <div>
                    <div className='modal__wrap'>
                        <input
                                type="text"
                                id="prompt"
                                value={promptQuery}
                                onChange={handleSearch}
                                placeholder="A plush toy robot sitting against a yellow wall"
                                className="promptInput"
                        />
                    </div>
                    {/*<button onClick={handleSurpriseMe}>Surprise Me</button>*/}
                </div>
                <div>
                    <button onClick={handleGenerate}>Generate the Image</button>
                </div>
                {showLoader ? (
                        <div style={{margin: 40}}>Blazing fast results... ⚡️⚡️⚡️</div>
                ) : (
                        <>
                            {imageResult ? (
                                    <div>
                                        <div className="imageBox">
                                            <img src={String(imageResult)} alt={promptQuery} loading="lazy"/>
                                        </div>
                                    </div>
                            ) : (
                                    <div></div>
                            )}
                        </>
                )}

                <div onClick={() => create({
                    title: '12345zxcdxd2cdsc33',
                    author: 'anonymus',
                    content: '1234',
                    image: imageResult ? imageResult.split(',')[1] : ''
                })}
                     style={{color: 'red'}}
                >
                    create
                </div>
                {/*<div className="slideShowMessage">{loaderMessage}</div>*/}
            </div>
    )
}
