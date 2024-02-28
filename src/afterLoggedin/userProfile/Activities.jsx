import React from 'react';
import './userProfileCSS/dashboard.css'

const activitiesData = [
  { title: 'Sale Achieve', value: '1500 MNT' },
  { title: 'MNT Own', value: '156' },
  { title: 'Total Referral', value: '5' },
  { title: 'Autopool Reward', value: '96' },
  { title: 'Matching Bonus', value: '23.0' },
];

const Activities = () => {
  return (
    <div className="dashboard">
      {activitiesData.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item.title}</h2>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};
export default Activities;
