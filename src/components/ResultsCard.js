import React from 'react';
import { useState } from 'react';
// import Badge from 'react-bootstrap/Badge';

const ResultsCard = ({ element }) =>(
  <div
    key={element.name} 
    className='resultCard'>

    <span>
      <p> {Math.round((element.distance) * 100) / 100} miles away</p>
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

    {element.accessible === true && 
      <span className='badge accessibleBadge'>
        ADA Accessible
      </span>}
      
    {element.unisex === true && 
      <span className='badge unisexBadge'>
        Gender Neutral
      </span>}  

    {element.changing_table === true && 
      <span className='badge changingTableBadge'>
        Changing Tables
      </span>} 
  
    
  </div>

); 

export default ResultsCard;