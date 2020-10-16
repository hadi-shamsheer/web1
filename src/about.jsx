import React from 'react'
import Web from './images/svg10.svg';
import Common from './common.jsx';

const About=()=>{
    return(
        <Common page="Welcome to About Page" imgsrc={Web} buttonname="Contacts Us!" visit="/contacts"/>
    )
  }
  export default About;