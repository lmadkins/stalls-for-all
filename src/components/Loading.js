import React from 'react';
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <>
      <div className='loading'>
      Loading...
      <br></br>
      <Spinner animation="border" role="status">
      {/* <span className="visually-hidden">Loading...</span> */}
      </Spinner>
    </div>
    </>
  );
}

export default Loading;