import React, { useState } from 'react';

const AddCustomer = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: Date.now(),
      name,
      email,
      city,
      phone,
      joinDate: new Date().toISOString().split('T')[0],
      address: 'Unknown',
      totalOrders: 0,
      totalSpent: 0,
      status: 'Active',
      notes: '',
    };
    console.log('New Customer Added:', newCustomer);
    if (onAdd) onAdd(newCustomer); // call parent's add function if available
    onClose();
  };

  return (
    <div className="add-customer-form">
      <button className="close-btn" onClick={onClose}>✖</button>
      <h3>Add New Customer</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddCustomer;
