// src/data/sampleData.js

export const customers = [
    {
      id: 1,
      name: "Kamal Perera",
      email: "kamal@example.com",
      phone: "0771234567",
      address: "Colombo"
    },
    {
      id: 2,
      name: "Nimal Silva",
      email: "nimal@example.com",
      phone: "0779876543",
      address: "Kandy"
    },
    {
      id: 3,
      name: "Sunil Jayasuriya",
      email: "sunil@example.com",
      phone: "0711112233",
      address: "Galle"
    }
  ];
  

  // src/data/sampleData.js

// … your existing exports (recentOrders, teaProducts, customers, salesData)

export const inventoryHistory = [
    { date: '2025-04-15', productId: 'TP-1001', productName: 'Ceylon Black Tea Premium', type: 'in',  quantity: 20, reference: 'Supplier Delivery' },
    { date: '2025-04-14', productId: 'TP-1002', productName: 'Green Tea with Mint',       type: 'out', quantity:  5, reference: 'Order #OR-7891' },
    { date: '2025-04-13', productId: 'TP-1005', productName: 'Chamomile Herbal',         type: 'out', quantity:  3, reference: 'Order #OR-7890' },
    { date: '2025-04-13', productId: 'TP-1001', productName: 'Ceylon Black Tea Premium', type: 'out', quantity: 10, reference: 'Order #OR-7889' },
    { date: '2025-04-10', productId: 'TP-1006', productName: 'Masala Chai',              type: 'out', quantity:  2, reference: 'Order #OR-7888' },
    { date: '2025-04-10', productId: 'TP-1010', productName: 'Peppermint Herbal',        type: 'in',  quantity: 15, reference: 'Supplier Delivery' },
    { date: '2025-04-08', productId: 'TP-1004', productName: 'White Tea Silver Needle',  type: 'out', quantity:  2, reference: 'Order #OR-7887' },
    { date: '2025-04-05', productId: 'TP-1007', productName: 'Jasmine Green Tea',        type: 'out', quantity:  4, reference: 'Order #OR-7886' },
    { date: '2025-04-05', productId: 'TP-1009', productName: 'Ceylon BOPF',              type: 'in',  quantity: 25, reference: 'Supplier Delivery' },
    { date: '2025-04-03', productId: 'TP-1001', productName: 'Ceylon Black Tea Premium', type: 'out', quantity:  5, reference: 'Order #OR-7885' },
  ];


  export const recentOrders = [
    { id: '#OR-7892', customer: 'Nirmal Perera', date: '2025-04-14', amount: 3200, status: 'Delivered' },
    { id: '#OR-7891', customer: 'Rajitha Silva', date: '2025-04-14', amount: 4850, status: 'Processing' },
    { id: '#OR-7890', customer: 'Lakshmi Gunaratne', date: '2025-04-13', amount: 2100, status: 'Shipped' },
    { id: '#OR-7889', customer: 'Anura Bandara', date: '2025-04-13', amount: 8750, status: 'Delivered' }
  ];
  

  export const teaproducts = [
    { id: 'TP-1001', name: 'Ceylon Black Tea Premium',     category: 'Black Tea',   price: 850,  stock: 45, createdAt: '2025-03-10' },
    { id: 'TP-1002', name: 'Green Tea with Mint',          category: 'Green Tea',   price: 950,  stock: 32, createdAt: '2025-03-15' },
    { id: 'TP-1003', name: 'Earl Grey Classic',            category: 'Flavored Tea',price: 780,  stock: 28, createdAt: '2025-03-18' },
    { id: 'TP-1004', name: 'White Tea Silver Needle',      category: 'White Tea',   price: 1200, stock: 15, createdAt: '2025-03-20' },
    { id: 'TP-1005', name: 'Chamomile Herbal',             category: 'Herbal Tea',  price: 680,  stock: 50, createdAt: '2025-03-22' },
    { id: 'TP-1006', name: 'Masala Chai',                  category: 'Flavored Tea',price: 750,  stock: 38, createdAt: '2025-03-25' },
    { id: 'TP-1007', name: 'Jasmine Green Tea',            category: 'Green Tea',   price: 820,  stock: 22, createdAt: '2025-03-28' },
    { id: 'TP-1008', name: 'Lemongrass Ginger',            category: 'Herbal Tea',  price: 720,  stock: 42, createdAt: '2025-04-01' },
    { id: 'TP-1009', name: 'Ceylon BOPF',                  category: 'Black Tea',   price: 890,  stock: 35, createdAt: '2025-04-05' },
    { id: 'TP-1010', name: 'Peppermint Herbal',            category: 'Herbal Tea',  price: 650,  stock: 8,  createdAt: '2025-04-10' }
  ];

  export const salesData = [
    { date: '2025-04-17', orderId: '#OR-7892', customer: 'Nirmal Perera',   category: 'Black Tea',   amount: 3200, status: 'Delivered' },
    { date: '2025-04-14', orderId: '#OR-7891', customer: 'Rajitha Silva',   category: 'Green Tea',   amount: 4850, status: 'Processing' },
    { date: '2025-04-13', orderId: '#OR-7890', customer: 'Lakshmi Gunaratne',category: 'Herbal Tea',  amount: 2100, status: 'Shipped' },
    { date: '2025-04-13', orderId: '#OR-7889', customer: 'Anura Bandara',   category: 'Black Tea',   amount: 8750, status: 'Delivered' },
    { date: '2025-04-10', orderId: '#OR-7888', customer: 'Priyanka Fernando',category: 'Flavored Tea',amount: 1500, status: 'Delivered' },
    { date: '2025-04-08', orderId: '#OR-7887', customer: 'Nirmal Perera',   category: 'White Tea',   amount: 2400, status: 'Delivered' },
    { date: '2025-04-05', orderId: '#OR-7886', customer: 'Rajitha Silva',   category: 'Green Tea',   amount: 3350, status: 'Delivered' },
    { date: '2025-04-03', orderId: '#OR-7885', customer: 'Anura Bandara',   category: 'Black Tea',   amount: 4050, status: 'Delivered' },
    { date: '2025-04-01', orderId: '#OR-7884', customer: 'Lakshmi Gunaratne',category:'Herbal Tea',  amount: 2400, status: 'Delivered' },
    { date: '2025-03-28', orderId: '#OR-7883', customer: 'Priyanka Fernando',category: 'Flavored Tea',amount: 900,  status: 'Delivered' },
    { date: '2025-03-25', orderId: '#OR-7882', customer: 'Nirmal Perera',   category: 'Black Tea',   amount: 3600, status: 'Delivered' },
    { date: '2025-03-22', orderId: '#OR-7881', customer: 'Anura Bandara',   category: 'Green Tea',   amount: 2750, status: 'Delivered' }
  ];