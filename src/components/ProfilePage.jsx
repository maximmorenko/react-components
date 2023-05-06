import React from 'react';
import NavBar from './NavBar';

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://github.com/maximmorenko/memory-game/blob/master/assets/img/js_back.jpg?raw=true" alt='my'/>
      {/* <img src="src/assets/1.jpg" alt='my'/> */}
    </div>
  );
}

export default ProfilePage;
