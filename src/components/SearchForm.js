import React from 'react';
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



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
      {/* <img
      src='https://placeholder.pics/svg/300'
      alt=''/> */}
      <Form onSubmit={handleSubmit}>
        {/* Add tooltip or examples? */}
        {/* <Form.Group 
          as={Row} 
          className="mb-3" controlId="formHorizontalAddress"> */}
          <Form.Label column sm={10}>
              Enter your location
          </Form.Label>
        {/* </Form.Group> */}
          <br />
        <Form.Group as={Row} className="mb-3" 
        // controlId="formHorizontalAddress"
        >
        <Col sm={10}>
            <Form.Control 
              type="address" 
              placeholder="Location"
              name='searchString'
              id='searchStringInput'
              onChange={handleChange}
              required />
          </Col>
        </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={10}>
          (Optional) Show only results that are:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              label="Gender Neutral"
              name="formHorizontalCheckboxes"
              id="unisexFormFilter"
              className='checkbox'
            />
            <Form.Check
              label=" ADA Accessible"
              name="formHorizontalCheckboxes"
              id="adaFormFilter"
              className='checkbox'
            />
            <Form.Check
              label="Changing Tables"
              name="formHorizontalCheckboxes"
              id="changingTablesFormFilter"
              className='checkbox'
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Button type="submit">Submit</Button>

      </Form>
    </div>
  );
};

export default SearchForm