import React, { useEffect, useState } from 'react';
import bg from "assets/Events.jpg"
import site from "assets/EventsSite.png"
import "./style.css"
const Registration = () => {

  const redirectToWebsiteThree = () => {
    window.location.href = 'https://allevents.in/new%20york';
  };
  
  return (
    <div>
      <div className='container-fluid'>
        <div style={{height:"50vh", background:`url(${bg})`, backgroundPosition:"center"}}></div>
      </div>
      <p className='mx-5 mt-5'>Welcome to the Events page. Being connected to the society and participating in fitness programs within your city isn't just about breaking a sweat; it's about finding your tribe, sharing experiences, and staying motivated alongside like-minded individuals. Our platform is more than just a tool for workouts – it's a space where you can connect, engage, and grow with a community that shares your passion for health and fitness. Click the link provided below to check for fitness events in your location.</p>
      
      <div style={{textAlign:"center", display:"flex", justifyContent:"center"}} className='mb-5 '>

        <button onClick={redirectToWebsiteThree} style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#B4BDFF", border:"none", borderRadius:"15px", boxShadow:"0 0 15px #B4BDFF"}} className='py-4 px-5 btn_hover my-5'>
          <h3 style={{margin:"0 25px", fontSize:"24px"}}>Visit here</h3>
          <img src={site} className='img-fluid' width={"100"} style={{border:"2px solid black", borderRadius:"10px"}} />
        </button>

      </div>
    </div>
  );
};

export default Registration;
