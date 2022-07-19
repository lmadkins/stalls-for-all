Pokemon search lesson
react-stocks

Main App Component:
Navigation with link to about
Routes:
Route to search?
Route to results
Route to about
(External) link to Refuge API to add a listing

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


