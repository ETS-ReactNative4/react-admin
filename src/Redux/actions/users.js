
import { usersService } from '../../Services/usersService'

const getResult = () => {

    return dispatch => {

        return usersService.getResult()
        .then(result => {

            dispatch({
                type: 'GET_RESULT',
                users: result
            })
        })
    }
}

export { getResult }
