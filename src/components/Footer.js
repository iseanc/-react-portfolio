import React, { useState } from 'react';

function Footer() {
  const message = "I'm the Footer"

  return (
    <div className='footer' id='footer'>
      <footer>
        <p>{message}</p>
      </footer>
    </div>
  )
}

export default Footer;