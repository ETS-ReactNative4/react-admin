
const users = (state = [], action) =>  {

    if (action.type === 'GET_RESULT') {

        return action.users
    }

    return state
}

export { users }
