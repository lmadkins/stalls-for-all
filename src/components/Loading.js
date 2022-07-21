import React from 'react';
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';


function Loading() {
  return (
    <>
      <div className='loading'>

      <h1 class='display-6'>
        Loading...
      </h1>

      <br></br>

      <Spinner 
        animation='border' 
        role='status'>
      </Spinner>

    </div>
    </>
  );
}

export default Loading;