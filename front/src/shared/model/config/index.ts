export type ModalsStateType<T, D = void> = {
    name: T,
    isOpen: boolean
    data?: D | null
}


export enum LoadingStatusEnum {
    IDLE = 'idle',
    PENDING = 'pending',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}
