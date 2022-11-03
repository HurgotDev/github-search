import type { IUserExtended } from 'shared/@types/IUser'

export interface IUserService {
    getUserByUsername(username: string): Promise<IUserExtended>
}
