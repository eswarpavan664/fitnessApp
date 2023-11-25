import React, { useState } from 'react'
import { FormField, Input } from './styles'
import axios from 'axios'
function ContactUs() {
    const [subject, setSubject] = useState(null)
    const [message, setMessage] = useState(null)


    const SendEmail = () => {

        if (subject && message) {
            //     const apiUrl = 'https://fitness-server-wwif.onrender.com/send_email';
            // const postData = {
            //     subject: subject,
            //     message:message
            // };

            // axios.post(apiUrl, postData)
            //     .then(response => {
            //         alert("your response was successfully sent...")
            //         setSubject("")
            //         setMessage("")
            //         console.log('Response:',  JSON.stringify(response));
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });

            const token = localStorage.getItem('token');
            const [header, payload, signature] = token.split('.');
            const decodedPayload = JSON.parse(atob(payload));

            const apiurl = "https://fitness-server-wwif.onrender.com/user/contact_us/create"
            const postData = {
                subject: subject,
                message: message,
                created_by: decodedPayload?.Id
            }
            axios.post(apiurl, postData)
            .then(response =>{
                alert("Your query have sent successfully")
                setSubject("")
                setMessage("")
                console.log("Query Response", response)
            })
            .catch(err=>{
                console.log("Error occured : ", err)
            })

        } else {
            alert("all are required fields...")
        }

    }


    return (
        <div className='p-4'>
            <div className='bg-light ' style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='w-50'>
                    <h2 className='mb-5 ms-2'>Contact Us</h2>
                    <div className=' mb-4' >
                        <FormField>
                            <label>Subject</label>
                            <Input
                                type='text'
                                placeholder='Subject'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </FormField>
                    </div>
                    <div className='' >
                        <FormField>
                            <label>Message</label>
                            <textarea
                                type='email'
                                placeholder='type your message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={10}
                            ></textarea>
                        </FormField>
                    </div>
                    <div className='text-end mt-5'>
                        <button className='btn btn-success px-4 py-2' style={{ fontSize: "16px" }} onClick={SendEmail}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs