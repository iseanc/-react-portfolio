import React, { useState } from 'react';

function Navigation() {
  const message = "I'm the Navigation area";

  return(
    <div className="Navigation-content">
      <nav>
        <p>{message}</p>
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;