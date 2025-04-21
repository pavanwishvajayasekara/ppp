import React from 'react';
import './Dashboard.css';

const ActionCard = () => {
  return (
    <div className="action-card">
      <h3>Quick Actions</h3>
      <button className="action-btn">Add Product</button>
      <button className="action-btn">Add Customer</button>
      <button className="action-btn">View Reports</button>
    </div>
  );
};

export default ActionCard;
