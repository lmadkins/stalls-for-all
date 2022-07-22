import React from 'react';
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FilterContext } from './FilterContext';


const SearchForm = ( {setSearchParams} ) => {

  // set filters for search
  const { onlyADA, setOnlyADA } = useContext(FilterContext)
  const { onlyUnisex, setOnlyUnisex } = useContext(FilterContext)

  let navigate = useNavigate()

  const [searchString, setSearchString] = useState('')

  const handleChange = (event) => {
    setSearchString(event.target.value)
    // sets SearchString (state) to what is typed into the input form
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/results?query=${searchString}`)
  }

  // filter handling
  const handleADAFilter = (event) => {
    if (event.target.checked) {
      setOnlyADA(true)
    } 
  }

  const handleUnisexFilter = (event) => {
    if (event.target.checked) {
      setOnlyUnisex(true)
    } 
  }

  return (
    <div className='searchForm'>

      <Form onSubmit={handleSubmit}>
        <br />
        <Form.Group as={Row} className='mb-3' >
        <Col sm={10}>
            <Form.Control 
              aria-required='true'
              required 
              autoComplete='street-address'
              id='searchStringInput'
              name='searchString'
              onChange={handleChange}
              placeholder='Location'
              type='address' />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label as='legend' column sm={10}>
              (Optional) Show only results that are:
            </Form.Label>

            <Col sm={10}>
              <Form.Check
                className='checkbox'
                id='unisexFormFilter'
                label='Gender Neutral'
                name='formHorizontalCheckboxes'
                onChange={handleUnisexFilter}
              />
              <Form.Check
                className='checkbox'
                id='adaFormFilter'
                label=' ADA Accessible'
                name='formHorizontalCheckboxes'
                onChange={handleADAFilter}
              />
            </Col>

          </Form.Group>
        </fieldset>

      <Button type='submit'>Submit</Button>

      </Form>
    </div>
  );
};

export default SearchForm