import axios, {Method, ResponseType} from "axios";

const API_KEY = process.env.REACT_APP_SEGMIN_API_KEY;

const rand = require('random-seed').create()

export const fetchGeneratedImage = async (
    promptCall: string,
) => {
    const method: Method = 'POST'
    const responseType: ResponseType = 'arraybuffer'

    const options = {
        method,
        url: "https://api.segmind.com/v1/segmind-vega",
        headers: {
            "x-api-key": `${API_KEY}`,
            "Content-Type": "application/json",
        },
        responseType,
        data: JSON.stringify({
            prompt: promptCall,
            samples: 1,
            negative_prompt: "(worst quality, low quality)",
            num_inference_steps: 25,
            scheduler: "UniPC",
            seed: rand(999999999999999),
        }),
    };

    try {
        const response = await axios.request(options);
        return new Blob([response.data], {type: "image/jpeg"});
    } catch (error) {
        console.error("Error while fecthing Gen AI model API", error);
    }
};
