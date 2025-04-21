// src/components/Reports/InventoryReport.jsx
import React from 'react';
import './Reports.css';
import { teaproducts, inventoryHistory } from '../../data/sampleData';

const InventoryReport = ({ dateRange }) => {
  // Filter inventory history based on date range
  const filteredHistory = inventoryHistory.filter(item => {
    const date = new Date(item.date);
    const today = new Date();
    
    switch(dateRange) {
      case 'week':
        const weekAgo = new Date();
        weekAgo.setDate(today.getDate() - 7);
        return date >= weekAgo;
      case 'month':
        const monthAgo = new Date();
        monthAgo.setDate(today.getDate() - 30);
        return date >= monthAgo;
      case 'quarter':
        const quarterAgo = new Date();
        quarterAgo.setDate(today.getDate() - 90);
        return date >= quarterAgo;
      case 'year':
        const yearAgo = new Date();
        yearAgo.setFullYear(today.getFullYear() - 1);
        return date >= yearAgo;
      default:
        return true;
    }
  });
  
  // Calculate summary statistics
  const totalStock = teaproducts.reduce((sum, product) => sum + product.stock, 0);
  const lowStockItems = teaproducts.filter(product => product.stock < 10).length;
  const stockValue = teaproducts.reduce((sum, product) => sum + (product.stock * product.price), 0);
  
  // Group inventory by category
  const stockByCategory = teaproducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category] += product.stock;
    return acc;
  }, {});
  
  return (
    <div className="inventory-report">
      <div className="report-summary">
        <div className="summary-card">
          <div className="summary-title">Total Stock</div>
          <div className="summary-value">{totalStock} units</div>
        </div>
        
        <div className="summary-card">
          <div className="summary-title">Low Stock Items</div>
          <div className="summary-value">{lowStockItems}</div>
        </div>
        
        <div className="summary-card">
          <div className="summary-title">Inventory Value</div>
          <div className="summary-value">Rs {stockValue.toLocaleString()}</div>
        </div>
      </div>
      
      <div className="report-charts">
        <div className="chart-container card">
          <h3>Stock Distribution by Category</h3>
          <div className="inventory-pie-chart">
            <div className="pie-segments">
              {Object.entries(stockByCategory).map(([category, stock], index) => {
                const percentage = (stock / totalStock) * 100;
                const colors = ['#0e5c36', '#4CAF50', '#8BC34A', '#CDDC39', '#FFC107'];
                return (
                  <div className="pie-legend-item" key={index}>
                    <div 
                      className="color-indicator" 
                      style={{ backgroundColor: colors[index % colors.length] }}
                    ></div>
                    <div className="legend-label">{category}</div>
                    <div className="legend-value">{stock} units</div>
                    <div className="legend-percentage">({percentage.toFixed(1)}%)</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="chart-container card">
          <h3>Inventory Movement</h3>
          <div className="inventory-movement-chart">
            <div className="movement-summary">
              <div className="movement-in">
                <div className="movement-label">Stock In</div>
                <div className="movement-value">
                  {filteredHistory
                    .filter(item => item.type === 'in')
                    .reduce((sum, item) => sum + item.quantity, 0)} units
                </div>
              </div>
              <div className="movement-out">
                <div className="movement-label">Stock Out</div>
                <div className="movement-value">
                  {filteredHistory
                    .filter(item => item.type === 'out')
                    .reduce((sum, item) => sum + item.quantity, 0)} units
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="report-table card">
        <h3>Inventory Movement History</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.slice(0, 10).map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>
                  <span className={`movement-type ${item.type}`}>
                    {item.type === 'in' ? 'Stock In' : 'Stock Out'}
                  </span>
                </td>
                <td>{item.quantity}</td>
                <td>{item.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryReport;
