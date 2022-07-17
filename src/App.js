import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import data from './data.json'
import { useEffect, useState } from 'react'

//components
// import AboutPage from './pages/AboutPage';
// import ResultCard from './components/ResultCard';
// import ResultsPage from './pages/ResultsPage';
import SearchForm from './components/SearchForm';
import SearchPage from './pages/SearchPage';
// import SearchPage from './pages/SearchPage';

const url= `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=45.5229783&lng=-122.6811032`

function App() {
  const [resultsState, setResultsState] = useState([])
  const [searchStringState, setSearchStringState] = useState('')

useEffect(() => {
  getResults(searchStringState)
}, [])

  const getResults = (searchStringInput, url) => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setResultsState(res.data);
    })
    .catch(console.error);
   
  }

  const handleChange = (event) => {
        // console.log(event.target.value)
    setSearchStringState(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(searchStringState)
    // ^ is what typed into form 
    getResults(searchStringState)
  }



  return (
    <div>
      <header>
      </header>
      <main>
        <SearchPage />
        {/* <ResultsPage /> */}
      </main>
    </div>
  );
}

export default App;
