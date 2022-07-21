import React from 'react';
import SearchForm from './SearchForm';


const Search = () => {
  return (
    <div className='searchContainer'>
    {/* <img 
      src={inclusiveSign} alt='sign'/> */}
      <h1 class='display-6'>Enter your location</h1>
      <SearchForm />
    </div>
  );
};

export default Search