
import React  from 'react';
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



function Countrypage() {


    const [country, setCountry] = useState(null);


    const Params = useParams()
    console.log('Params', Params)

    const url = `https://restcountries.com/v3.1/name/${Params.countryName}`;

    useEffect(() => {
        async function displayOneCountry() {
          try {
            const countries = await axios.get(url);
            console.log("countries", countries[0]);
            
            const countriesBox = countries.data;
            setCountry(countriesBox[0]);
          } catch (error) {
            console.log("error", error);
          }
    
          
          
        }
    
        displayOneCountry();
      }, [Params.countryName])

      if(!country){
        return <div>Loading...</div>
      }

      console.log('check country',country)

    return (
        <>
             <Navbar/>
             
             <div>
                <img src={country.flags.png} alt={country.name.alt}/>
                <h1>Welcome To {country.name.common} Page</h1>
                <h2>Continent : {country.continents} </h2>
                <h3>Subregion : {country.subregion} </h3>
                <h4>Currency : {country.currencies.name} </h4>
               <a href ={country.maps.googleMaps} alt={country.maps.alt}>Map Link</a>
                
             </div>
            
        </>
    
    );
}

export default Countrypage;