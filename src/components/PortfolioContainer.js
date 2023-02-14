import React, { useState } from 'react';
// import NavTabs from './Navigation';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/ProjectList';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  let [currentPage, setCurrentPage] = useState('About');

  // Checking value of `currentPage`, return corresponding component to render.
  let renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return ( 
    <div>
      {/* Pass currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
