import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import { useEffect, useState } from 'react'

//components
// import AboutPage from './pages/AboutPage';
import ResultCard from './components/ResultCard';
import ResultsPage from './pages/ResultsPage';
import SearchForm from './components/SearchForm';
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

  useEffect(() => {
    getResults(searchStringState)
  }, [])

  // see above, const testData
  const url= `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${testData.testLat}&lng=${testData.testLong}`

  const getResults = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setResults(response.data);
      console.log(response.data.name)
    })
    .catch(console.error);
  }

  return (
    <div>
      <header>
      </header>
      <main>
        <SearchPage 
        // handleChange={handleChange}
        // handleSubmit={handleSubmit}
          searchString={searchStringState} />
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
