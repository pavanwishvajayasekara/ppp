import React from 'react';
import StatCard from './StatCard';
import RecentOrders from './RecentOrders';
import ActionCard from './ActionCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="section-title">Dashboard Overview</h2>
      <div className="stats-grid">
        <StatCard title="Total Orders" value="120" />
        <StatCard title="Revenue" value="Rs. 145,600" />
        <StatCard title="Customers" value="85" />
        <StatCard title="Products" value="10" />
      </div>
      <div className="dashboard-sections">
        <RecentOrders />
        <ActionCard />
      </div>
    </div>
  );
};

export default Dashboard;
