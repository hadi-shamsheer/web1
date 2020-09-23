import React from 'react';
import Home from './home';
import Services from './services';
import About from './about';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Contacts from './contacts';
import Navbar from './navbar'
import {Switch,Route,Redirect} from 'react-router-dom'
import Footer from './footer';
const App=()=>{
  return( 
  <>
    <Navbar />
    <Switch>
     
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/contacts' component={Contacts}/>
      <Footer/>
    </Switch>
  </>
  )
}
export default App;