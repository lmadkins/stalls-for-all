## User Stories
- I want to be able to quickly enter my location and look up public restroom options near me, sorted by nearest options
- I want to know whether it meets certain criteria (All-Gender, ADA accessible, has changing tables)
- I want to know how to get there
- I want to know what type of establishment it is, its location, and whether it is open
- I want to know whether you must be a paying customer, if that information is available for it


### MVP Goals
- A user enters their address or zipcode, gets results nearby (Input goes to a maps API, which returns coordinates, which are then used to get data from the Refuge API)
- Results listings sorted by nearest options, and show any critical information available (name of building, address, unisex, accessible, changing table) 
- Sorted by nearest
- Show link to google maps to take user to directions to the place
- Mobile-first, responsive, minimalistic design
- Uses accesibility practices, gender-inclusive language

### Stretch Goals
- Error handling

- Include IP locator option and allow users to choose between automaticlly locating them, or manually entering
- Filter results by ADA/Gender Neutral/Changing tables true/false
- More results by also importing restroom locations from Googles place search for 'toilet' (or other optimal search queries, TBD with research)
- More details about locaiton from APIs e.g. if any age restrictions or access details are available, accessibility, etc.
- View whether the place is open or not and the hours
- Filter results for only open places
- If there's been a publicly shared code for it, I'd like that to be listed
- Feature for user to manually submit a toilet location
- Feature for users to post a note to a location, e.g. "closed for construction", "always out of toilet paper"
