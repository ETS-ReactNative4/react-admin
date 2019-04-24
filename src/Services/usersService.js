
import axios from 'axios'

import  { config } from '../config'


const getResult = () => {

    const token = localStorage.getItem('authToken')

    return axios.get(config.server.host + '/api/users', { headers: { Authorization: 'Bearer ' + token}})
    .then(res => {

        if (!res.data.success) {

            return onError(res)
        }
    
        return res.data.result
    }, onError)
}

const onError = err => {

    console.log(err)
}

export const usersService = {
    getResult
}