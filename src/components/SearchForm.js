import React from 'react';
import { useState } from 'react'

const SearchForm = ({handleSubmit, handleChange, searchStringState, setSearchStringState, testData}) => {

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        >
      <label
        htmlFor='searchStringInput'></label>
      <input
        type='text'
        name='searchInput'
        id='searchStringInput'
        onChange={handleChange}
        // value={this.searchStringState}
        required
        >
      </input>
      <button

        type='submit'>Search</button>
      </form>
    </div>

  );
};

export default SearchForm;