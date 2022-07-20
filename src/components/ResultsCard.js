import React from 'react';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

const ResultsCard = ({ element }) =>(
  <div
    key={element.name} 
    className='resultCard'>

    <span>{Math.round((element.distance) * 100) / 100} miles away
    <br></br>
    <a 
      href={`https://www.google.com/maps/@${element.latitude},${element.longitude}14z`}
      target='_blank'
      rel="noreferrer">
      Get Directions
    </a> 
    </span>
    <br></br>
    <h5>{element.name}</h5>
    <h6>{element.street} </h6>  
    
  </div>

); 

export default ResultsCard;