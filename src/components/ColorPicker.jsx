import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState();

 const divStyle = {
  backgroundColor: color, 
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',

};

  return (
    <>
      <p>Selected color: {color}</p>
      <div style={divStyle}>
        {colorNames.map((colorName)=>(
          <button 
            onClick={() => setColor(colorName)} 
            key={colorName}>
              {colorName}
          </button>
        ))}
      </div>
    </>
  );
}
