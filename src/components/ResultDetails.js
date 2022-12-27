import React from 'react';
import { useEffect} from 'react'


function ResultDetails ({element, setError}) {
// console.log(element.latitude)
const elementLat = element.latitude
const elementLong = element.longitude
  // const [placeDetails, setPlaceDetails] = useState()
  // const [results, setResults] = useState('')
  

  useEffect(() => {
    const key2 = process.env.REACT_APP_GEOAPIFY_KEY2
    
    const detailsUrl = `https://api.geoapify.com/v2/place-details?lat=${elementLat}&lon=${elementLong}&features=building.places&apiKey=${key2}`
    fetch(detailsUrl)
    .then((res) => {
      if (res.status === 404) {
        return setError(true)
      }
      return res.json()
    })
    .then((data) => {
      // setPlaceDetails(data)  
      // console.log(data.features)
    })
    .catch((err) => {
      // console.log(err)
    })

  }, [])
  // console.log(placeDetails)
  // const features = results.features
  return (
    <p>Hello from Result Details
      {/* {results.features[0] !== undefined &&
      <h2>not undefined</h2> } */}
      {/* {features.length > 0 &&
      <h2>greater than zero</h2> } */}
       {/* {results.features.properties.datasource.raw.opening_hours} */}
     {/* {results.features[0].properties.datasource.raw.amenity} */}
    </p>

  )
}

export default ResultDetails;