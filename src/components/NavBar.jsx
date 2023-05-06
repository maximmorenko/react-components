import React from 'react';

function NavBar() {

  function handleClick(item) {
    alert(`The ${item} page is underway, please try again later!`);
  }

  const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];

  const navLinks = pages.map(page => {
    if(page==='about') return (
      <a href={'https://github.com/maximmorenko/react-components'} key={page} onClick={()=>handleClick(page)}>
      &nbsp;{page}
      </a>
    )
    return (
      <a href={'/' + page} key={page} onClick={()=>handleClick(page)}>
      &nbsp;{page}
      </a>
    )
  });

  return <nav>{navLinks}</nav>;
}

export default NavBar;
