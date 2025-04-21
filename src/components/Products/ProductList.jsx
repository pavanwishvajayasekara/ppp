import React from 'react';
import './Products.css';
import { teaproducts } from '../../data/sampleData';

const ProductList = () => {
  return (
    <div className="product-list">
      <h2 className="section-title">Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price (Rs.)</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {teaproducts.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
