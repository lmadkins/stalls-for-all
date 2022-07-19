import React from 'react';
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const SearchForm = ({setSearchParams}) => {

  let navigate = useNavigate()

  const [searchString, setSearchString] = useState('')

  const handleChange = (event) => {
    setSearchString(event.target.value)
    // set SearchString (state) to what is typed into the input form
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/results?query=${searchString}`)
  }

  return (
    <div className='searchForm'>
      <img
      src='https://placeholder.pics/svg/300'
      alt=''/>
      <img 
      src='./inclusive-symbols-sign.png'/>
      
      <form onSubmit={handleSubmit}>

      <label htmlFor='searchStringInput'>
        {/* Add tooltip or examples? */}
        Enter your location
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
  );
};

export default SearchForm