import React from 'react';

function GroceryItem(props) {
  function handleClick(item) {
    alert(`The ${item} has been added to the cart!`);
  }
  return (
    <button onClick={() => handleClick(props.item)}>
      {props.item}
    </button>
  );
};

export default GroceryItem;
