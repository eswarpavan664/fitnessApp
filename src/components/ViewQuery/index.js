import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./style.css"
import { Link, useParams } from 'react-router-dom';


function ViewQuery() {

  const [data, setData] = useState(null)
  const { uuid } = useParams()

  useEffect(() => {
    try {

      const apiUrl = `https://fitness-server-wwif.onrender.com/admin/queries/${uuid}`;

      axios.get(apiUrl)
        .then(response => {
          // console.log('Response:', response.data);
          setData(response?.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      let apiurl_one = `https://fitness-server-wwif.onrender.com/admin/query/markasread/${uuid}`
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
        <div className='d-flex justify-content-between mx-5'>
          <Link to="/queries">
            <button className='btn btn-primary'>Back</button>
          </Link>
          <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModal">
            Reply
          </button>


        </div>
        <div className='mt-5 ps-5 py-3' style={{ borderLeft: "3px solid gray" }}>
          <h1 className='fw-bold'>{data?.[0]?.query?.subject}</h1>
          <p className='mt-4' style={{ fontSize: "14px", textJustify:"auto" }}>{data?.[0]?.query?.message}</p>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-muted" id="exampleModalLabel">Reply to <span className='text-dark'>{data?.[0]?.email}</span></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className='row'>
                <div className='col-12'>
                <input className='w-100' placeholder='Subject'/>
                </div>
                <div className='col-12 mt-3 '>
                <textarea className='w-100' rows={30} placeholder='message...'></textarea>
                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ViewQuery