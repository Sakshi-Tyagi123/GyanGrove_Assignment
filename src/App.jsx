import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InventoryTable from './components/InventoryTable';
import AddItemForm from './components/AddItem';
import FilterSort from './components/FilterSort';
import './App.css';

const App = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Notebook', category: 'Stationery', quantity: 50 },
    { id: 2, name: 'Pen', category: 'Stationery', quantity: 30 },
    { id: 3, name: 'Monitor', category: 'Electronics', quantity: 15 },
    { id: 4, name: 'Chair', category: 'Furniture', quantity: 5 },
    { id: 5, name: 'Mouse', category: 'Electronics', quantity: 12 },
  ]); // <-- Default items

  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Track sort order

  const addItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const updateItem = (id, updatedItem) => {
    setInventory(inventory.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const filteredInventory = filter
    ? inventory.filter((item) => item.category.toLowerCase().includes(filter.toLowerCase()))
    : inventory;

  // Sort filtered inventory based on quantity and sortOrder
  const sortedInventory = filteredInventory.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.quantity - b.quantity; // Ascending order
    } else {
      return b.quantity - a.quantity; // Descending order
    }
  });

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1>Inventory Management Table</h1>
      </header>
      <main>
        <FilterSort filter={filter} setFilter={setFilter} sortOrder={sortOrder} handleSort={handleSort} />
        <AddItemForm addItem={addItem} />
        <InventoryTable
          inventory={sortedInventory} // Pass sorted inventory to InventoryTable
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
