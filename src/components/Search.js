import React from 'react';
import { useState } from "react";
import SearchForm from './SearchForm';

const Search = () => {
  const [locationDetails, setLocationDetails] = useState()
  return (
    <div className='searchContainer'>
      <SearchForm locationDetails={locationDetails}/>
    </div>
  );
};

export default Search