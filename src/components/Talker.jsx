import React from 'react';
import Button from './Button';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10; i++) {
      speech += 'blah ';
    }
    alert("What's up? " + speech);
	}
  return <Button handleClick={handleClick}/>;
}

export default Talker;
