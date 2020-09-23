import React from 'react'
import Card from './card.jsx';
import Data from './cardprops.jsx';
const Services=()=>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
            <div className='contaoner-fluid'>
            <div clasName='row'>
                <div className="col-10 mx-auto">
                    <div className="row gy-2">
                        {Data.map((val,ind)=>{
                            return (
                            <Card
                            key={ind} 
                            imgsrc={val.imgsrc}
                            title={val.title}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
  }
  export default Services;