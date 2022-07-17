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


function App() {
  const [results, setResults] = useState([])
  const [searchStringState, setSearchStringState] = useState('')
const [lastSearch, setLastSearch] = useState('')

const testData = {
  testLat: '45.5229783',
  testLong: '-122.6811032'
}
const url= `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${testData.testLat}&lng=${testData.testLong}`

useEffect(() => {
  getResults(searchStringState)
}, [])

  const getResults = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setResults(response.data);
      // console.log(response.data.name)
    })
    .catch(console.error);
    console.log('running getResults')
   
  }

  const handleChange = (event) => {
      // console.log(event.target.value)
    setSearchStringState(event.target.value)
    setSearchStringState(testData)
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
        <SearchPage />
        <ResultsPage 
        results={results}
        data={data}/>
      </main>
    </div>
  );
}

export default App;
