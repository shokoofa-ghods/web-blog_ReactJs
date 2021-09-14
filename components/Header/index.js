import React from 'react'
import {  NavLink } from 'react-router-dom'

function Header(){

    const key = localStorage.getItem('token')
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                
                {  key &&
                        <li>
                        <NavLink to='/admin'>Admin</NavLink>
                        </li>
                }
                
            </ul>
        </nav>
    )
}
export default Header