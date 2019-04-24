
const default_interface = {
    sidebar_status: true
}

const json_interface = JSON.parse(localStorage.getItem('user_interface')) || default_interface

const user_interface = (state = json_interface, action) =>  {

    if (action.type === 'SIDEBAR_TOGGLE') {

        let json_interface = JSON.parse(localStorage.getItem('user_interface')) || default_interface

        json_interface.sidebar_status = !json_interface.sidebar_status

        localStorage.setItem('user_interface', JSON.stringify(json_interface))

        return json_interface
    }

    return state
}

export { user_interface }
