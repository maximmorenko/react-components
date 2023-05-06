import React from 'react';
import NavBar from './NavBar';

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="assets/cat.jpg" alt='cat'/>
    </div>
  );
}

export default ProfilePage;
