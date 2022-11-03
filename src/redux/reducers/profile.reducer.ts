import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProfileState } from 'redux/@types/profile'

import * as actionsTypes from '../action-types/profile-action.types'

const INITIAL_STATE: IProfileState = {
    loading: false,
    error: false,
    data: null,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function authReducer(state: IProfileState = INITIAL_STATE, action: PayloadAction<any>): IProfileState {
    switch (action.type) {
        case actionsTypes.GET_USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionsTypes.GET_USER_PROFILE_REQUEST_SUCCEEDED:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case actionsTypes.GET_USER_PROFILE_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                error: true,
            }
        default:
            return state
    }
}
