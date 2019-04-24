
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { toggleSidebar } from '../../Redux/actions/user_interface'

import { logout } from '../../Redux/actions/session'

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            messagesmenu: false,
            notificationsmenu: false,
            tasksmenu: false,
            usermenu: false
        }

        this.setNavContainer = this.setNavContainer.bind(this)

        this.handleToggleMessagesmenu = this.handleToggleMessagesmenu.bind(this)
        this.handleToggleNotificationsmenu = this.handleToggleNotificationsmenu.bind(this)
        this.handleToggleTasksmenu = this.handleToggleTasksmenu.bind(this)
        this.handleToggleUsermenu = this.handleToggleUsermenu.bind(this)

        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setNavContainer(node) {
        this.navContainer = node
    }

    handleToggleMessagesmenu(e) {
        e.preventDefault()

        this.hideAllMenus()

        this.setState({
            messagesmenu: !this.state.messagesmenu
        })
    }

    handleToggleNotificationsmenu(e) {
        e.preventDefault()

        this.hideAllMenus()

        this.setState({
            notificationsmenu: !this.state.notificationsmenu
        })
    }

    handleToggleTasksmenu(e) {
        e.preventDefault()

        this.hideAllMenus()

        this.setState({
            tasksmenu: !this.state.tasksmenu
        })
    }

    handleToggleUsermenu(e) {
        e.preventDefault()

        this.hideAllMenus()

        this.setState({
            usermenu: !this.state.usermenu
        })
    }

    handleClickOutside(e) {

        if (this.navContainer && !this.navContainer.contains(e.target)) {

            this.hideAllMenus()
        }
    }

    hideAllMenus() {

        this.setState({
            messagesmenu: false,
            notificationsmenu: false,
            tasksmenu: false,
            usermenu: false
        })
    }

    getMessagesMenuClass() {

        let clase = 'dropdown messages-menu'

        if (this.state.messagesmenu) {

            clase += ' open'
        }

        return clase
    }

    getNotificationsMenuClass() {

        let clase = 'dropdown notifications-menu'

        if (this.state.notificationsmenu) {

            clase += ' open'
        }

        return clase
    }

    getTasksMenuClass() {

        let clase = 'dropdown tasks-menu'

        if (this.state.tasksmenu) {

            clase += ' open'
        }

        return clase
    }

    getUserMenuClass() {

        let clase = 'dropdown user user-menu'

        if (this.state.usermenu) {

            clase += ' open'
        }

        return clase
    }

    render() {

        const { account, toggleSidebar, logout } = this.props

        const menuClases = {
            messages: this.getMessagesMenuClass(),
            notifications: this.getNotificationsMenuClass(),
            tasks: this.getTasksMenuClass(),
            user: this.getUserMenuClass()
        }

        return (
            <header className="main-header">

                <Router>

                    <Link to="/" className="logo">
                        <span className="logo-mini"><b>A</b>LT</span>
                        <span className="logo-lg"><b>Admin</b>LTE</span>
                    </Link>
                </Router>

                <nav className="navbar navbar-static-top">
                    <a href="#toggle-sidebar" className="sidebar-toggle" onClick={(e) => {e.preventDefault(); toggleSidebar()}} role="button">
                        <i className="fas fa-bars" />
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav" ref={this.setNavContainer}>
                            <li className={menuClases.messages}>
                                <a href="#messages-menu" className="dropdown-toggle" onClick={this.handleToggleMessagesmenu}>
                                    <i className="fas fa-comments"></i>
                                    <span className="label label-danger">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#open-chat">
                                                    <div className="pull-left">
                                                        <img src="img/no-avatar.png" className="img-circle" alt="User" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#open-chat">
                                                    <div className="pull-left">
                                                        <img src="img/no-avatar.png" className="img-circle" alt="User" />
                                                    </div>
                                                    <h4>
                                                        AdminLTE Design Team
                                                        <small><i className="fa fa-clock-o"></i> 2 hours</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#open-chat">
                                                    <div className="pull-left">
                                                        <img src="img/no-avatar.png" className="img-circle" alt="User" />
                                                    </div>
                                                    <h4>
                                                        Developers
                                                        <small><i className="fa fa-clock-o"></i> Today</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#open-chat">
                                                    <div className="pull-left">
                                                        <img src="img/no-avatar.png" className="img-circle" alt="User" />
                                                    </div>
                                                    <h4>
                                                        Sales Department
                                                        <small><i className="fa fa-clock-o"></i> Yesterday</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#open-chat">
                                                    <div className="pull-left">
                                                        <img src="img/no-avatar.png" className="img-circle" alt="User" />
                                                    </div>
                                                    <h4>
                                                        Reviewers
                                                        <small><i className="fa fa-clock-o"></i> 2 days</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#chat">See All Messages</a></li>
                                </ul>
                            </li>
                            <li className={menuClases.notifications}>
                                <a href="#notifications-menu" className="dropdown-toggle" onClick={this.handleToggleNotificationsmenu}>
                                    <i className="fas fa-bell"></i>
                                    <span className="label label-danger">10</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 10 notifications</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#go-notification">
                                                    <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-notification">
                                                    <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                                                    page and may cause design problems
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-notification">
                                                    <i className="fa fa-users text-red"></i> 5 new members joined
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-notification">
                                                    <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-notification">
                                                    <i className="fa fa-user text-red"></i> You changed your username
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#go-notifications">View all</a></li>
                                </ul>
                            </li>
                            <li className={menuClases.tasks}>
                                <a href="#tasks-menu" className="dropdown-toggle" onClick={this.handleToggleTasksmenu}>
                                    <i className="fas fa-flag"></i>
                                    <span className="label label-danger">9</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 9 tasks</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#go-task">
                                                    <h3>
                                                        Design some buttons
                                                        <small className="pull-right">20%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                        <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">20% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-task">
                                                    <h3>
                                                        Create a nice theme
                                                        <small className="pull-right">40%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                        <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">40% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-task">
                                                    <h3>
                                                        Some task I need to do
                                                        <small className="pull-right">60%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                        <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">60% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#go-task">
                                                    <h3>
                                                        Make beautiful transitions
                                                        <small className="pull-right">80%</small>
                                                    </h3>
                                                    <div className="progress xs">
                                                        <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">80% Complete</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#go-tasks">View all tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={menuClases.user}>
                                <a href="#user-menu" className="dropdown-toggle" onClick={this.handleToggleUsermenu}>
                                    <img src="img/no-avatar.png" className="user-image bg-gray" alt="User" />
                                    <span className="hidden-xs">
                                        {account.name} {account.paternal_surname}
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src="img/no-avatar.png" className="img-circle bg-gray" alt="User" />

                                        <p>
                                            Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-xs-4 text-center">
                                                <a href="#followers">Followers</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#sales">Sales</a>
                                            </div>
                                            <div className="col-xs-4 text-center">
                                                <a href="#friends">Friends</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="/profile" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#logout" className="btn btn-default btn-flat" onClick={(e) => {e.preventDefault(); logout()}}>
                                                Sign out
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#control-sidebar" data-toggle="control-sidebar">
                                    <i className="fas fa-cogs"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    account: state.account
})

const mapDispatchToProps = dispatch => ({
    toggleSidebar() {
        dispatch(toggleSidebar())
    },
    logout() {
        dispatch(logout())
    }
})

const page = connect(mapStateToProps, mapDispatchToProps)(Header)

export { page as Header }
