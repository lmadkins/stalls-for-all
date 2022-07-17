import React from 'react';
import { useState } from 'react';


const directionsUrl = (({data}) => {
  let newUrl =`https://www.google.com/maps/@${data.latitude},${data.longitude}14z`
  console.log(newUrl)
  // return newUrl
  })
  // ^ currently not working

  const shortDistance = (({data}) => {
    let num = data.distance
    let distanceString = num.toString()
    let shortString = distanceString.slice(0, 3)
    console.log(shortString)
    // return shortString
  })
 // ^ currently not working

const ResultCard = ({ results, data, newUrl}) => {

  if (!data.length) {return
    <h2>No Results Found!</h2>}
  return (
    <div className='listingContainer'>
      {data.map(data => (
        
        <div key={data.name} className="listing">
        <p>
          {data.distance} miles away
          <br></br>
          <h3>{data.name}</h3>
        <h4>{data.street} </h4>         
        <a 
        href='{newUrl}'
        target='_blank'
        rel="noreferrer">Get Directions</a>
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