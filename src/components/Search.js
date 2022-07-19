import React from 'react';
import { useState } from "react";
import SearchForm from './SearchForm';

const Search = () => {
  const [locationDetails, setLocationDetails] = useState()
  return (
    <div className='searchContainer'>
      {/* <img
      src='./inclusive-symbols-sign.png'
      alt='Image of an inclusive restroom sign'></img> */}
      <SearchForm locationDetails={locationDetails}/>
    </div>
  );
};

export default Search