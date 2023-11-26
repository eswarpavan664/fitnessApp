import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./style.css"
import { Link, useParams } from 'react-router-dom';


function ViewQuery() {

  const [data, setData] = useState(null)
  const { uuid } = useParams()
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)

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

  const handleSendReply = () =>{
    try{

      let apiurl_one = `https://fitness-server-wwif.onrender.com/send_email`
      let post_data = {
        subject: subject,
        message: message,
        email: data?.[0]?.email
      }
      axios.post(apiurl_one, post_data)
        .then(response => {
          console.log('Response:', response.data);
          // setData(response?.data);
          window.location.reload()
        })
        .catch(error => {
          console.error('Error:', error);
        });


    }catch(err){
      console.log("Error while getting the user", err)
    }
  }



  console.log(data)
  return (
    <div className='p-4'>
      <div className="table-container">
        <div className='d-flex justify-content-between mx-5'>
          <Link to="/queries">
            <button className='btn btn-primary' style={{fontSize:"14px"}}>Back</button>
          </Link>
          <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModal" style={{fontSize:"14px"}} >
            Reply
          </button>
        </div>
        <div className='ps-5 my-5' style={{display:"block"}}>
          <div>
            <h4 style={{color:"gray", fontStyle:"italic", fontFamily:"sans-serif", letterSpacing:"1px"}}>{data?.[0]?.first_name + " "+ data?.[0]?.last_name}</h4>
            <h4 style={{color:"gray", fontStyle:"italic", fontFamily:"sans-serif", letterSpacing:"1px"}}>{data?.[0]?.email}</h4>
          </div>
        </div>
        <div className=' ps-5 py-3=' style={{ borderLeft: "3px solid gray" }}>
          <h1 className='fw-bold'>{data?.[0]?.query?.subject}</h1>
          <p className='mt-4' style={{ fontSize: "14px", textJustify:"auto" }}>{data?.[0]?.query?.message}</p>
        </div>
      </div>

     
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-muted" id="exampleModalLabel">Reply to <span className='text-primary'>{data?.[0]?.email}</span></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className='row'>
                <div className='col-12'>
                <input className='w-100 p-3 rounded' placeholder='Subject' onChange={(e)=>setSubject(e.target.value)} style={{fontWeight:"bold", fontSize:"14px", outline:"none", border:"1px solid gray"}} />
                </div>
                <div className='col-12 mt-3 '>
                <textarea className='w-100 rounded' rows={25} placeholder='message...' onChange={(e)=>setMessage(e.target.value)} style={{fontSize:"12px",  outline:"none", border:"1px solid gray"}}></textarea>
                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={()=>handleSendReply()}>Send reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ViewQuery