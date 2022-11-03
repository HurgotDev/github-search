import { message } from 'antd'
import { put, call, takeLatest } from 'redux-saga/effects'
import IUser from 'shared/@types/IUser'
import searchService from 'shared/services/search/search.service'
import { IResultSearch } from 'shared/services/search/types'

import * as actionTypes from '../action-types/search-action.types'

function* searchUsersRequest({ payload }: actionTypes.ISearchUsersRequestAction) {
    try {
        const response: IResultSearch<IUser> = yield call(
            searchService.searchUsers.bind(searchService),
            payload.q,
            payload.params,
        )

        yield put<actionTypes.ISearchUsersRequestSucceededAction>({
            type: actionTypes.SEARCH_USERS_REQUEST_SUCCEEDED,
            payload: response,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        message.error(err?.response?.data?.message || 'No pudimos hacer esto, por favor intenta nuevamente')
        yield put<actionTypes.ISearchUsersRequestFailedAction>({ type: actionTypes.SEARCH_USERS_REQUEST_FAILED })
    }
}

export default function* searchSaga() {
    yield takeLatest(actionTypes.SEARCH_USERS_REQUEST, searchUsersRequest)
}
