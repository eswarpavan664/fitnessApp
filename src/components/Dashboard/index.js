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
    const apiUrl = `http://localhost:5000/user/dashboard/${decodedPayload?.email}`;

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

    <div className='' style={{ height: "89vh", background: "white", padding: "10px", margin: "10px" }}>
      <div style={{ backgroundImage: `url(${banner})`, height: "43vh", position: "relative" }}>
        <h1 style={{ position: "absolute", bottom: 20, fontSize: "3rem", left: 30, fontWeight: "bold", color: "white", textShadow: "0 0 10px black" }}>DASHBOARD</h1>
      </div>

      <div className='mx-5 my-5' style={{ display: "flex", gap: "15px" }} >

        <div className='border p-5 rounded text-light' style={{ background: " linear-gradient(180deg, #afe8f9 0%, #6979FF 72.42%)", width: "260px" }}>
          <div className='my-4 p-2 pb-3' style={{ display: "inline", border: "2px solid white", borderRadius: "50%" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>
          </div>
          <div>
            <h2 className='my-4 text-light'>Water</h2>
            <h1 className='my-4 text-light'>{result?.totalWaterIntake || ""}</h1>
            <h2 className='my-4 text-light'>Liters</h2>
            <h2 className='mt-4 mb-0 text-light'>Idel water intake</h2>
          </div>
        </div>

        <div className='border p-5 rounded text-light' style={{ background: " linear-gradient(180deg, #afec9e 0%, #13d388 72.42%)", width: "260px" }}>
          <div className='my-4 p-2 pb-3' style={{ display: "inline", border: "2px solid white", borderRadius: "50%" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
          </div>
          <div>
            <h2 className='my-4 text-light'>Sleep</h2>
            <h1 className='my-4 text-light'>{result?.totalSleepTime || ""}</h1>
            <h2 className='my-4 text-light'>Minutes</h2>
            <h2 className='mt-4 mb-0 text-light'>Idel sleep</h2>
          </div>
        </div>

        <div className='border p-5 rounded text-light' style={{ background: " linear-gradient(180deg, #b873e8 0%, #735ac0 72.42%)", width: "260px" }}>
          <div className='my-4 p-2 pb-3' style={{ display: "inline", border: "2px solid white", borderRadius: "50%" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
          </div>
          <div>
            <h2 className='my-4 text-light'>Steps</h2>
            <h1 className='my-4 text-light'>{result?.totalSteps || ""}</h1>
            <h2 className='my-4 text-light'>Steps</h2>
            <h2 className='mt-4 mb-0 text-light'>Idel step activity</h2>
          </div>
        </div>

        <div className='border p-5 rounded text-light' style={{ background: " linear-gradient(180deg, #f8ae81 0%, #ef553d 72.42%)", width: "260px" }}>
          <div className='my-4 p-2 pb-3' style={{ display: "inline", border: "2px solid white", borderRadius: "50%" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            </svg>
          </div>
          <div>
            <h2 className='my-4 text-light'>Workouts</h2>
            <h1 className='my-4 text-light'>{result?.totalCount || ""}</h1>
            <h2 className='my-4 text-light'>Workouts</h2>
            <h2 className='mt-4 mb-0 text-light'>Idel workouts activity</h2>
          </div>
        </div>

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
