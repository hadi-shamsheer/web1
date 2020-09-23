import React, { useState } from 'react'

const Contacts=()=>{
    const[data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        orderspec:'',
    })
    const InputEvent = (event) =>{
        const {name,value}=event.target;
        setData((preVal)=>{
         return{
             ...preVal,
             [name]:value,
         }   
        })
    }
    const formSubmit =(e)=>{
        e.preventDefault()
        alert(`my name is ${data.fullname}. Mymobile number is ${data.phone}.my email is ${data.email} and my order is ${data.orderspec}`)
    }
    return(
        <>
        {console.log(data)}
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label For="exampleFormControlInput1">Full Name</label>
                                <input 
                                type="text"
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname} 
                                onChange={InputEvent}
                                placeholder="Type your name"/>
                            </div>
                            <div className="form-group">
                                <label For="exampleFormControlInput1">Phone Number</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone} 
                                onChange={InputEvent}
                                placeholder="Your Contact Number"/>
                            </div>
                            <div className="form-group">
                                <label For="exampleFormControlInput1">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                                <label For="exampleFormControlTextarea1">Your Order Specifications!</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                name="orderspec"
                                value={data.orderspec}
                                placeholder="Which type of website you want how much you will pay?other details and specs?"
                                onChange={InputEvent}>
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button 
                                className="button" 
                                type="submit">Confirm Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
  export default Contacts;