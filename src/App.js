import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes, useSearchParams }  from 'react-router-dom';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className="App">
      <header>
        <h1>
          <Link to='/'>Stalls for All</Link>
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
