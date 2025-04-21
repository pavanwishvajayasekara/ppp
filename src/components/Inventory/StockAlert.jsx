// src/components/Inventory/StockAlert.jsx
import React from 'react';
import './Inventory.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const StockAlert = ({ lowStockItems, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3><FaExclamationTriangle /> Low Stock Alert</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          {lowStockItems.length === 0 ? (
            <p className="no-alerts">No low stock items to display.</p>
          ) : (
            <>
              <p className="alert-message">
                The following products are running low on stock and need to be replenished:
              </p>
              <table className="alert-table">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Current Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lowStockItems.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td className="low-stock-value">{item.stock}</td>
                      <td>
                        <button className="btn-primary btn-sm">Restock</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default StockAlert;
