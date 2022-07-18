import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';

const Results = ({searchParams}) => {
  const requestedSearch = searchParams.get('query')
  const [results, setResults] = useState()
  const [error, setError] = useState(false)

// const url ='https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=45.5229783&lng=-122.6811032'

  // https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&query=portland

  useEffect(() => {
    const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&query=${requestedSearch}`


  fetch(url)
    .then((res) => {
      if (res.status === 404) {
        return setError(true)
      }
      return res.json()
    })
    .then((data) => {
      setResults(data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])

  if (error) {
    return (
      <div>
        <p>No results were found for {requestedSearch}
        Click <Link to=''>here</Link> to go back a different search</p>
      </div>
    )
  }

  if (!results) {
    return null
  }

  let listings = results.map((element, index) => (
    <div
    key={element.name} 
    className='resultCard'>
    
    <h3>{element.name}</h3>
    <h4>{element.street} </h4>   
    </div>
  ))

  return (
    <div className='resultsContainer'>
      <h2>Showing results for {requestedSearch}:</h2>

      <ResultsCard 
        listings={listings}
        requestedSearch={requestedSearch} />
    </div>
  );
};

export default Results;