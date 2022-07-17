import React from 'react';
import { useState } from 'react';

const ResultCard = ({ results}) => {
  if (!results.length) {return
    <h2>No Results Found!</h2>}
  return (
    <div>
      {results.map(results => (
         <div key={results.id} className="listing">
         {/* <img src={image.images.downsized_large.url} alt={image.title} /> */}
       </div>
      ))}
    </div>
  );
};

export default ResultCard;