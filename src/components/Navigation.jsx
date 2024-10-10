import React from 'react';
import {NavLink, useLocation } from 'react-router-dom';

function Navigation (){
  const location = useLocation();

  const getActiveClass = (path) => (location.pathname ===path ? 'active' : '');

    return (
        
        <nav>
            <ul>
                <li>
                    <NavLink to = "/" className = {getActiveClass('/')}>
                    About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/portfolio" className = {getActiveClass('/portfolio')}>
                    Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/contact" className = {getActiveClass('/contact')}>
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/resume" className = {getActiveClass('/resume')}>
                    Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;