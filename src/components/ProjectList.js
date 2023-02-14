import React, { useState } from 'react';

function ProjectList(){
  const message = "I'm the Project content";

  return(
    <div id='project' className='project'>
      <p>{message}</p>
    </div>
  )
}

export default ProjectList;