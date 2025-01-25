import React, { useState } from 'react';
import EditItem from './EditItem';

const InventoryTable = ({ inventory, updateItem, deleteItem }) => {
  const [editingItem, setEditingItem] = useState(null); // State to track item being edited

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className={item.quantity < 10 ? 'low-stock' : ''}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                {/* Edit button that opens the modal */}
                <button onClick={() => setEditingItem(item)}>Edit</button>

                {/* Increase quantity */}
                <button onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}>
                  +
                </button>

                {/* Decrease quantity */}
                <button
                  onClick={() =>
                    updateItem(item.id, {
                      quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                    })
                  }
                >
                  -
                </button>

                {/* Delete button */}
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display EditItem modal if editingItem is set */}
      {editingItem && (
        <EditItem
          item={editingItem} // Pass the item to the EditItem component
          updateItem={updateItem}
          closeModal={() => setEditingItem(null)} // Close the modal when done
        />
      )}
    </div>
  );
};

export default InventoryTable;
