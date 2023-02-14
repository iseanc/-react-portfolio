import React, { useState } from 'react';

function ProjectList(){
  const message = "I'm the Project content";

  return(
    <div id='project' className='project'>
      <h4>{message}</h4>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
        <li>Project 5</li>
        <li>Project 6</li>
      </ul>
    </div>
  )
}

export default ProjectList;