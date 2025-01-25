import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [newItem, setNewItem] = useState({ name: '', category: '', quantity: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.category && newItem.quantity) {
      addItem(newItem);
      setNewItem({ name: '', category: '', quantity: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newItem.category}
        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
