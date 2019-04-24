
import React from 'react'

import { connect } from 'react-redux'

class HomePage extends React.Component {

    render() {

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>Inicio</h1>
                    <ol className="breadcrumb">
                        <li className="active">
                            <i className="fas fa-tachometer-alt"></i> Inicio
                        </li>
                    </ol>
                </section>
            </div>
        )
    }
}

const page = connect()(HomePage)

export { page as HomePage}
