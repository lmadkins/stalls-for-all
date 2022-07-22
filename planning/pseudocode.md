 https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

REACT_APP_GOOGLE_KEY=AIzaSyDiQgB6EVk_RigNW8YW4uxPWSXCKgd3A3w


 const key2 = process.env.REACT_APP_GEOAPIFY_KEY2
  const detailsUrl = `https://api.geoapify.com/v2/place-details?lat=${element.latitude}&lon={element.longitude}&features=building.places&apiKey=${key2}`

  fetch(detailsUrl)
  .then((res) => {
    if (res.status === 404) {
      return setError(true)
    }
    return res.json()
  })
  .then((data) => {
    // returned data with that lat & long is added to results state
    // console.log(data)
    // console.log(data.features[0].properties.datasource.raw.opening_hours)
    // console.log()
    // setResults(data)  
    // setIsLoading(false)
    // console.log(data[0].id)
  })
  .catch((err) => {
    console.log(err)
  })
  const urlLat = eachLat.forEach(function(a) {
    return a.latitude
  })
   // let arrKey = 
  // console.log(results[0].longitude)
  // let eachLon = results.longitude

  // const getLat = results[0].latitude
  // console.log(getLat)
  
  // results.forEach(function getCoords(a) {
  //   return a.latitude
  // })
  // const eachLat = results.latitude
  // const eachLong = results.longitude


 
  // const [eachLong, setEachLong] = useState()
returned array of 10 objects
access the value at results[i].latitude and results[i].longitude

results.forEach(function getCoords(a, n)=  {
 let eachLat = a.latitude 

})
  return results.a.latitude
(...results)
results.
use variable to pull a value from an object's key
const keyToLog = 'likesPickles'
console.log(person[keyToLog]) //person.likesPickles

const latitude = 
results.
get place Info
const detailsUrl = `https://api.geoapify.com/v2/place-details?lat=45.51631561428553&lon=-122.61720697168224&apiKey=${key2}`

https://api.geoapify.com/v2/place-details?lat=45.51230558248889&lon=-122.61781877318535&features=building.places&apiKey=d55c82cbf6894f01bd75ad568f8cbc94
restrictions.access,restrictions.access_details,restrictions.min_age,wheelchair,toilets, opening_hours,
opening_hours	string	Opening hours

restrictions.min_age
opening_hours	string	Opening hours
restrictions.access
	enum	Access type - "private", "customers", "permit", "designated", "permissive"

restrictions.access_details
	object	Access details

toilets
	boolean	If there are toilets

changing_table	boolean

wheelchair	boolean	If the place is sutable for wheelchairs

building.places	Place feature []	Places of "commercial", "accommodation", "sport", "service", "rental", "healthcare", "childcare", "entertainment", "catering" categories located in the building found by the given place Id or coordinates

building.commercial	Place feature []	Places of "commercial" category located in the building found by the given place Id or coordinates


lat = results.[0].latitutde
long = results.[0].long
   const apiKey2 = process.env.REACT_APP_GEOAPIFY_KEY2
/////////////////////////

Google's 
AIzaSyDiQgB6EVk_RigNW8YW4uxPWSXCKgd3A3w

https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id%2Cname%2Copening_hours&
&input=${results.[0].name}
 &inputtype=textquery
 &key=AIzaSyDiQgB6EVk_RigNW8YW4uxPWSXCKgd3A3w

 const apiKey2 = process.env.REACT_APP_GOOGLE_KEY
const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json
?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry
&input=mongolian
&inputtype=textquery
&locationbias=circle%3A2000%4047.6918452%2C-122.2226413
&key=${apiKey2}`
  fetch(url, {
    method: 'GET',
    mode: "no-cors",
  })
  .then((res) => {
    if (res.status === 404) {
      return setError(true)
    }
    return res.json()
  })
  .then((data) => {

    console.log(data)
    // setResults(data)  
    // setIsLoading(false)
    // console.log(data[0].id)
  })
  .catch((err) => {
    console.log(err)
  })
/////////////////////////
if 
      // { onlyUnisex && 
      //   fetch(unisexFilterUrl) }

      // {onlyADA &&
      //   fetch(adaFilterUrl)}

    // !onlyUnisex && !onlyADA &&
      //   fetch(noFilterUrl)    
      // onlyUnisex && 
      //   fetch(unisexFilterUrl)

      // onlyADA &&
      //   fetch(adaFilterUrl)
      
     // fetch(onlyUnisex === true  && onlyADA === true &&
      //   bothFilterUrl)
      // fetch(onlyUnisex === true && !onlyADA && 
      //   unisexFilterUrl)
      // fetch(onlyADA === true && !onlyUnisex &&
      //     adaFilterUrl)
////////////////////////
      if (onlyUnisex === true  && onlyADA === true) {
        fetch(bothFilterUrl)
      }
    else if (onlyUnisex === true && !onlyADA) 
        fetch(unisexFilterUrl)

      else if (onlyADA === true && !onlyUnisex) {
        fetch(adaFilterUrl)
      }
      else {
        fetch(noFilterUrl)
      }
 ////////////////////////     

Auto search form

Click search to show locations near you
Optional Filters
Submit button

handle change?
submit? 

results automatic
useEffect

in Search Form:
Button- detect my location automatically
onClick=handleAutoLocate

  useEffect(() => {
  
    const apiKey2 = process.env.REACT_APP_ABSTRACT_KEY
    // search input (requestedSearch) goes to geocoder 
    const abstractUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey2}`

    fetch(abstractUrl)
      .then((res) => {
        if (res.status === 404) {
          return setError(true)
        }
        return res.json()
      })
      .then((data) => {
        // get latitude and longitude properties from the location the geocoder identified
                let lat = data.latitude
        let lng = data.longitude 
        console.log(data.longitude)

        // plug those into the url
        const refugeUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${lat}&lng=${lng}`

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

const handleAutoLocate function 
  useEffect

in Results:

local env key

variable for local key
variable for URL
`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey2}&ip_address=`

    fetch(geoapifyUrl)
      .then((res) => {
        if (res.status === 404) {
          return setError(true)
        }
        return res.json()
      })
      .then((data) => {

      let lat = data.results.latitude
      let long = data.results.longitude

//////////////////////////////////
Sorting results
function sortResults(a, b) {
    return a - b
  }
results.sort(function(a, b) {
  return a.distance - b.distance
})
//////////////////////////////////
Filtering results
function similar to handleChange/handle submit?
e.g. 
and set state onlyUnisex, setOnlyUnisex = useState(false)
setShowUnisex(true)
showOnlyADA, setOnlyADA = useState(false)

event listeners and event methods to set State to true

in Results
if onlyUnisex, setOnlyUnisex
if .form-check-input:checked
unisexFormFilter
adaFormFilter


//////////////////////////////////
Header/Nav
Route to about
(External) link to Refuge API to add a listing

//////////////////////////////////
Main App Component:
Navigation with link to about
Routes:
Route to search?
Route to results
Route to about
(External) link to Refuge API to add a listing

//////////////////////////////////
SearchForm Component
-use state, link?
input on change, event, handle onchange/handlesubmit
- A user enters their address or zipcode, 
- Use those coordinates to get data from the Refuge API
- export handlesubmit, handlechange, searchstringstate as props?

SearchResults Component
use state, useeffect, useParams
- Cards are mapped for each location in the results, with the name, address, and its stats true/false/unknown (green, red, yellow?)
- also if locaiton matches one of locations of codes from data.json, show htat? 

//////////////////////////////////
https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=45.5229783&lng=-122.6811032
Getting both Lat and Long params into the url query
maybe use on submit method, take lat, long, split based on ',' 
- and set query1 query2?
- or use state w/ SearchString? and do a 1 and 2?

https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${lng}

45.5229783,-122.6811032
build a new query string that takes coordinates, e.g.
45.5229783, -122.6811032
and 
substring?
string.replace()?
replace ',' or ', '
with '&lng='
then 
assign variable
enter coordinates, 
that search string (event.target.value- assign to a var first?) do replace method, replace ',' or ', '
with '&lng='
then setSearchString!
^ DIDN'T WORK
{error: 'lng is missing'}
GET https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat= 400 (Bad Request)



////////////////////////
GEOCODING
GEOAPIFY_KEY
declare searchOptions in app.js
key: process.env.GEOAPIFY_KEY

in app function, 
set state of locationDetails, setLocationDetails

take searchString from Search.js
write function getCoords(searchString) {
  (searchString is what's entered into input) 
  const url 
  interpolate api url plus parameters 
}
fetch url underneath
then setLocationDetails(response data)

either extract lat and long from object, set as variables 

declare
const refugeUrl = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${lng}`

fetch from refugeUrl
fetch(refugeUrl)
    .then((res) => {
      if (res.status === 404) {
        return setError(true)
      }
      return res.json()
    })
    .then((data) => {
      console.log(data)
      // setResults(data)
    })
    .catch((err) => {
      console.log(err)
    })



////////////////////////
Loading 
if loading is true, return animation
if loading is false

About?
Brief about this, believe in safe inclusive access, etc. 

Layout/Styling ideas?
https://react-bootstrap.github.io/layout/stack/
https://react-bootstrap.github.io/components/navs/
https://react-bootstrap.github.io/components/navbar/ 

https://react-bootstrap.github.io/components/overlays/#popovers
https://react-bootstrap.github.io/components/buttons/
https://react-bootstrap.github.io/components/progress/


pages will have their own state usually
pages versus components




- loading page as own component

{!results && (
  <div className='loading'>
    Loading
    <Spinner animation="border" role="status">
      <br></br>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
)
}

move things to results card

{results && (
    <ResultsCard 
        listings={listings}
      />
)}

result card

{elmement}