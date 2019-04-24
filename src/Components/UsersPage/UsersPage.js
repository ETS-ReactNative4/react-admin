
import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { getResult } from '../../Redux/actions/users'

class UsersPage extends React.Component {

    constructor(props) {
        super(props)

        const { session, getResult } = props

        if (session) {

            getResult()
        }
    }

    render() {

        const { users } = this.props

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Usuarios</h1>
                    <ol className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fas fa-tachometer-alt"></i> Inicio
                            </Link>
                        </li>
                        <li className="active">
                            <i className="fas fa-users"></i> Usuarios
                        </li>
                    </ol>
                </section>
                <section className="content">
                    <div className="box box-default">
                        <div className="box-header with-border">
                            <div className="btn-toolbar">
                                <div className="btn-group btn-group-sm">
                                    <Link to="/users/add" className="btn btn-primary">
                                        <i className="fas fa-fw fa-plus" /> Nuevo
                                    </Link>
                                </div>
                            </div>
                            <div className="box-tools top-10px">
                                <div className="input-group input-group-sm" style={{width: '220px'}}>
                                    <input type="text" name="criteria" className="form-control pull-right" placeholder="Buscar" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Apellidos y nombres</th>
                                        <th>Usuario</th>
                                        <th>Email</th>
                                        <th>Actualizado</th>
                                        <th>Estado</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>
                                                {user.paternal_surname} {user.maternal_surname} {user.name}
                                            </td>
                                            <td>
                                                {user.username}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                {user.updated_at}
                                            </td>
                                            <td>
                                                {user.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session,
    users: state.users
})

const mapDispatchToProps = dispatch => ({

    getResult() {

        dispatch(getResult())
    }
})

const page = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export { page as UsersPage }
