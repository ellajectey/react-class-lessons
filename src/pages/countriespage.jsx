import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Countriespage() {
  const url = "https://restcountries.com/v3.1/all";
  console.log(url);

  const [country, setCountry] = useState([]);

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
  useEffect(() => {
    async function displayAllCountries() {
      try {
        const countries = await axios.get(url);
        console.log("countries", countries.data);
        const countriesBox = countries.data;
        setCountry(countriesBox);
      } catch (error) {
        console.log("error", error);
      }

      //  const slicedData =countriesBox.slice(0,5)
      //  console.log('yeaaa',slicedData)
      //  const mappedData = slicedData.map((mappedData) =>{
      //  console.log ('map',mappedData.name.common)
      //  })

      //   const response = countries.json()
      // let fiveItems = countriesBox.slice(0,5).map((item)=> {
      //     console.log('yeaaa',item)
      //     })
      //   countriesBox.push(response)
    }

    displayAllCountries();
  }, []);

  console.log("country", country);

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

  return (
    <>
      {/* whatever goes in the fragment is supposed to be html */}
      <Navbar />
      <h1>This is the countries page</h1>
      <div className="outer-div">
        {country.slice(0, 10).map((item) => (
          <div className="inner-div">
            <img
              className="flag-img"
              src={item.flags.png}
              alt={item.flags.alt}
            />
            <h3>{item.name.common}</h3>
            <h5>{item.name.official}</h5>
            <Link to={`/country/${item.name.common}`}>
              <button className="countryButton">View</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Countriespage;
