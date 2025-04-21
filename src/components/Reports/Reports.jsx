// src/components/Reports/Reports.jsx
import React, { useState } from 'react';
import { FaChartBar, FaChartPie, FaChartLine, FaDownload, FaCalendarAlt } from 'react-icons/fa';
import './Reports.css';
import SalesReport from './SalesReport';
import InventoryReport from './InventoryReport';

const Reports = () => {
  const [activeReport, setActiveReport] = useState('sales');
  const [dateRange, setDateRange] = useState('month');
  
  const renderReport = () => {
    switch(activeReport) {
      case 'sales':
        return <SalesReport dateRange={dateRange} />;
      case 'inventory':
        return <InventoryReport dateRange={dateRange} />;
      default:
        return <SalesReport dateRange={dateRange} />;
    }
  };
  
  return (
    <div className="reports-container">
      <h2>Reports & Analytics</h2>
      
      <div className="reports-controls">
        <div className="report-tabs">
          <button 
            className={`report-tab ${activeReport === 'sales' ? 'active' : ''}`}
            onClick={() => setActiveReport('sales')}
          >
            <FaChartLine /> Sales Report
          </button>
          <button 
            className={`report-tab ${activeReport === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveReport('inventory')}
          >
            <FaChartBar /> Inventory Report
          </button>
          <button 
            className={`report-tab ${activeReport === 'customer' ? 'active' : ''}`}
            onClick={() => setActiveReport('customer')}
          >
            <FaChartPie /> Customer Report
          </button>
        </div>
        
        <div className="report-actions">
          <div className="date-filter">
            <FaCalendarAlt className="date-icon" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="date-select"
            >
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 90 Days</option>
              <option value="year">Last 12 Months</option>
            </select>
          </div>
          
          <button className="btn-primary export-btn">
            <FaDownload /> Export
          </button>
        </div>
      </div>
      
      <div className="report-content">
        {renderReport()}
      </div>
    </div>
  );
};

export default Reports;
