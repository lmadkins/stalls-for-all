## Project Description 
Open source public restroom lookup for Portland area

## Link to the API you plan to use
https://www.refugerestrooms.org/api/docs/#!/restrooms 

& to receive lat & long coordinates for it:
https://developers.google.com/maps/documentation/javascript/geocoding

## Example data response you plan to use
```json
//Refuge API
 {
    "id": 17858,
    "name": "The Elliot Center",
    "street": "1226 SW Salmon Street",
    "city": "Portland",
    "state": "Oregon",
    "accessible": false,
    "unisex": true,
    "directions": "Downstairs, on the lower level, there are \"All Gender\" restrooms.",
    "comment": "",
    "latitude": 45.5185952,
    "longitude": -122.6859995,
    "created_at": "2015-06-25T04:35:20.838Z",
    "updated_at": "2015-06-25T04:35:20.838Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": false,
    "edit_id": 17858,
    "approved": true,
    "distance": 0.3828555369224769,
    "bearing": "278.364607392175"
  },


 // Google Maps Geolocation
 {
  "location": {
    "lat": 37.421875199999995,
    "lng": -122.0851173
  },
  "accuracy": 120
} 
```

## Visual of your component hierarchy

## Wire Frames

## User Stories
- I want to be able to quickly enter my location within Portland and look up public restroom options near me, sorted by nearest options
- I want to know whether it meets certain criterea (All-Gender, ADA accessible, has changing tables)
- I want to know how to get there
- I want to know what type of establishment it is, its location, and whether it is open
- I want to know whether you must be a paying customer, if that information is available for it


### MVP Goals
- A user enters their address or zipcode, gets results nearby (Input goes to the Google Maps API, which returns coordinates, which are then used to get data from the Refuge API)
- Results listings sorted by nearest options, and show any critical information available (name of building, address, unisex, accessible, changing table) 
- Show link to google maps to take user to directions to the place
- Mobile-first, responsive, minimalistic design
- Uses accesibility practices, gender-inclusive language

### Stretch Goals
- Get information from Google Maps Places API about whether the place is open or not 
- Filter results by ADA/Gender Neutral/Changing tables true/false
- Show distance information (additional google maps API)
- More results by also importing restroom locations from Googles place search for 'toilet' (or other optimal search queries, TBD with research)
- If there's been a publicly shared code for it, I'd like that to be listed
- Functionality for users to submit a code to be added to a location 
- Automatically detect nearby locations by user's location, without manually entering it
- Feature for user to manually submit a toilet location
- Feature for users to post a note to a location, e.g. "closed for constructio", "always out of toilet paper"
