import React from 'react';
import { recentOrders } from '../../data/sampleData';

const RecentOrders = () => {
  if (!Array.isArray(recentOrders)) {
    return <p>No recent orders available.</p>;
  }

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>Rs. {order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
