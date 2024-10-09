import React from 'react';
import {NavLink, useLocation } from 'react-router-dom';

function Navigation (){
  const location = useLocation();

  const getActiveClass = (path) => (location.pathname ===path ? 'active' : '');

    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to = "/" className = {getActiveClass('/')}>
                    About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to = "/portfolio" className = {getActiveClass('/portfolio')}>
                    Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to = "/contact" className = {getActiveClass('/contact')}>
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to = "/resume" className = {getActiveClass('/resume')}>
                    Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;