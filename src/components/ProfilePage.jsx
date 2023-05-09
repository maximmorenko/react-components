import React from 'react';
import ColorPicker from './ColorPicker';
import GroceryItem from './GroceryItem';
import NavBar from './NavBar';
import Talker from './Talker';

function ProfilePage() {
  const handleClick = ()=>{
    alert("What's up?");
  }
  return (
    <>
      <NavBar handleClick={handleClick}/>
      <div className='container'>
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="assets/cat.jpg" alt='cat'/>
        <Talker />
        <div className='lighGray' >
          <h2>Do you need some groceries?</h2>
          <GroceryItem item="Eggs" />
          <GroceryItem item="Banana" />
          <GroceryItem item="Strawberry" />
          <GroceryItem item="Bread" />
        </div>
        <ColorPicker />
      </div>
    </>
  );
}

export default ProfilePage;
