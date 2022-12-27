import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from './FilterContext';
import Loading from './Loading';
import ResultsCard from './ResultsCard';
import ResultDetails from './ResultDetails';

const Results = ({ searchParams }) => {

  const requestedSearch = searchParams.get('query')
  
  // import ADA and Unisex filters from App as context
  const { onlyADA, setOnlyADA } = useContext(FilterContext)
  const { onlyUnisex, setOnlyUnisex } = useContext(FilterContext)

  // create new state
  const [results, setResults] = useState('')
  const [error, setError] = useState(false)
  const [placeDetails, setPlaceDetails] = useState()

  useEffect(() => {
    
    const key1 = process.env.REACT_APP_GEOAPIFY_KEY

    // search input (requestedSearch) goes to geocoder 
    const geoapifyUrl = `https://api.geoapify.com/v1/geocode/search?text=${requestedSearch}&format=json&apiKey=${key1}`

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

      //plug those into the URL
      let queryUrl = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0'
    
        if (onlyUnisex && onlyADA === true) {
          queryUrl = `${queryUrl}&ada=true&unisex=true&lat=${lat}&lng=${lng}`
          // console.log('filter both')
        } else if (onlyUnisex === true){
          queryUrl = `${queryUrl}&unisex=true&lat=${lat}&lng=${lng}`
          // console.log('filter only unisex')
        } else if (onlyADA === true) {
          queryUrl = `${queryUrl}&ada=true&lat=${lat}&lng=${lng}`
          // console.log('filter only ADA')
        } else if (!onlyUnisex && !onlyADA ) {
          queryUrl = `${queryUrl}&lat=${lat}&lng=${lng}`
          // console.log('filter neither')
        } else {
          // console.log('error')
        }
        // fetch based on whichever filters
        fetch(queryUrl)
        .then((res) => {
          if (res.status === 404) {
            return setError(true)
          }
          return res.json()
        })
        .then((data) => {
          // returned data with that lat & long is added to results state
          setResults(data)
          setPlaceDetails(data)
          // console.log(results)
        })
        .catch((err) => {
          // console.log(err)
        })


      })
      .catch((err) => {
        // console.log(err)
      })
}, [requestedSearch, onlyADA, onlyUnisex])

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
  // console.log(results[0].latitutde)

  // placeDetails.sort(function(a, b) {
  //   return a.distance - b.distance
  // })
  // let elementLats = []

  return ( 
  <div className='results-page'>
    <br></br>
    <p className='h3'>Showing results for: {requestedSearch}</p>

    <div className='results-container'>

    {/* {placeDetails.map((element) => (
    console.log(element.name, element.latitude, element.longitude)
    <ResultDetails element={element}/>
  ))} */}
  
      {results.map((element) => (
        
        <ResultsCard element={element}/>
        
      ))}
    </div>
  </div>
  )   
};

export default Results;