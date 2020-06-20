import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <Navbar >
            <Link to={""} className="navbar-brand">
            <img src="assets/logo.png" height="60" width="170" alt="brand" /> Espace Admin
            </Link>
            
        </Navbar>
    );
}