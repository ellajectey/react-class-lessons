import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';


function Countriespage() {
    
    const url= 'https://restcountries.com/v3.1/all';
    console.log(url);

    // function displayCountries(){
    // let allCountries = fetch(url).then((response) => {

    //     console.log('country',response.json())
    
    // })
    // }

    // displayCountries()

    async function displayAllCountries(){

        const countries = await fetch(url)
        console.log("countries", countries.json())
        
        
        
    }

    displayAllCountries()
    
    return(
        <>
        {/* whatever goes in the fragment is supposed to be html */}
             <Navbar/>
             <h1>This is the countries page</h1>
        </>
            
    );

}

export default Countriespage;