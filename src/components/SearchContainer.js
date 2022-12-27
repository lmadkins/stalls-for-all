import React from 'react';
import SearchForm from './SearchForm';
import inclusiveSign from '../img/inclusive-sign.png'

const SearchContainer = () => {
  return (
    <div className='search-container'>

      <img src={inclusiveSign} alt='sign'/>

      <h1 className='display-6'>
        Enter your location</h1>

      <SearchForm />

    </div>
  );
};

export default SearchContainer