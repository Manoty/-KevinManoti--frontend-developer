import React from 'react';

const Popup = ({ itemData, onClose }) => {
  return (
    <div className="popup">
      {/* Your popup content goes here */}
      <h2>{itemData.name}</h2>
      {/* Display detailed information about the item */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;