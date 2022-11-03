import type { IResultSearch, ISearchParams, ISearchService } from './types'
import type IUser from 'shared/@types/IUser'

import Service from '../service.class'

class SearchService extends Service implements ISearchService {
    async searchUsers(q: string, params?: ISearchParams): Promise<IResultSearch<IUser>> {
        return await this.getFetch()
            .get('/users', {
                params: {
                    q,
                    ...(params || {}),
                },
            })
            .then(res => res.data)
    }
}

export default new SearchService('search')
