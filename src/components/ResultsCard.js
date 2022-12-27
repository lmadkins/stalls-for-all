import React from 'react';
import Card from 'react-bootstrap/Card';
// import ResultDetails from './ResultDetails';
import { useEffect, useState } from 'react';


const ResultsCard = ({ element }) => {

  const [amenity, setAmenity] = useState('')
  // const [cuisine, setCuisine] = useState('')
  const [hours, setPlaceHours] = useState('')
  const [placeName, setPlaceName] = useState('')

  const elementLat = element.latitude
  const elementLong = element.longitude

useEffect(() => {
  const key2 = process.env.REACT_APP_GEOAPIFY_KEY2
  // const elementLat = element.latitude
  // const elementLong = element.longitude

// const detailsUrl = `https://api.geoapify.com/v2/place-details?lat=${elementLat}&lon=${elementLong}&features=building.places&apiKey=${key2}`
const detailsUrl = `https://api.geoapify.com/v2/place-details?lat=${elementLat}&lon=${elementLong}&features=details.opening_hours&apiKey=${key2}`


  fetch(detailsUrl)
  .then((res) => {
    if (res.status === 404) {
      // return setError(true)
    }
    return res.json()
  })
  .then((data) => {
    setAmenity(data.features[0].properties.datasource.raw.amenity)

    // setCuisine(data.features[0].properties.datasource.raw.cuisine)  

    setPlaceHours(data.features[0].properties.datasource.raw.opening_hours)

    setPlaceName(data.features[0].properties.datasource.raw.name)
    // console.log(data)
    
  })
  .catch((err) => {
    // console.log(err)
  })

}, [])

// function capitalize(string){
//   return string.charAt(0).toUpperCase() + string.slice(1);
//   };

// console.log(amenityName(element.placeAmenity))
// console.log(element.placeAmenity.toUpperCase())
// let capAmenity = {element.placeAmenity}.toUpperCase()
return (
  <Card
  key={element.name} 
  className='result-card'>

  <span>
  {/* {element.amenity} */}
  </span>
  {hours}
  <span>
   {Math.round((element.distance) * 100) / 100} miles away
    <a 
      href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${element.latitude}%2C${element.longitude}`}
      rel='noreferrer'
      target='_blank'>
      Get Directions
    </a>
    </span>
  <Card.Title>
    {element.name}
  </Card.Title> 
  {element.street}  
  
 
  <span>
    {element.accessible === true && 
      <span 
        className='badge accessible-badge'>
        ADA Accessible
      </span>}
      
  {element.unisex === true && 
    <span 
      className='badge unisex-badge'>
      Gender Neutral
    </span>} 
  
  {element.changing_table === true && 
    <span 
      className='badge changing-table-badge'>
      Changing Tables
    </span>} 

  {!element.accessible &&
    <span 
    className='badge not-badge'>
    Not ADA Accessible
  </span>}  

  {!element.unisex &&
    <span 
    className='badge not-badge'>
    Not Gender Neutral
  </span>}  
  </span>
</Card>
)
 
}; 

export default ResultsCard;