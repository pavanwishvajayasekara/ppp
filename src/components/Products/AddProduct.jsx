import React, { useState } from 'react';
import './Products.css';

const AddProduct = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', category: '', price: '', stock: '' });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
