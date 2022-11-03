import { combineReducers } from '@reduxjs/toolkit'

import searchReducer from './search.reducer'
import profileReducer from './profile.reducer'

export default combineReducers({
    search: searchReducer,
    profile: profileReducer,
})
