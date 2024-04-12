import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

const navBarLinks () => {

    return (
        <div className='navBar-outer-wrapper'>
            <NavLink to = '/login'> Login</NavLink>
        </div>
    )
}
export default navBarLinks