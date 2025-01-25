import React, { useState, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = ({ lowStockItems }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // Show the chatbot after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!visible || lowStockItems.length === 0) return null; // Don't render if no low-stock items or chatbot not visible

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <span>💬 Assistant</span>
        <button onClick={() => setVisible(false)}>✖</button>
      </div>
      <div className="chatbot-content">
        <p>Low-stock items:</p>
        <ul>
          {lowStockItems.map((item) => (
            <li key={item.id}>
              {item.name} - Only {item.quantity} left!
            </li>
          ))}
        </ul>
        <button className="chatbot-buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Chatbot;
