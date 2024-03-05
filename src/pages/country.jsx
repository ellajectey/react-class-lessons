
import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import countries from '../pages/countriespage';


function Countrypage() {
    return (
        <>
             <Navbar/>
             <h1>this is the country page of Ghana</h1>
             <About/>
        </>
    
    );
}

export default Countrypage;