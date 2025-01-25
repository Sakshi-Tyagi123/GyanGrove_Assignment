import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InventoryTable from './components/InventoryTable';
import AddItemForm from './components/AddItem';
import FilterSort from './components/FilterSort';
import EditItem from './components/EditItem'; // Import EditItem component
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
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingItem, setEditingItem] = useState(null); // State to store the item being edited
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

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

  const sortedInventory = filteredInventory.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  });

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  // Open the modal for editing an item
  const openEditModal = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
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
        
        {/* Pass props for handling editing */}
        <InventoryTable
          inventory={sortedInventory}
          updateItem={updateItem}
          deleteItem={deleteItem}
          openEditModal={openEditModal} // Pass the function to open the modal
        />
        
        {/* Show the EditItem modal if an item is being edited */}
        {isModalOpen && (
          <EditItem
            item={editingItem} // Pass the selected item to the EditItem component
            updateItem={updateItem}
            closeModal={closeModal}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
