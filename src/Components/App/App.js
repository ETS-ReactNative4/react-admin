import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'

import { history } from '../../Helpers/history'

import { PrivateRoute } from './PrivateRoute'

import { connect } from 'react-redux'

import socketIOClient from 'socket.io-client'

import { LoginPage } from '../LoginPage/LoginPage'
import { RegisterPage } from '../RegisterPage/RegisterPage'
import { HomePage } from '../HomePage/HomePage'
import { UsersPage } from '../UsersPage/UsersPage'
import { UserEditPage } from '../UserEditPage/UserEditPage'
import { Err404 } from '../Err404/Err404'

import { Header } from '../Header/Header'

import { getUserInfo } from '../../Redux/actions/account'

import { SidebarLink } from './SidebarLink'

import './css/App.css'

class App extends Component {

    constructor(props) {
        super(props)

        const { session, getUserInfo } = props

        if (session) {

            getUserInfo()

            this.connectToChat()
        }
    }

    connectToChat() {

        const socketio = socketIOClient('http://localhost:3100', {
            transports: [
                'websocket'
            ]
        })

        socketio.on('connect', () => console.log('Connected to socketio'))

        socketio.on('message', msg => console.log('Message from server:', msg))

        socketio.on('disconnect', () => console.log('Disconnected from socketio'))

        // socketio.on('server_info', data => {

        //     console.log('server_info', data)
        // })
    }

    getPageClass() {

        const { session, user_interface } = this.props

        if (session && user_interface.sidebar_status) {

            return 'body skin-green fixed sidebar-open'
        } else if (session && !user_interface.sidebar_status) {

            return 'body skin-green fixed sidebar-collapse'
        } else {

            return 'body '
        }
    }

    render() {

        const { session, account } = this.props

        return (
            <div className={this.getPageClass()}>
                <Router history={history}>
                    <div className="wrapper">
                        {session &&
                            <Header />
                        }
                        {session &&
                            <aside className="main-sidebar">
                                <section className="sidebar">
                                    <div className="user-panel">
                                        <div className="pull-left image">
                                            <img src="img/no-avatar.png" className="img-circle bg-gray" alt="User" />
                                        </div>
                                        <div className="pull-left info">
                                            <p>{account.name} {account.paternal_surname}</p>
                                            <a href="#toggle-status"><i className="fa fa-circle text-success"></i> Online</a>
                                        </div>
                                    </div>
                                    <ul className="sidebar-menu">
                                        <li className="header">Menú de navegación</li>
                                        <SidebarLink label="Inicio" icon="fas fa-fw fa-tachometer-alt" to="/" activeOnlyWhenExact={true} />
                                        <SidebarLink label="Usuarios" icon="fas fa-fw fa-users" to="/users" activeOnlyWhenExact={true} />
                                    </ul>
                                </section>
                            </aside>
                        }
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                        <PrivateRoute exact path="/" component={HomePage} />
                        <PrivateRoute exact path="/users" component={UsersPage} />
                        <PrivateRoute exact path="/users/:id" component={UserEditPage} />
                        <Route component={Err404} />
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session,
    account: state.account,
    user_interface: state.user_interface
})

const mapDispatchToProps = dispatch => ({

    getUserInfo() {

        dispatch(getUserInfo())
    }
})

const page = connect(mapStateToProps, mapDispatchToProps)(App)
export { page as App}
