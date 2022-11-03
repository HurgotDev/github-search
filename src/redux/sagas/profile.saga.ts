import { message } from 'antd'
import { put, call, takeLatest } from 'redux-saga/effects'
import { IUserExtended } from 'shared/@types/IUser'
import usersService from 'shared/services/users/users.service'

import * as actionTypes from '../action-types/profile-action.types'

function* getUserProfileRequest({ payload }: actionTypes.IGetUserProfileRequestAction) {
    try {
        const response: IUserExtended = yield call(usersService.getUserByUsername.bind(usersService), payload)

        yield put<actionTypes.IGetUserProfileRequestSucceededAction>({
            type: actionTypes.GET_USER_PROFILE_REQUEST_SUCCEEDED,
            payload: response,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        message.error(err?.response?.data?.message || 'No pudimos hacer eso, por favor intenta nuevamente')
        yield put<actionTypes.IGetUserProfileRequestFailedAction>({
            type: actionTypes.GET_USER_PROFILE_REQUEST_FAILED,
        })
    }
}

export default function* profileSaga() {
    yield takeLatest(actionTypes.GET_USER_PROFILE_REQUEST, getUserProfileRequest)
}
