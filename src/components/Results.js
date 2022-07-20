import React from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import SearchForm from './SearchForm';
import Loading from './Loading';

const Results = ({searchParams }) => {

  const requestedSearch = searchParams.get('query')

  const [results, setResults] = useState('')
  const [error, setError] = useState(false)
  const [locationDetails, setLocationDetails] = useState('')
  // const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
  
    const apiKey = process.env.REACT_APP_GEOAPIFY_KEY

    // search input (requestedSearch) goes to geocoder 
    const geoapifyUrl = `https://api.geoapify.com/v1/geocode/search?text=${requestedSearch}&format=json&apiKey=${apiKey}`

    fetch(geoapifyUrl)
      .then((res) => {
        if (res.status === 404) {
          return setError(true)
        }
        return res.json()
      })
      .then((data) => {
        // get latitude and longitude properties from the location the geocoder identified
        let lat = data.results[0].lat
        let lng = data.results[0].lon 

        // plug those into the url
        const refugeUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${lat}&lng=${lng}`

        // setIsLoading(true)

        fetch(refugeUrl)
        .then((res) => {
          if (res.status === 404) {
            return setError(true)
          }
          return res.json()
        })
        .then((data) => {
          // returned data with that lat & long is added to results state
          setResults(data)  
          // setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })
}, [requestedSearch])

if (!results) {
  return (
    // <div className='loading'>
    // Loading
    // <Spinner animation="border" role="status">
    //   <br></br>
    //   <span className="visually-hidden">Loading...</span>
    // </Spinner>
    // </div>
    <Loading />
  )
}

  if (error) {
    return (
      
      <div>
        <p>No results were found for {requestedSearch}
        Click <Link to='/'>here</Link> to go back a different search</p>
      </div>
    )
  }

  return ( 
  <div className='resultsPage'>
    <h3>Showing results for: {requestedSearch}</h3>
    <div className='resultsContainer'>
      {results.map((element, index) => (
        <ResultsCard element={element}/>
      ))
      }
    </div>
  </div>
  )   
};

export default Results;