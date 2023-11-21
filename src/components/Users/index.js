import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Users() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    try{

      const apiUrl = `https://fitness-server-wwif.onrender.com/user/get_all_users`;

      axios.get(apiUrl)
        .then(response => {
          // console.log('Response:', response.data);
          setData(response?.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }catch(error){
      console.log("Error while getting the user")
    }
  }, [])


  console.log(data)
  return (
    <div className='p-4'>
      <div className="table-container">
          <table className="soft-ui-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>City</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((track, index) => (
                <TrackTable key={index} track={track} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

function TrackTable({ track }) {
  return (
    <tr>
      <td>{track.FirstName || "-"}</td>
      <td>{track.LastName || "-"}</td>
      <td>{track.email || "-"}</td>
      <td>{track.Gender || "-"}</td>
      <td>{track.City || "-"}</td>
      <td>{track.Country || "-"}</td>
      <td></td>
    </tr>
  )
}

export default Users