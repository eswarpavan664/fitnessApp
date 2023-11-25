import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./style.css"
import { Link, useParams } from 'react-router-dom';


function ViewQuery() {

  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    try {

      const apiUrl = `https://fitness-server-wwif.onrender.com/admin/queries/${id}`;

      axios.get(apiUrl)
        .then(response => {
          // console.log('Response:', response.data);
          setData(response?.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      let apiurl_one = `https://fitness-server-wwif.onrender.com/admin/query/markasread/${id}`
      axios.get(apiurl_one)
      .then(response => {
        console.log('Response:', response.data);
        // setData(response?.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


    } catch (error) {
      console.log("Error while getting the user")
    }
  }, [])

  

  console.log(data)
  return (
    <div className='p-4'>
      <div className="table-container">
        <div className=''>
          <Link to="/queries">
            <button className='btn btn-primary'>Back</button>
          </Link>
        </div>
        {id}
      </div>
    </div>
  )
}


export default ViewQuery