
const loggedIn = localStorage.getItem('authToken') ? true : false

const session = (state = loggedIn, action) =>  {

    if (action.type === 'LOGIN') {

        return action.loggedIn
    } else if (action.type === 'LOGOUT') {

        return action.loggedIn
    }

    return state
}

export { session }
