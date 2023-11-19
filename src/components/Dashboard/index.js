import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import "./style.css"
import banner from "assets/dashboard_image.jpg"

const DashboardContainer = styled.div`
  display: flex;
`;

const Dashboard = () => {
  const [result, setResult] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');
    const [header, payload, signature] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    const apiUrl = `https://fitness-server-wwif.onrender.com/user/dashboard/${decodedPayload?.email}`;

    axios.get(apiUrl)
      .then(response => {
        console.log('Response:', response.data);
        setResult(response.data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  console.log(result)

  return (
   
      <div className='' style={{ height: "89vh", alignItems: "center", justifyContent: "center", background:"white", padding:"10px", margin:"10px" }}>
        <div  style={{backgroundImage:`url(${banner})`, height:"43vh", position:"relative"}}>
          <h1 style={{position:"absolute", bottom:20, fontSize:"3rem", left:30, fontWeight:"bold", color:"white", textShadow:"0 0 10px black"}}>DASHBOARD</h1>
        </div>
        <div className='row align-items-center mt-5'>
          <div className='col-4 px-5'>
            <div className='border d-flex justify-content-between align-items-center w-100 p-5 dash_box' style={{ background: 'linear-gradient(to right, #9BBEC8 85%, #427D9D 50%)' }} >
              <h4 className='m-0 p-0'>Total Sleep Time (mins)</h4>
              <p className='m-0 p-0 text-light'>{result?.totalSleepTime || ""}</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='border d-flex justify-content-between align-items-center w-100 p-5 dash_box' style={{ background: 'linear-gradient(to right, #9BBEC8 85%, #427D9D 50%)' }} >
              <h4 className='m-0 p-0'>Water intake (ltrs)</h4>
              <p className='m-0 p-0 text-light'>{result?.totalWaterIntake || ""}</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='border d-flex justify-content-between align-items-center w-100 p-5 dash_box' style={{ background: 'linear-gradient(to right, #9BBEC8 85%, #427D9D 50%)' }} >
              <h4 className='m-0 p-0'>Total seps</h4>
              <p className='m-0 p-0 text-light'>{result?.totalSteps || ""}</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Dashboard;
