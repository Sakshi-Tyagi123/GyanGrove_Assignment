import React, { useState } from 'react';
import EditItem from './EditItem';

const InventoryTable = ({ inventory, updateItem, deleteItem }) => {
  const [editingItem, setEditingItem] = useState(null); // Track the item being edited

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
                <button onClick={() => setEditingItem(item)}>Edit</button>
                <button onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}>
                  +
                </button>
                <button
                  onClick={() =>
                    updateItem(item.id, {
                      quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                    })
                  }
                >
                  -
                </button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem && (
        <EditItem
          item={editingItem}
          updateItem={updateItem}
          closeModal={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};

export default InventoryTable;
