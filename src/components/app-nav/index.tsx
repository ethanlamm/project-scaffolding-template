import style from './index.module.less'
import { Link } from 'react-router-dom'
import React from 'react'

function AppNav() {
    return (
        <div className={style.appNav}>
            AppNav
            <div className="link">
                <Link to='/'>Home</Link>&nbsp;&nbsp;
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default AppNav