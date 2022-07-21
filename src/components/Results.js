import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResultsCard from './ResultsCard';
import SearchForm from './SearchForm';
import Loading from './Loading';


const Results = ({ searchParams, onlyADA, setOnlyADA, onlyUnisex, setOnlyUnisex}) => {

  const requestedSearch = searchParams.get('query')

  const [results, setResults] = useState('')
  const [error, setError] = useState(false)
  // const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
  
    const apiKey1 = process.env.REACT_APP_GEOAPIFY_KEY
    // search input (requestedSearch) goes to geocoder 
    const geoapifyUrl = `https://api.geoapify.com/v1/geocode/search?text=${requestedSearch}&format=json&apiKey=${apiKey1}`

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
        // let id = data.results[0].place_id
          console.log(data)
        // plug those into the url
    
        const noFilterUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${lat}&lng=${lng}`

        const adaFilterUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&ada=true&lat=${lat}&lng=${lng}`

        const unisexFilterUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&unisex=true&lat=${lat}&lng=${lng}`

        const bothFilterUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&ada=true&unisex=true&lat=${lat}&lng=${lng}`

        // const urlFilter = (
        //   onlyUnisex ? (
        //     fetch(unisexFilterUrl)
        //     ) : fetch(noFilterUrl)
        // )
        
        fetch (noFilterUrl)
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
          // console.log(data[0].id)
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
  
  results.sort(function(a, b) {
    return a.distance - b.distance
  })



  return ( 
  <div className='resultsPage'>
    <h3>Showing results for: {requestedSearch}</h3>
    <div className='resultsContainer'>

      {results.map((element) => (
       
        <ResultsCard element={element}/>
      ))
      }
    </div>
  </div>
  )   
};

export default Results;