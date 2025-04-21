import React, { useState } from 'react';
import './Products.css';

const EditProduct = ({ product, onUpdate }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="text" name="category" value={formData.category} onChange={handleChange} />
      <input type="number" name="price" value={formData.price} onChange={handleChange} />
      <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
