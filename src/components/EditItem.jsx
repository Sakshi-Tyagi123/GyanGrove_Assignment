import React, { useState } from 'react';

const EditItem = ({ item, updateItem, closeModal }) => {
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item.id, editedItem); // Update the item
    closeModal(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedItem.name}
            onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
            placeholder="Item Name"
          />
          <input
            type="text"
            value={editedItem.category}
            onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
            placeholder="Category"
          />
          <input
            type="number"
            value={editedItem.quantity}
            onChange={(e) =>
              setEditedItem({ ...editedItem, quantity: parseInt(e.target.value, 10) })
            }
            placeholder="Quantity"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
