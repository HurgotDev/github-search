import type { PayloadAction } from '@reduxjs/toolkit'
import type { ISearchState } from '../@types/search'

import * as actionsTypes from '../action-types/search-action.types'

const INITIAL_STATE: ISearchState = {
    loading: false,
    error: false,
    hits: [],
    totalHits: 0,
    hitsPerPage: 100,
    currentPage: 1,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function authReducer(state: ISearchState = INITIAL_STATE, action: PayloadAction<any>): ISearchState {
    switch (action.type) {
        case actionsTypes.SEARCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionsTypes.SEARCH_USERS_REQUEST_SUCCEEDED:
            return {
                ...state,
                loading: false,
                hits: action.payload.items,
                totalHits: action.payload.total_count,
            }
        case actionsTypes.SEARCH_USERS_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                hits: [],
                hitsPerPage: 100,
                currentPage: 1,
                error: true,
            }
        default:
            return state
    }
}
