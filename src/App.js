import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import data from './data.json'
import { useState } from 'react'

//components
// import AboutPage from './pages/AboutPage';
// import ResultCard from './components/ResultCard';
// import ResultsPage from './pages/ResultsPage';
import SearchForm from './components/SearchForm';
// import SearchPage from './pages/SearchPage';


function App() {

  const [searchStringState, setSearchStringState] = useState('')

  const handleChange = (event) => {
        // console.log(event.target.value)
    setSearchStringState(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(searchStringState)
    // ^ is what typed into form 
  }



  return (
    <div>
      <header>
      </header>
      <main>
        <SearchForm />
      </main>
    </div>
  );
}

export default App;
