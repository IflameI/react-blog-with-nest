import {imgEnum} from "../model/config";
import {Base64} from 'js-base64';

export const imgToBase64 = (imgType: imgEnum.JPG | imgEnum.PNG | imgEnum.JPEG, content: Buffer | string): string => {
    if (typeof content === "string") return '';

    let base64Type;

    switch (imgType) {
        case imgEnum.JPG:
            base64Type = 'data:image/jpg;base64,'
            break;
        case  imgEnum.JPEG:
            base64Type = 'data:image/jpeg;base64,'
            break;
        case imgEnum.PNG:
            base64Type = 'data:image/png;base64,'
            break;
        default:
            return '';
    }

    return `${base64Type + Base64.fromUint8Array(new Uint8Array(content))}`
}
