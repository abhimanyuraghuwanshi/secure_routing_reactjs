// Sidebar.js
import React, { useState } from 'react';
import { Link ,Outlet } from 'react-router-dom';
import './componentCSS/tutorialsidebar.css'; 
import config from '../../config'

const ProfileSidebar = () => {
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
          <Link to={`${config.baseurl}${config.loginurl}${config.myprofile}`}>Activities</Link>
        </li>
        <li>
          <Link to={`${config.baseurl}${config.loginurl}${config.myprofile}/dreams`}>My Dreams</Link>
        </li>
        <li>
          <Link to={`${config.baseurl}${config.loginurl}${config.myprofile}/myreferral`}>My referrals</Link>
        </li>
        
        <li>
          <Link to={`${config.baseurl}login`} >Log Out</Link>
        </li>
       
      </ul>
    <Outlet></Outlet>
    </div>
  );
};

export default ProfileSidebar;
