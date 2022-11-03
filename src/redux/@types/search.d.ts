import type IUser from 'shared/@types/IUser'

export interface ISearchState {
    loading: boolean
    error: boolean
    hits: IUser[]
    totalHits: number
    hitsPerPage: number
    currentPage: number
}
