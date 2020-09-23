import React from 'react'
import {NavLink} from 'react-router-dom';
import Common from './common.jsx';
import Web from './images/svg1.svg';
const Home=()=>{
    return(
        <Common page="Welcome to Home Page" imgsrc={Web} buttonname="Get Started!" visit="/services"/>
    )
  }
  export default Home;