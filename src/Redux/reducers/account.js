
const account = (state = {}, action) =>  {

    if (action.type === 'GET_ACCOUNT_INFO') {

        return action.account_info
    }

    return state
}

export { account }
