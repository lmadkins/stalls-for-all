import React from 'react';
import { useState } from 'react';

const ResultCard = ({ data }) => {

  let listings = data.map(data => (
    <div 
      key={data.name} 
      className="listing">

      {data.distance} miles away<br />
      <h3>{data.name}</h3>
      <h4>{data.street} </h4>         
      <a href='{newUrl}'
      // see data-methods for {newUrl}
        target='_blank'
        rel="noreferrer">Get Directions
      </a><br />
      
    </div>
  ))
  // if (!data.length) {return
  //   <h2>No Results Found!</h2>}
  return (
    <div className='listingContainer'>
      {listings}
    </div>
  );
};

export default ResultCard;