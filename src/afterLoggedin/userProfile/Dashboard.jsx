import React from 'react';
import './userProfileCSS/dashboard.css'

const dashboardData = [
  { title: 'Mystry Box Sale', value: 156456 },
  { title: 'MNT Distributed', value: 1556 },
  { title: 'Total Hashpower', value: 48941651 },
  { title: 'Autopool Reward', value: 2196 },
  { title: "My NFT's", value: 125 },
  { title: 'Main Wallet', value: '20.1 Mnt' },
  { title: 'Matching Bonus', value: 23.0 },
  { title: 'Turn Over', value: '56325 User' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
    {dashboardData.map((item, index) => (
      <div className="card" key={index}>
        <h2>{item.title}</h2>
        <p>{item.value}</p>
      </div>
    ))}
  </div>
  );
};

export default Dashboard;
