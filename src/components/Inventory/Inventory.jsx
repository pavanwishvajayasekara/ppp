// src/components/Inventory/Inventory.jsx
import React, { useState } from 'react';
import { FaBoxOpen, FaExclamationTriangle, FaHistory, FaPlus } from 'react-icons/fa';
import './Inventory.css';
import { teaproducts } from '../../data/sampleData';
import StockAlert from './StockAlert';
import InventoryChart from './InventoryChart';

const Inventory = () => {
  const [products] = useState(teaproducts);
  const [showStockAlert, setShowStockAlert] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  
  const lowStockItems = products.filter(product => product.stock < 10);
  
  const filteredProducts = filterCategory === 'all' 
    ? products 
    : products.filter(product => product.category === filterCategory);
  
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const avgStockPerProduct = Math.round(totalStock / products.length);
  
  return (
    <div className="inventory-container">
      <h2>Inventory Management</h2>
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon inventory-icon">
            <FaBoxOpen />
          </div>
          <div className="stat-info">
            <h3>Total Products</h3>
            <p className="stat-value">{products.length}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon stock-icon">
            <FaHistory />
          </div>
          <div className="stat-info">
            <h3>Total Stock</h3>
            <p className="stat-value">{totalStock}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon avg-icon">
            <FaBoxOpen />
          </div>
          <div className="stat-info">
            <h3>Average Stock</h3>
            <p className="stat-value">{avgStockPerProduct}</p>
          </div>
        </div>
        
        <div className="stat-card" onClick={() => setShowStockAlert(true)} style={{cursor: 'pointer'}}>
          <div className="stat-icon alert-icon">
            <FaExclamationTriangle />
          </div>
          <div className="stat-info">
            <h3>Low Stock Alert</h3>
            <p className="stat-value">{lowStockItems.length}</p>
          </div>
        </div>
      </div>
      
      <div className="inventory-controls">
        <div className="category-filter">
          <label>Filter by Category:</label>
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
        
        <button className="btn-primary">
          <FaPlus /> Add Stock
        </button>
      </div>
      
      <div className="inventory-table card">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.createdAt}</td>
                <td>
                  <span className={`stock-status ${product.stock < 10 ? 'low' : 'normal'}`}>
                    {product.stock < 10 ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
                <td className="actions">
                  <button className="action-btn update">
                     <span role="img" aria-label="Update">🔄</span>
                     </button>
                  <button className="action-btn history"> 
                    <span role="img" aria-label="View History">📋</span>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="inventory-charts">
        <div className="card">
          <h3>Inventory Distribution by Category</h3>
          <InventoryChart products={products} />
        </div>
      </div>
      
      {showStockAlert && (
        <StockAlert 
          lowStockItems={lowStockItems} 
          onClose={() => setShowStockAlert(false)} 
        />
      )}
    </div>
  );
};

export default Inventory;
