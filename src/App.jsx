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
    { id: 4, name: 'Chair', category: 'Furniture', quantity: 5 }, // Low stock item
    { id: 5, name: 'Mouse', category: 'Electronics', quantity: 12 },
  ]); // <-- Default items

  const [filter, setFilter] = useState('');

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

  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1>Inventory Management Table</h1>
      </header>
      <main>
        <FilterSort setFilter={setFilter} />
        <AddItemForm addItem={addItem} />
        <InventoryTable
          inventory={filteredInventory}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
