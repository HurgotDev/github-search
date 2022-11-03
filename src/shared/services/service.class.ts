import axios from 'axios'
import { BASE_URL } from 'shared/config/environment'

class Service {
    // eslint-disable-next-line no-useless-constructor
    constructor(protected module: string) {}

    protected getFetch() {
        return axios.create({
            baseURL: `${BASE_URL}/${this.module}/`,
            headers: {
                Accept: 'application/vnd.github+json',
            },
        })
    }
}

export default Service
