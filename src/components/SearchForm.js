import React from 'react';
import { useEffect, useState } from 'react'

const SearchForm = ({ handleSubmit, handleChange, searchStringState, setSearchStringState, testData }) => {

  return (
    <div className='searchForm'>
      <form onSubmit={handleSubmit}>

      <label htmlFor='searchStringInput'>
        Enter street address or zip code:</label>
        <br />
      <input
        type='text'
        name='searchInput'
        id='searchStringInput'
        onChange={handleChange}
        // value={ this.searchStringState }
        required>
      </input>

      <button type='submit'>Search</button>

      </form>
    </div>
  );
};

export default SearchForm;