import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav> <img src="public/logo192.png" alt="logo" />
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/countries">Countries</Link></li>
                <li> <Link to="/">Gallery</Link></li>
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;