import React, { useState } from 'react';

function Resume() {
  const message = "I have skills...";

  return (
    <div id="resume" className="resume">
      <h4>{message}</h4>
      <ul>
        <li>20 years of IT experience in application support</li>
        <li>5 years of systems adminstration</li>
        <li>0-1 years of Full-Stack Development experience (MERN stack)</li>
      </ul>
    </div>
  )
}

export default Resume;