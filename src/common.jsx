import React from 'react'
import {NavLink} from 'react-router-dom';
const Common=(props)=>{
    return(
        <section id="header" className="d-flex align-item-center">
        <div className='contaoner-fluid'>
            <div clasName='row'>
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-0 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.page}
                            <strong className="brand-name"><br/> Hadi Shamsheer</strong>
                            </h1>
                            <h2 className="my-3">I created this using react Js</h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started ">{props.buttonname}</NavLink>
                            </div>
                        </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} alt="my image" className=" img-fluid animated"></img>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </section>
    )
  }
  export default Common;