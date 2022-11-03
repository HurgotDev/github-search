import { all } from 'redux-saga/effects'

import searchSaga from './search.saga'
import profileSaga from './profile.saga'

export default function* rootSaga() {
    yield all([searchSaga(), profileSaga()])
}
