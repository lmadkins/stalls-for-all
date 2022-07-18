Pokemon search lesson
react-stocks

Main App Component:
Navigation with link to about
Routes:
Route to search?
Route to results
Route to about

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

Loading 
if loading is true, return ainimation
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

hardcoded lat/long 

