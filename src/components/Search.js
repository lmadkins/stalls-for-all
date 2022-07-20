import React from 'react';
import { useState } from "react";
import SearchForm from './SearchForm';
import inclusiveSign from './inclusiveSign.png'

const Search = () => {
  const [locationDetails, setLocationDetails] = useState()
  return (
    <div className='searchContainer'>
    <img 
      src={inclusiveSign} alt='sign'/>
      <SearchForm locationDetails={locationDetails}/>
    </div>
  );
};

export default Search