import React from 'react';
import { useState } from 'react';

const ResultCard = ({ results, data}) => {
  if (!data.length) {return
    <h2>No Results Found!</h2>}
  return (
    <div>
      {data.map(data => (

         <div key={data.name} className="listing">
         {/* <img src={image.images.downsized_large.url} alt={image.title} /> */}
         <p>
          {data.distance} miles away
        {/* toString(), return first few indices */}
          <br></br>
          {data.name}
         <br></br>
         {data.street} 
         <br></br>
         {/* Get Directions: 
         https://www.google.com/maps/@${data.latitude},${data.longitude}14z */}
            {/* toString(), return true/false */}
          <br></br>
          {data.accessible}
          {data.unisex}
          {data.changing_table}
         </p>
         
        
       </div>
      ))}
    </div>
  );
};

export default ResultCard;