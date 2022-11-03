import type { IUserExtended } from 'shared/@types/IUser'

export interface IProfileState {
    loading: boolean
    error: boolean
    data: IUserExtended | null
}
