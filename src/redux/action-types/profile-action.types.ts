import type { IUserExtended } from 'shared/@types/IUser'

export const GET_USER_PROFILE_REQUEST = 'profileActions/GET_USER_PROFILE_REQUEST'
export interface IGetUserProfileRequestAction {
    type: typeof GET_USER_PROFILE_REQUEST
    payload: string
}

export const GET_USER_PROFILE_REQUEST_SUCCEEDED = 'profileActions/GET_USER_PROFILE_REQUEST_SUCCEEDED'
export interface IGetUserProfileRequestSucceededAction {
    type: typeof GET_USER_PROFILE_REQUEST_SUCCEEDED
    payload: IUserExtended
}

export const GET_USER_PROFILE_REQUEST_FAILED = 'profileActions/GET_USER_PROFILE_REQUEST_FAILED'
export interface IGetUserProfileRequestFailedAction {
    type: typeof GET_USER_PROFILE_REQUEST_FAILED
}
