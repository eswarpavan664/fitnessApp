import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Form,
  Container,
  Info,
  RegisterBtn,
  SubmitButton,
  Body,
  Header,
  Footer,
  Input,
} from './styles';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [change, setChange] = useState(true)
  const navigate = useNavigate();



  const goToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);



  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert('Not matching password and confirm password');
    } else {
      const apiUrl = 'https://fitness-server-wwif.onrender.com/user/signup';
      const postData = {
        FirstName: firstName,
        LastName: lastName,
        email: email,
        password: password,
        Role:"USER"
      };

      axios.post(apiUrl, postData)
        .then(response => {
             
          console.log('Response:', response.data);
          setChange(false)
        })
        .catch(error => {
          console.error('Error:', error);
        });


      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <>
      {change ? <Wrapper>
        <Container>
          {/* {error && <Error>{error}</Error>} */}
          <Header>Register</Header>
          <Body>
            <Form onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}>
              <Input
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <SubmitButton type='submit'>Register</SubmitButton>
            </Form>
          </Body>
          <Footer>
            <Info>
              Already have an account?{' '}
              <RegisterBtn onClick={goToLogin} type='button'>
                Login
              </RegisterBtn>
            </Info>
          </Footer>
        </Container>
      </Wrapper> : <EmailPage />}
    </>

  );
};

function EmailPage() {
  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{textAlign:"center"}} className='border p-5 rounded'>
        <h1 className='m-0 p-0 text-light'>Mail has been sent you for the account activation</h1>
        <h1 className='m-0 p-0 text-light mt-5'>THANK YOU </h1>
      </div>
    </div>
  )
}

export default Signup;
