import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import { useEffect, useState } from 'react'

//components
// import AboutPage from './pages/AboutPage';
// import ResultCard from './components/ResultCard';
import ResultsPage from './pages/ResultsPage';
// import SearchForm from './components/SearchForm';
import SearchPage from './pages/SearchPage';
// import SearchPage from './pages/SearchPage';

// what I was using as test parameters to make a requestto the api (see const url)
const testData = {
  testLat: '45.5229783',
  testLong: '-122.6811032'
}

function App() {

  const [results, setResults] = useState([])
  const [lastSearch, setLastSearch] = useState('')
  const [searchStringState, setSearchStringState] = useState('')
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   getResults(searchStringState)
  // }, [])

  // see above, const testData
  // const url= 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=45.5229783&lng=-122.6811032'
  // const url ='https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=45.5229783&lng=-122.6811032'



  //   const getResults = (url) => {
  //   fetch(url)
  //   .then((res) => {
  //     if (res.status === 404) {
  //       return setError(true);
  //     }
  //     return res.json()})
  //   .then(res => {
  //     setResults(data);
  //     // console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchStringState(event.target.value)
  // setSearchStringState(testData)
  }
  
  const handleSubmit = (event) => {
  event.preventDefault()
  console.log(searchStringState)
  // ^ is what typed into form 
  // getResults(searchStringState)
  }

  return (
    <div>
      <header>
      </header>
      <main>
        <SearchPage 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          // setSearchStringState={setSearchStringState}
          // searchString={searchStringState}
           />
        <ResultsPage 
          lastSearch={lastSearch}
          results={results}
          data={data}
        />
      </main>
    </div>
  );

}
export default App;
