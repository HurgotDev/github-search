import { TRootState } from 'redux/@types/redux'

export const selectSearchLoading = () => (state: TRootState) => state.search.loading
export const selectSearchUsers = () => (state: TRootState) => state.search.hits
export const selectSearchError = () => (state: TRootState) => state.search.error
