import type IUser from 'shared/@types/IUser'
import type { IResultSearch, ISearchParams } from 'shared/services/search/types'

export const SEARCH_USERS_REQUEST = 'searchActions/SEARCH_USERS_REQUEST'
export interface ISearchUsersRequestAction {
    type: typeof SEARCH_USERS_REQUEST
    payload: {
        q: string
        params?: ISearchParams
    }
}

export const SEARCH_USERS_REQUEST_SUCCEEDED = 'searchActions/SEARCH_USERS_REQUEST_SUCCEEDED'
export interface ISearchUsersRequestSucceededAction {
    type: typeof SEARCH_USERS_REQUEST_SUCCEEDED
    payload: IResultSearch<IUser>
}

export const SEARCH_USERS_REQUEST_FAILED = 'searchActions/SEARCH_USERS_REQUEST_FAILED'
export interface ISearchUsersRequestFailedAction {
    type: typeof SEARCH_USERS_REQUEST_FAILED
}
