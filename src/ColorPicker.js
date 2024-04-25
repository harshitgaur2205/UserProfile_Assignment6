import React, { useState } from 'react';
import './colorPicker.css'; 

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    document.querySelector('.Appheader').style.backgroundColor = e.target.value;
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      {/* <p>Selected Color: {selectedColor}</p> */}
    </div>
  );
};

export default ColorPicker;
