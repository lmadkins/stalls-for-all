import './App.css';
import { Link, Route, Routes, useSearchParams }  from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';

function App() {

  let [searchParams, setSearchParams] = useSearchParams()
  return (

    <div className="App">
      <header>
        <h1>
          <Link to='/'>Stall</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Search setSearchParams={setSearchParams}/>}
            />
            <Route
            path='/results'
            element={<Results searchParams={searchParams}/>}
            />
        </Routes>
      </main>
    </div>
  );
}

export default App;
