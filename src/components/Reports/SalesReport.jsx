// src/components/Reports/SalesReport.jsx
import React from 'react';
import './Reports.css';
import { salesData } from '../../data/sampleData';

const SalesReport = ({ dateRange }) => {
  // Filter data based on date range
  const filteredData = salesData.filter(item => {
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
  const totalSales = filteredData.reduce((sum, item) => sum + item.amount, 0);
  const totalOrders = filteredData.length;
  const avgOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;
  
  // Group sales by category
  const salesByCategory = filteredData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.amount;
    return acc;
  }, {});
  
  // Sort categories by sales amount
  const sortedCategories = Object.entries(salesByCategory)
    .sort((a, b) => b[1] - a[1]);
  
  return (
    <div className="sales-report">
      <div className="report-summary">
        <div className="summary-card">
          <div className="summary-title">Total Sales</div>
          <div className="summary-value">Rs {totalSales.toLocaleString()}</div>
        </div>
        
        <div className="summary-card">
          <div className="summary-title">Total Orders</div>
          <div className="summary-value">{totalOrders}</div>
        </div>
        
        <div className="summary-card">
          <div className="summary-title">Average Order Value</div>
          <div className="summary-value">Rs {avgOrderValue.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="report-charts">
        <div className="chart-container card">
          <h3>Sales Trend</h3>
          <div className="sales-trend-chart">
            {/* Simplified chart representation */}
            <div className="trend-line">
              {filteredData.map((item, index) => (
                <div 
                  key={index} 
                  className="trend-point" 
                  style={{ 
                    height: `${(item.amount / 5000) * 100}%`,
                    left: `${(index / filteredData.length) * 100}%`
                  }}
                  title={`${item.date}: Rs ${item.amount}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="chart-container card">
          <h3>Sales by Category</h3>
          <div className="sales-category-chart">
            {sortedCategories.map(([category, amount], index) => {
              const percentage = (amount / totalSales) * 100;
              return (
                <div className="category-bar" key={index}>
                  <div className="category-name">{category}</div>
                  <div className="bar-container">
                    <div 
                      className="bar" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                    <div className="bar-value">Rs {amount.toLocaleString()}</div>
                  </div>
                  <div className="bar-percentage">{percentage.toFixed(1)}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="report-table card">
        <h3>Recent Sales</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, 10).map((sale, index) => (
              <tr key={index}>
                <td>{sale.date}</td>
                <td>{sale.orderId}</td>
                <td>{sale.customer}</td>
                <td>{sale.category}</td>
                <td>Rs {sale.amount.toLocaleString()}</td>
                <td>
                  <span className={`status status-${sale.status.toLowerCase()}`}>
                    {sale.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
