
import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class UserEditPage extends React.Component {

    render() {

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Nuevo usuario</h1>
                    <ol className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fas fa-tachometer-alt"></i> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/users">
                                <i className="fas fa-users"></i> Usuarios
                            </Link>
                        </li>
                        <li className="active">
                            <i className="fas fa-user"></i> Nuevo usuario
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
                        </div>
                        <div className="box-body">

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const page = connect()(UserEditPage)

export { page as UserEditPage }
