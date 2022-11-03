import { IUserExtended } from 'shared/@types/IUser'

import Service from '../service.class'

import { IUserService } from './types'

class UsersService extends Service implements IUserService {
    async getUserByUsername(username: string): Promise<IUserExtended> {
        return await this.getFetch()
            .get(`/${username}`)
            .then(res => res.data)
    }
}

export default new UsersService('users')
