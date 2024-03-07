import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import Aboutpage from './pages/aboutpage';
import React from 'react';
import Countriespage from './pages/countriespage';
import Country from './pages/country';


function App() {
  return (
    <div className="App">
    <BrowserRouter>

            <Routes>

              <Route path="/" element={<Homepage/>}> </Route>
              <Route path="/about" element={<Aboutpage/>}> </Route>
              <Route path="/countries" element={<Countriespage/>}> </Route>
              <Route path= "/country/:countryName" element={<Country/>}> </Route>
            </Routes>

    </BrowserRouter>

    </div>
    // <>
    //  <Homepage/>
    // </>
  )
};

export default App;
