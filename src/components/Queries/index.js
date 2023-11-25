import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./style.css"
import { Link } from 'react-router-dom';
function Queries() {

  const [data, setData] = useState(null)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(()=>{
    try{

      const apiUrl = `https://fitness-server-wwif.onrender.com/admin/queries`;

      const apiParams = {};
      if (startDate) apiParams.startDate = startDate;
      if (endDate) apiParams.endDate = endDate;

      axios.get(apiUrl, { params: apiParams })
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
  }, [startDate, endDate] )

  const handleDelete = (query_id) => {
    try{

      const apiUrl = `https://fitness-server-wwif.onrender.com/admin/query/delete/${query_id}`;

      axios.delete(apiUrl)
        .then(response => {
         
          window.location.reload()
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }catch(error){
      console.log("Error while getting the user")
    }
  }

  const handleDeleteAllQueries = () => {
    try{

      const apiUrl = `https://fitness-server-wwif.onrender.com/admin/query/clear_all`;

      axios.delete(apiUrl)
        .then(response => {
          
          window.location.reload()
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }catch(error){
      console.log("Error while getting the user")
    }
  }

  const handleReadAll = () =>{
    try{

      const apiUrl = `https://fitness-server-wwif.onrender.com/admin/query/markasreadalll`;

      axios.get(apiUrl)
        .then(response => {
          
          window.location.reload()
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }catch(error){
      console.log("Error while getting the user")
    }
  }


  console.log(data)
  return (
    <div className='p-4'>
      <div className="table-container">
          
          <div>

            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div className='' style={{display:"flex", justifyContent:"space-evenly"}}>
                <div className='' style={{display:"flex", flexDirection:"column"}}>
                  <label>From date</label>
                  <input type='date' style={{margin:"0 15px"}} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className='' style={{display:"flex", flexDirection:"column"}}>
                  <label>To date</label>
                  <input type='date' style={{margin:"0 15px"}}  value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>

              </div>
              <div style={{display:"flex", justifyContent:"space-evenly", gap:"15px"}}>
                  <button className='btn btn-primary' onClick={()=>handleReadAll()}>Read all</button>
                  <button className='btn btn-danger' onClick={()=>handleDeleteAllQueries()}>Clear all</button>
              </div>
            </div>

            <div className='mt-5'>
              {data?.map((item)=>(
                
                <>
                {item?.query?.is_active && <div className='row align-items-center py-4 px-5 my-2  notification_record ' style={{borderLeft:"3px solid blue", background:item.query.is_read?"white":"rgba(173, 216, 230, 0.3)"}}>
                    <div className='col-10'>
                      <h4 className='fw-bold'>{item.query.subject}</h4>
                      <p className='m-0 p-0 text-truncate' style={{fontSize:"14px"}}>{item.query.message}</p>
                      <p className='m-0 p-0 mt-4' style={{fontStyle:"italic", fontFamily:"sans-serif"}}>{item?.query?.createdAt.substring(0,10)}</p>
                    </div>
                    <div className='col-2 d-flex justify-content-evenly'>
                    <Link to={`/queries/${item.query.id}`} className='w-100 me-1'>
                        <button className='btn btn-primary w-100'>View</button>
                      </Link>
                      <button className='btn btn-secondary w-100 ms-1' onClick={()=>handleDelete(item?.query?.id)}>Delete</button>
                      
                    </div>
                  </div> }
                  
                </>
              ))}
            </div>

          </div>
        
      </div>
    </div>
  )
}


export default Queries