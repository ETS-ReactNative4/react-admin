
import { sessionService } from '../../Services/sessionService'

import { history } from '../../Helpers/history'

import store from '../store'
import { getUserInfo } from './account'

const login = (username, password) => {

    return dispatch => {

        return sessionService.login(username, password)
        .then(res => {

            dispatch({
                type: 'LOGIN',
                loggedIn: true
            })

            history.push('/')

            store.dispatch(getUserInfo())
        })
    }
}

const register = (user_data) => {

    return dispatch => {

        return sessionService.register(user_data)
        .then(res => {

            dispatch({
                type: 'REGISTER',
                registeredIn: true
            })

            history.push('/login')
        })
    }
}

const logout = () => {

    sessionService.logout()

    return {
        type: 'LOGOUT',
        loggedIn: false
    }
}

export {
    login,
    register,
    logout
}
