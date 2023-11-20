import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllUser() {

    const [Data,setData]=useState([])
    const GetUser=async()=>{
        const apiUrl = `https://fitness-server-wwif.onrender.com/user/get_users/list`;

        axios.get(apiUrl)
            .then(response => {
            console.log('Response:', response.data);
               setData(response?.data);
            })
            .catch(error => {
            console.error('Error:', error);
        });
    }

    useEffect(()=>{
            GetUser()
    },[])

  return (
        <>

            <div className="table-container">
          <table className="soft-ui-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>User Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              
              </tr>
            </thead>
            <tbody>
              {Data && Data.map((data, index) => (
                  <tr>
                <td>{index+1}</td>
                <td>{data?.FirstName} {data?.LastName}</td>
                <td>{data?.PhoneNumber || "-"}</td>
                <td>{data?.email}</td>
              
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        </>
  )
}

export default AllUser;