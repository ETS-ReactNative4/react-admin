
import React from 'react'
import { Route, NavLink } from 'react-router-dom'

const inGroup = (to, location) => {

    if (to.split('/').length === 1) {

        return false
    }

    const group = to.split('/')[1]

    const link_group = location.pathname.split('/')[1]

    return (group === link_group)
}

export const SidebarLink = ({ label, icon, to, activeOnlyWhenExact, onclick}) => (
    <Route path={to} exact={activeOnlyWhenExact}
        children={({ location }) => (
            <li className={inGroup(to, location) ? "active" : ""}>
                <NavLink to={to} onClick={onclick}>
                    <i className={icon}></i> <span>{label}</span>
                </NavLink>
            </li>
        )}
    />
)
