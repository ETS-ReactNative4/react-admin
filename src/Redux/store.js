
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers/reducers'

const logger = store => next => action => {

    let result = next(action)

    if (typeof action === 'function') {

        return result
    }

    console.log('======= logger')
    console.log('dispatching', action)

    console.log('next state', store.getState())

    return result
}

export default createStore(reducers, applyMiddleware(logger, thunk))
