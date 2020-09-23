import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return(
<div className='contaoner-fluid nav-bg'>
   <div className='row'>
      <div className="col-10 mx-auto">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink exact className="navbar-brand" to="/">HadiShamsheer</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <NavLink activeClassName="menu-active" exact className="nav-NavLink" to="/">Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink activeClassName="menu-active" exact className="nav-NavLink" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink activeClassName="menu-active" exact className="nav-NavLink" to="/services">Service</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink activeClassName="menu-active" exact className="nav-NavLink" to="/contacts">Contact</NavLink>
                  </li>
               </ul>

            </div>
         </nav>
      </div>
   </div>
   </div>

    )
}
export default Navbar; 