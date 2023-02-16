import React, { useState } from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <ul class="social-media">
          <li><a href="https://www.linkedin.com/in/iseanc">LinkedIn</a></li>
          <li><a href="https://github.com/iseanc">GitHub</a></li>
          <li><a href="https://stackoverflow.com/users/19913961/iseanc">StackOverflow</a></li>
        </ul>
        <h4>&copy; {new Date().getFullYear()} - Sean Collins</h4>
      </div>
    </footer>
  );
};

export default Footer;