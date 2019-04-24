
import React from 'react'

import { connect } from 'react-redux'

const Err404 = () => {

    return (
        <div>

            Err404
        </div>
    )
}

const page = connect()(Err404)

export { page as Err404}
