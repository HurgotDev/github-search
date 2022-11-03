import type IUser from 'shared/@types/IUser'

export interface IResultSearch<T> {
    total_count: number
    incomplete_results: boolean
    items: T[]
}

export interface ISearchParams {
    sort?: 'followers' | 'repositories' | 'joined'
    order?: 'asc' | 'desc'
    per_page?: number
    page?: number
}

export interface ISearchService {
    searchUsers(q: string, params?: ISearchParams): Promise<IResultSearch<IUser>>
}
