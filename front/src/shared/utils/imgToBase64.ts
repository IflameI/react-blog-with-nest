import {imgEnum} from "../model/config";

export const imgToBase64 = (imgType: imgEnum.JPG | imgEnum.PNG | imgEnum.JPEG, content: Buffer) => {
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
            return base64Type;
    }

    return `${base64Type + btoa(String.fromCharCode(...new Uint8Array(content)))}`
}
