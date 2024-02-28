import React from 'react';
import { Outlet } from 'react-router-dom';
import './tutorialCSS/tutorialDashboard.css'

const tutorialData = [
  { title: 'Tutorial 1', completion: '40%' },
  { title: 'Tutorial 2', completion: '51%' },
  { title: 'Tutorial 3', completion: '23%' },
  { title: 'Tutorial 4', completion: '10%' },
];

const TutorialDashboard = () => {
  return (
    <div className="dashboard">
      {tutorialData.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item.title}</h2>
          <p>{item.completion}</p>
        </div>
      ))}
    </div>
  );
};

export default TutorialDashboard;