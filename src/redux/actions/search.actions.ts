import { ISearchParams } from 'shared/services/search/types'

import * as actionTypes from '../action-types/search-action.types'

export const searchUserRequestAction = (q: string, params?: ISearchParams): actionTypes.ISearchUsersRequestAction => ({
    type: actionTypes.SEARCH_USERS_REQUEST,
    payload: {
        q,
        params,
    },
})
