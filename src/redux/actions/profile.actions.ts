import * as actionsTypes from '../action-types/profile-action.types'

export const getUserProfileAction = (username: string): actionsTypes.IGetUserProfileRequestAction => ({
    type: actionsTypes.GET_USER_PROFILE_REQUEST,
    payload: username,
})
