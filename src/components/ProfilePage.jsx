import React from 'react';
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
      </div>
    </>
  );
}

export default ProfilePage;
