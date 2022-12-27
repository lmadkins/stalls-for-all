import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useSearchParams }  from 'react-router-dom';
import { useState } from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import Results from './components/Results';
import SearchContainer from './components/SearchContainer';
import { FilterContext } from './components/FilterContext'

function App() {
  let [searchParams, setSearchParams] = useSearchParams()

  const [onlyUnisex, setOnlyUnisex] = useState(false)
  const [onlyADA, setOnlyADA] = useState(false)

  return (
    <div className="app">
      
      <NavBar />

      <FilterContext.Provider 
        value={{onlyUnisex, setOnlyUnisex, onlyADA, setOnlyADA}}>
      <main>
        <Routes>
          <Route path='/about' 
          element={<About />}/>
          
          <Route path=''
            element={<SearchContainer 
            setSearchParams={setSearchParams}/>}/>

            <Route path='/results'
            element={<Results 
            searchParams={searchParams}/>}/>
        </Routes>
      </main>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
