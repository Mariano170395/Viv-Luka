import React from 'react';
import Carrousel from '../components/Carrousel/Carrousel';
import Navbar from '../components/Navbar/Navbar'
import Servicios from '../components/Servicios/Servicios'
import Contactanos from '../components/Contactanos/Contactanos'
import Footer from '../components/Footer/Footer'
import Conocenos from "../components/Conocenos/Conocenos";



const Landing = () => {
  return (
    <div style={{backgroundColor:'DarkSeaGreen'}}>
    <Navbar/>
    <Carrousel/>
    <Servicios/>
    <Conocenos />
    <Contactanos/>
    <Footer/>
    </div>
  )
}



export default Landing;
