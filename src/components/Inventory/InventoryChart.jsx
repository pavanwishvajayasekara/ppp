// src/components/Inventory/InventoryChart.jsx
import React from 'react';
import './Inventory.css';

const InventoryChart = ({ products }) => {
  // Group products by category and count stock
  const categoryData = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category] += product.stock;
    return acc;
  }, {});
  
  // Calculate total stock for percentage
  const totalStock = Object.values(categoryData).reduce((sum, value) => sum + value, 0);
  
  // Generate colors for categories
  const colors = {
    'Black Tea': '#0e5c36',
    'Green Tea': '#4CAF50',
    'White Tea': '#8BC34A',
    'Herbal Tea': '#CDDC39',
    'Flavored Tea': '#FFC107'
  };
  
  return (
    <div className="inventory-chart">
      <div className="chart-bars">
        {Object.entries(categoryData).map(([category, stock]) => {
          const percentage = (stock / totalStock) * 100;
          return (
            <div className="chart-category" key={category}>
              <div className="chart-label">
                <span className="category-name">{category}</span>
                <span className="category-value">{stock} units</span>
              </div>
              <div className="chart-bar-container">
                <div 
                  className="chart-bar" 
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: colors[category] || '#0e5c36'
                  }}
                ></div>
              </div>
              <div className="chart-percentage">{percentage.toFixed(1)}%</div>
            </div>
          );
        })}
      </div>
      
      <div className="chart-legend">
        {Object.entries(colors).map(([category, color]) => (
          <div className="legend-item" key={category}>
            <div className="legend-color" style={{ backgroundColor: color }}></div>
            <div className="legend-label">{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryChart;
