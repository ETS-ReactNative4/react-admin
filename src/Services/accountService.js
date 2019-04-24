
import axios from 'axios'

import  { config } from '../config'

const getUserInfo = () => {

    const token = localStorage.getItem('authToken')

    return axios.get(config.server.host + '/api/account_info', { headers: { Authorization: 'Bearer ' + token}})
    .then(onGetUserInfoSuccess, onGetUserInfoError)
}

const onGetUserInfoSuccess = res => {

    if (!res.data.success) {

        return onGetUserInfoError(res)
    }

    return res.data.account_info
}

const onGetUserInfoError = err => {

    console.log(err)
}

export const accountService = {
    getUserInfo
}