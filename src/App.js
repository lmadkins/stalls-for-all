import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useSearchParams }  from 'react-router-dom';
import { useContext, useState } from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import Results from './components/Results';
import Search from './components/Search';
import { FilterContext } from './components/FilterContext'

function App() {
  let [searchParams, setSearchParams] = useSearchParams()

  const [onlyUnisex, setOnlyUnisex] = useState(false)
  const [onlyADA, setOnlyADA] = useState(false)

  return (
    <div className="App">
    
      <NavBar />
      <FilterContext.Provider 
        value={{onlyUnisex, setOnlyUnisex, onlyADA, setOnlyADA}}>
      <main>
        <Routes>
        <Route path='/about' element={<About />}/>
          <Route
            path=''
            element={<Search setSearchParams={setSearchParams}/>}
            />
            <Route
            path='/results'
            element={<Results searchParams={searchParams}/>}
            />
        </Routes>
        </main>
        </FilterContext.Provider>
    </div>
  );
}

export default App;
