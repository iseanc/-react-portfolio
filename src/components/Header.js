import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
  const message = "Hello, I'm a header section";

  return (
    <div id='header' className='header'>  
      <header>
        <h1>{message}</h1>  
        <Navigation />
      </header>
    </div>
  )
}

export default Header;