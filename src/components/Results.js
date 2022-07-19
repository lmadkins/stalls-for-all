import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';

const Results = ({searchParams}) => {

  const requestedSearch = searchParams.get('query')

  const [results, setResults] = useState('')
  const [error, setError] = useState(false)
  const [locationDetails, setLocationDetails] = useState('')

  const searchOptions = {
    key: process.env.GEOAPIFY_KEY,
    api: 'https://api.geoapify.com/v1/geocode',
    endpoint: '/search'
  }

  useEffect(() => {

    // search input (requestedSearch) goes to geocoder 
    const geoapifyUrl = `https://api.geoapify.com/v1/geocode/search?text=${requestedSearch}}&format=json&apiKey=ffac76c40aed404e8307bf7271367b1b`

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
        const refugeUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${lng}`

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
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })
}, [])

if (!results) {
  return (
    <>
    Loading
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </>
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

  //map out results to render each individual one
  let listings = results.map((element, index) => (
    <div
    key={element.name} 
    className='resultCard'>
    
    <h3>{element.name}</h3>
    <h4>{element.street} </h4>   
    </div>
  ))

  return (
    <div className='resultsPage'>
      <h2>Showing results for: {requestedSearch}</h2>

      <ResultsCard 
        listings={listings}
      />
    </div>
  );
};

export default Results;