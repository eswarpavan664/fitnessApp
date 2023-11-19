import React, { useState } from 'react'
import { FormField, Input } from './styles'
import axios from 'axios'
function ForgetPassword() {
    const [email, setEmail] = useState(null)
    const [otp, setOtp] = useState(null)
    const [password, setPassword] = useState(null)
    const [con_password, setConPassword] = useState(null)
    const [email_flag, setEmailFlag] = useState(true)
    const [otp_flag, setOtpFlag] = useState(false)
    const [password_flag, setPasswordFlag] = useState(false)
    const [id,setid]=useState("")
    const handleSendOtp = () => {
        if (!email) {
            alert("Provide email")
        } else {

           
            

            const apiUrl = 'https://fitness-server-wwif.onrender.com/user/forgot_password';
            const postData = {
                email: email,
            };

            axios.post(apiUrl, postData)
                .then(response => {
                    if(response.data?.Status==200){
                          setOtpFlag(true)
                           setEmailFlag(false)
                          
                    // eslint-disable-next-line no-unused-expressions
                    }else{
                        alert(response.data?.message)
                    }
                    console.log('Response:',  JSON.stringify(response));
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
    const [token,settoken]=useState("")
    const handleVerifyOtp = () => {
        

        if (!otp) {
            alert("Provide email")
        } else {

         

            const apiUrl = 'https://fitness-server-wwif.onrender.com/user/verify_otp';
            const postData = {
                Otp: otp,
                email:email
            };

            axios.post(apiUrl, postData)
                .then(response => {
                        if(response?.data?.Status==200){
                             setPasswordFlag(true)
                                setOtpFlag(false)
                               setEmail("")
                               setid(response?.data?.Data?.Id)
                            
                               settoken(response.data.Data.Token)
                    // eslint-disable-next-line no-unused-expressions
                    }else{
                        alert(response.data?.message)
                    }

                    console.log('Response:', JSON.stringify(response));
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

   const handleUpdatePassword = () => {
    if (password && con_password && password === con_password) {
        const apiUrl = `https://fitness-server-wwif.onrender.com/user/update_user/${id}`;
        const postData = {
            password: password,
        };

        axios.put(apiUrl, postData)
            .then(response => {
                if (response.data?.Status === 200) {
                    localStorage.setItem("token", token);
                    window.location.reload();
                } else {
                    alert(response.data?.message);
                }

                console.log('Response:', JSON.stringify(response));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert("Password mismatched .... ");
    }
}


    return (
        <div className=''>
            <div className='bg-light ' style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className='w-50 '>
                    <h2 className='mb-5 ms-2'>Forget Password</h2>

                    {
                        email_flag && <div className='row align-items-center '>
                            <div className='col-10 m-0 p-0'>
                                <div className='' >
                                    <FormField>
                                        <Input
                                            type='text'
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ width: "100%" }}
                                            className='p-3'
                                        />
                                    </FormField>
                                </div>
                            </div>
                            <button className='col-2 btn btn-primary p-3' onClick={() => handleSendOtp()}>Send OTP</button>
                        </div>
                    }

                    {otp_flag && <div className='row align-items-center '>
                        <div className='col-10 m-0 p-0'>
                            <div className='' >
                                <FormField>
                                    <Input
                                        type='text'
                                        placeholder='OTP'
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        style={{ width: "100%" }}
                                        className='p-3'
                                    />
                                </FormField>
                            </div>
                        </div>
                        <button className='col-2 btn btn-primary p-3' onClick={() => handleVerifyOtp()}>Verify</button>
                    </div>}

                    {
                        password_flag && <div className='row align-items-center '>
                            <div className='col-12 m-0 p-0'>
                                <div className='' >
                                    <FormField>
                                        <Input
                                            type='text'
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ width: "100%" }}
                                            className='p-3'
                                        />
                                    </FormField>
                                </div>
                            </div>
                            <div className='col-12 m-0 p-0'>
                                <div className='' >
                                    <FormField>
                                        <Input
                                            type='text'
                                            placeholder='Confirm password'
                                            value={con_password}
                                            onChange={(e) => setConPassword(e.target.value)}
                                            style={{ width: "100%" }}
                                            className='p-3'
                                        />
                                    </FormField>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='text-center'>
                                    <button className=' btn btn-primary p-3' onClick={() => handleUpdatePassword()}>Update</button>
                                </div>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword