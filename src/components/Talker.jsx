import React from 'react';
import Button from './Button';
// import NavBar from './NavBar';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10; i++) {
      speech += 'blah ';
    }
    alert("What's up? " + speech);
	}
  return <>
  {/* <NavBar handleClick={handleClick}/> */}
  <Button handleClick={handleClick}/>
  </>;
}



export default Talker;
