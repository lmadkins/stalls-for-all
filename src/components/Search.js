import React from 'react';
import { useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";

const Search = ({setSearchParams}) => {

  let navigate = useNavigate()

  const [searchString, setSearchString] = useState('')

  const handleChange = (event) => {
    setSearchString(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // navigate('/results' + '?query=$' + {searchString})
    setSearchParams(searchString)
    navigate(`/results?query=${searchString}`)
  }

  return (
    <div className='searchContainer'>
      {/* <h2>Search Here:</h2> */}
      <div className='searchForm'>
      <form onSubmit={handleSubmit}>

      <label htmlFor='searchStringInput'>
        {/* Enter street address or zip code: */}
        Enter city name:
        </label>
        <br />
      <input
        type='text'
        name='searchString'
        id='searchStringInput'
        onChange={handleChange}
        required>
      </input>

      <button type='submit'>Submit</button>

      </form>
    </div>
    </div>
  );
};


export default Search