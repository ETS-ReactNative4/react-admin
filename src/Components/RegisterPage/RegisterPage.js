
import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { register, logout } from '../../Redux/actions/session'

class RegisterPage extends React.Component {

    constructor(props) {
        super(props)

        this.props.dispatch(logout())

        this.state = {
            name: '',
            paternal_surname: '',
            maternal_surname: '',
            username: '',
            email: '',
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

        const { name, paternal_surname, maternal_surname, username, email, password } = this.state

        const { dispatch } = this.props

        if (name && paternal_surname && maternal_surname && username && email && password) {

            dispatch(register({
                name,
                paternal_surname,
                maternal_surname,
                username,
                email,
                password
            }))
        }
    }

    render(){

        const { registeringIn } = this.props
        const { name, paternal_surname, maternal_surname, username, email, password, submitted } = this.state

        return (
            <div className="register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    <div className="register-box-body">
                        <p className="register-box-msg">Register a new membership</p>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                {submitted && !name &&
                                    <div>
                                        Field required
                                    </div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" name="paternal_surname" value={paternal_surname} onChange={this.handleChange} placeholder="Paternal Surname" />
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                {submitted && !paternal_surname &&
                                    <div>
                                        Field required
                                    </div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" name="maternal_surname" value={maternal_surname} onChange={this.handleChange} placeholder="Maternal Surname" />
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                {submitted && !maternal_surname &&
                                    <div>
                                        Field required
                                    </div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                {submitted && !username &&
                                    <div>
                                        Field required
                                    </div>
                                }
                            </div>
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                                {submitted && !email &&
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
                                            <input type="checkbox" /> I agree to the terms
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">
                                        {registeringIn &&
                                            <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>

                        <Link to="/login" className="text-center">I already have a membership</Link>

                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    registeringIn: state.authentication
})

const page = connect(mapStateToProps)(RegisterPage)

export { page as RegisterPage}
