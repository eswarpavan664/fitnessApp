import React, { useState } from 'react'
import { FormField, Input } from './styles'
function ContactUs() {
    const [subject, setSubject] = useState(null)
    const [message, setMessage] = useState(null)
    return (
        <div className='p-4'>
            <div className='bg-light ' style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='w-50'>
                    <h2 className='mb-5 ms-2'>Contact US</h2>
                    <div className=' mb-4' >
                        <FormField>
                            <label>Subject</label>
                            <Input
                                type='text'
                                placeholder='Last Name'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                style={{ width: "100%" }}
                            />
                        </FormField>
                    </div>
                    <div className='' >
                        <FormField>
                            <label>Message:</label>
                            <textarea
                                type='email'
                                placeholder='Email'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={10}
                            ></textarea>
                        </FormField>
                    </div>
                    <div className='text-end mt-5'>
                        <button className='btn btn-success px-4 py-2' style={{ fontSize: "16px" }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs