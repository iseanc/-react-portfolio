import React, { useState } from 'react';
import Navigation from './Navigation';

// function Header() {
//   const title = "Project Portfolio For";
//   const developerName = "Sean Collins"

//   return (
//     <div id='header' className='header'>  
//       <header>
//         <h1>{title}</h1>  
//         <h2>{developerName}</h2>
//         <Navigation />
//       </header>
//     </div>
//   )
// }

// export default Header;

// <h1>Developer Portfolio for...</h1>  
// <h2>Sean Collins</h2>

// const Header = () => {
function Header() {
  
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <h1 className="m-0" style={{ fontSize: '3rem' }}>
        Developer Portfolio for...
        </h1>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        Sean Collins
        </p>
      </div>
    </header>
  );
};

export default Header;
