import axios, {Method, ResponseType} from "axios";

const API_KEY = 'SG_86dead30e9cb7195';

const rand = require('random-seed').create()

export const fetchGeneratedImage = async (
    promptCall: string,
) => {
    const method: Method = 'POST'
    const responseType: ResponseType = 'arraybuffer'

    const options = {
        method,
        url: "https://api.segmind.com/v1/segmind-vega-rt-v1",
        headers: {
            "x-api-key": `${API_KEY}`,
            "Content-Type": "application/json",
        },
        responseType,
        data: JSON.stringify({
            prompt: promptCall,
            num_inference_steps: 4,
            seed: rand(100000),
        }),
    };

    try {
        const response = await axios.request(options);
        return new Blob([response.data], {type: "image/jpeg"});
    } catch (error) {
        console.error("Error while fecthing Gen AI model API", error);
    }
};
