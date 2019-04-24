
import { combineReducers } from 'redux'

import { session } from './session'
import { account } from './account'
import { users } from './users'
import { user_interface } from './user_interface'

const reducers = combineReducers({
    session,
    account,
    users,
    user_interface
}, { session, account, users, user_interface })

export default reducers
