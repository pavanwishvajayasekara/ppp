import React from 'react';

const CustomerDetails = ({ customer, onClose }) => {
  return (
    <div className="customer-details">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h3>{customer.name}</h3>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone || 'N/A'}</p>
      <p><strong>Address:</strong> {customer.address || 'N/A'}, {customer.city || ''}</p>
      <p><strong>Join Date:</strong> {customer.joinDate || 'N/A'}</p>
      <p><strong>Total Orders:</strong> {customer.totalOrders || 0}</p>
      <p><strong>Total Spent:</strong> Rs. {customer.totalSpent || 0}</p>
      <p><strong>Status:</strong> {customer.status || 'N/A'}</p>
      {customer.notes && <p><strong>Notes:</strong> {customer.notes}</p>}
    </div>
  );
};

export default CustomerDetails;
