export enum imgEnum {
    JPG = 'JPG',
    JPEG = 'JPEG',
    PNG = 'PNG'
}


export enum LoadingStatusEnum {
    IDLE = 'idle',
    PENDING = 'pending',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

export interface ApiError {
    response: {
        data: {
            message: string
        }
    }
}
