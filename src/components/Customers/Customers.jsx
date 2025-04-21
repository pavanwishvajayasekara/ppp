// src/components/Customers/Customers.jsx
import React, { useState } from 'react';
import './Customers.css';
import { customers as initialCustomers } from '../../data/sampleData';
import CustomerDetails from './CustomerDetails';
import AddCustomer from './AddCustomer';

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    setCustomers(prev => [...prev, newCustomer]);
  };

  return (
    <div className="customers-page">
      <h2>Customers</h2>
      <button 
        onClick={() => setShowAddForm(true)} 
        className="btn-add"
      >
        + Add Customer
      </button>

      <div className="customer-list">
        {customers.map((cust) => (
          <div 
            key={cust.id} 
            className="customer-card" 
            onClick={() => setSelectedCustomer(cust)}
          >
            <h4>{cust.name}</h4>
            <p>{cust.email}</p>
            <p>{cust.city}</p>
          </div>
        ))}
      </div>

      {selectedCustomer && (
        <CustomerDetails 
          customer={selectedCustomer} 
          onClose={() => setSelectedCustomer(null)} 
        />
      )}

      {showAddForm && (
        <AddCustomer 
          onClose={() => setShowAddForm(false)} 
          onAdd={handleAddCustomer} 
        />
      )}
    </div>
  );
};

export default Customers;
