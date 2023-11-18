import React, { useState, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Error
} from './styles';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const goToSignup = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const handleSubmit = () => {

    const apiUrl = 'http://localhost:5000/user/signin';
    const postData = {
      email: email,
      password: password,
    };

    axios.post(apiUrl, postData)
      .then(response => {
        console.log('Response:', response.data.Data.Token);
        localStorage.setItem("token", response.data.Data.Token)
        window.location.reload()
      })
      .catch(error => {
        console.error('Error:', error);
      });

  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const access_token = queryParams.get('access_token');
    localStorage.setItem("token", access_token)
    if (localStorage.getItem('token') != "null" && localStorage.getItem('token') != null){
      reloader()
    }
  }, [])

  const reloader = () =>{
    window.location.reload()
  }

  return (
    <Wrapper>
      <Container>
        <Header>Login</Header>
        <Body>
          {/* {error && <Error>{error}</Error>} */}
          <Form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
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
            <SubmitButton type='submit'>Submit</SubmitButton>
          </Form>
          <div className='text-end mt-4'>
            <Link to={"/forget_password"}>
            <p style={{fontSize:"10px", display:"inline", background:"#FAF6F0", cursor:"pointer"}} className='p-1 rounded '>Forgot Password</p>
            </Link>
          </div>
        </Body>
        <Footer>
          <Info>
            Don't have an account?{' '}
            <RegisterBtn onClick={goToSignup} type='button'>
              Sign Up
            </RegisterBtn>
          </Info>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default Login;
