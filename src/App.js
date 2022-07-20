import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useSearchParams }  from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route
          path='/'
          element={<NavBar setSearchParams={setSearchParams}/>}
          /> */}
           <Route
          path='/about'
          element={<About setSearchParams={setSearchParams}/>}
          />
      </Routes>
      <main>
        <Routes>
        <Route path='/about' element={<About />}/>
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
