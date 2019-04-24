
import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { login, logout } from '../../Redux/actions/session'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)

        this.props.dispatch(logout())

        this.state = {
            username: '',
            password: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.setState({ submitted: true })

        const { username, password } = this.state

        const { dispatch } = this.props

        if (username && password) {

            dispatch(login(username, password))
        }
    }

    render(){

        const { loggingIn } = this.props
        const { username, password, submitted } = this.state

        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                                {submitted && !username &&
                                    <div>
                                        Field required
                                    </div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                                {submitted && !password &&
                                    <div>
                                        Field required
                                    </div>
                                }
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox icheck">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">
                                    {loggingIn &&
                                        <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                        <Link to="/forgot">I forgot my password</Link><br />
                        <Link to="/register" className="text-center">Register a new membership</Link>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => ({
    logginIn: state.authentication
})

const page = connect(mapStateToProps)(LoginPage)

export { page as LoginPage}
