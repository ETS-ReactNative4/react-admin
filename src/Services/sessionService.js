
import axios from 'axios'

import { config } from '../config'

const login = (username, password) => {

    const data = new URLSearchParams({
        username,
        password
    })

    return axios({
        url: config.server.host + '/api/login',
        method: 'POST',
        data: data
    })
    .then(onLoginSuccess, onLoginError)
}

const onLoginSuccess = res => {

    if (!res.data.success) {

        return onLoginError(res)
    }

    localStorage.setItem('authToken', res.data.token)
}

const onLoginError = err => {

    console.log(err)
}

const register = (user_data) => {

    const data = new URLSearchParams(user_data)

    return axios({
        url: 'http://127.0.0.1:3100/api/register',
        method: 'POST',
        data: data
    })
    .then(onRegisterSuccess, onRegisterError)
}

const onRegisterSuccess = res => {

    if (!res.data.success) {

        return onRegisterError(res)
    }
}

const onRegisterError = err => {

    console.log(err)
}

const logout = () => {

    localStorage.removeItem('authToken')
}

export const sessionService = {
    login,
    register,
    logout
}
