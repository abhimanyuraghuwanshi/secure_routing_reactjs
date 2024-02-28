// Sidebar.js
import React, { useState } from 'react';
import { Link ,Outlet } from 'react-router-dom';
import './componentCSS/tutorialsidebar.css'; 
import config from '../../config'

const TutorialSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle-button" onClick={handleToggleSidebar}>
        ☰
      </button>
      <ul>
      <li>
          <Link to={`${config.baseurl}${config.loginurl}${config.tutorial}`}>Tut Dashboard</Link>
        </li>
        <li>
          <Link to={`${config.baseurl}${config.loginurl}${config.tutorial}/tut1`}>tutorial 1</Link>
        </li>
        <li>
          <Link to={`${config.baseurl}${config.loginurl}${config.tutorial}/tut2`}>tutorial 2</Link>
        </li>
        <li>
          <Link to={`#`}>tutorial3</Link>
        </li>
        <li>
          <Link to={`${config.baseurl}login`} >Log Out</Link>
        </li>
       
      </ul>
    <Outlet></Outlet>
    </div>
  );
};

export default TutorialSidebar;
