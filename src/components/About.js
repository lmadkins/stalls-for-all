import React from 'react';
import inclusiveSign from './inclusiveSign.png'


function About() {
  return (
    <div className='aboutContainer'>
      <img 
      alt='Bathroom sign'
      src={inclusiveSign} />
      
      <p className='h5'>
        This app is inspired by the principle that everyone has the right to safe and easy access to a restroom that meets their needs.
      </p>
      
      <br></br>
    
      <p className='h6'>
        The database of locations comes from
      
        <span> <a 
        aria-label='Link to Refuge Restroom Website'
          href='https://www.refugerestrooms.org/'
          rel='noreferrer'
          target='_blank' >
          Refuge Restrooms
        </a></span> 

        , and utilizes their   
        
        <span> <a 
          aria-label='Link to Refuge Restroom API Website'
          href='https://www.refugerestrooms.org/api/docs/'
          rel='noreferrer'
          target='_blank' >
          API 
        </a></span>
        .
        <br></br>

        For retrieving location and distance information, it utilizes 

        <span> <a 
          aria-label='Link to Geoapify API Website'
          href='https://www.geoapify.com/geocoding-api'
          rel='noreferrer'
          target='_blank' >
          Geoapify's Geocoding API 
        </a></span> 
    
        . 
      <br></br>

      Site made using 

      <span> <a 
        aria-label='Link to React Website'
        href='https://reactjs.org/'
        rel='noreferrer'
        target='_blank' >
        React
      </a> </span> 

      and 

      <span> <a 
        aria-label='Link to React Bootstrap Website'
        href='https://react-bootstrap.netlify.app/'
        rel='noreferrer'
        target='_blank' >
        React Bootstrap 
      </a></span> 
      .
      </p>
    </div>
  );
}

export default About;