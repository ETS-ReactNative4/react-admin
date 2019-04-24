
import { accountService } from '../../Services/accountService'

const getUserInfo = () => {

    return dispatch => {

        return accountService.getUserInfo()
        .then(account_info => {

            dispatch({
                type: 'GET_ACCOUNT_INFO',
                account_info: account_info || {}
            })
        })
    }
}

export {
    getUserInfo
}
