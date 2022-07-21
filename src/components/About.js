import React from 'react';
import inclusiveSign from './inclusiveSign.png'

function About() {
  return (
    <div className='aboutContainer'>
      <img 
      src={inclusiveSign} alt='sign'/>
      <p>
      This app is based on the principle that everyone has the right to safe and easy access to a restroom that meets their needs, was designed to help facilitate this.
        <br></br>
      The database of locations comes from <span> <a 
        href='https://www.refugerestrooms.org/'
        target='_blank'
        rel="noreferrer"
        aria-label='Link to Refuge Restroom Website'>
        Refuge Restrooms
      </a></span> 
      , and utilizes their   
      <span> <a 
        href='https://www.refugerestrooms.org/api/docs/'
        target='_blank'
        rel="noreferrer"
        aria-label='Link to Refuge Restroom API Website'>
        API. 
      </a></span>
      <p></p>
      For retrieving location and distance information, it utilizes <span><a 
        href='https://www.geoapify.com/geocoding-api'
        target='_blank'
        rel="noreferrer"
        aria-label='Link to Geoapify API Website'>
        Geoapify's Geocoding API. 
      </a></span> 
      <p></p>
      Site made using 
      <span> <a 
        href='https://reactjs.org/'
        target='_blank'
        rel="noreferrer"
        aria-label='Link to React Website'>
         React
      </a> </span> 
      and 
      <span> <a 
        href='https://react-bootstrap.netlify.app/'
        target='_blank'
        rel="noreferrer"
        aria-label='Link to React Bootstrap Website'>
        React Bootstrap. 
      </a></span> 

      </p>
    </div>
  );
}

export default About;