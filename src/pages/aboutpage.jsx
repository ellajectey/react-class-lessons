import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';


function Aboutpage() {
    return (
        <>
             <Navbar/>
             <h1>This is the about page</h1>
             <About/>
        </>
    );
}

export default Aboutpage;