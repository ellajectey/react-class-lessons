import React from 'react';
import Navbar from '../components/navbar';

import axios from 'axios';


function Countriespage() {
    
    const url= 'https://restcountries.com/v3.1/all';
    console.log(url);

    // function displayCountries(){
    // let allCountries = fetch(url).then((response) => {

    //     console.log('country',response.json())
    
    // // })
    // // }

    // displayAllCountries()

    // async function displayAllCountries(){

    //     const countries = await fetch(url)
    //     console.log("countries", countries.json())
        
        
        
    // }

    // displayAllCountries()
    
//    the container
    // let countriesBox = []

    async function displayAllCountries(){

      const countries = await axios.get(url)
      console.log('countries',countries.data)

      
     const countriesBox = countries.data
     const slicedData =countriesBox.slice(0,5)
     console.log('yeaaa',slicedData)
     const mappedData = slicedData.map((mappedData) =>{
     
     console.log ('map',mappedData.name.common)
    
     })

    //   const response = countries.json()
    // let fiveItems = countriesBox.slice(0,5).map((item)=> {
    //     console.log('yeaaa',item)
    //     }) 
    //   countriesBox.push(response)
      return countries
      
    }
   
    displayAllCountries()




//    async function display5countries(){

//     const countries = await axios.get(url)

//      countriesBox= countries.data
//         let fiveItems = countriesBox.slice(0,4).map((item)=> {
//             console.log('yeaaa',item)
//             }) 

//     // console.log('countries',countriesBox)
//     }
//     display5countries()

    //         console.log ('country',response.json(Math.max(5)))
    //     })
        
    // // }
    //     showFive()
    
    return(
        <>
        {/* whatever goes in the fragment is supposed to be html */}
             <Navbar/>
             <h1>This is the countries page</h1>
            
             <ul>
    
            
             <li>
             
             </li>
             </ul>
             {/* <button style={"border-radius:8px"}></button> */}
             
 
        </>
            
    );

}

export default Countriespage;