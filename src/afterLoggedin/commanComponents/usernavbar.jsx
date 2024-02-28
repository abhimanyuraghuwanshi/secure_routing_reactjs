// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config'

const Navbar = () => {
    return (
      <nav className="navbar">
      <div className="navbar-center">
        <Link to="/#" className="navbar-link">
         XYZ-Logo
        </Link>
      </div>
      <div className="navbar-right">
      <Link to={`${config.baseurl}${config.loginurl}/`} className="navbar-link">
          Dashboard
        </Link>
      <Link to={`${config.baseurl}${config.loginurl}${config.tutorial}`} className="navbar-link">
          Tutorial
        </Link>
      <Link to={`${config.baseurl}${config.loginurl}/mkttools`} className="navbar-link">
          Mkt Tools
        </Link>
        <Link to={`${config.baseurl}${config.loginurl}${config.myprofile}`} className="navbar-link">
          Profile
        </Link>
        
        <Link to={`${config.baseurl}login`} className="navbar-link">
          Log Out
        </Link>
      </div>
    </nav>

    );
};

export default Navbar;
