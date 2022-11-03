import { TRootState } from 'redux/@types/redux'

export const selectProfile = () => (state: TRootState) => state.profile
export const selectUserProfile = () => (state: TRootState) => state.profile.data
export const selectProfileLoading = () => (state: TRootState) => state.profile.loading
export const selectProfileError = () => (state: TRootState) => state.profile.error
