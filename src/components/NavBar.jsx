import React from 'react';

function NavBar(props) {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      if(page==='about') return (
        <a href={'https://github.com/maximmorenko/react-components'} key={page} onClick={props.handleClick}>
        &nbsp;{page}
        </a>
      )
      return (
        <a href={'/' + page} key={page} onClick={props.handleClick}>
           &nbsp;{page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
}
export default NavBar;
