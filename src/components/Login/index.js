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
  const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);
  const navigate = useNavigate();

  const goToSignup = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const handleSubmit = () => {
    const apiUrl = 'https://fitness-server-wwif.onrender.com/user/signin';
    const postData = {
      email: email,
      password: password,
      Role:  "USER",
    };

    axios.post(apiUrl, postData)
      .then(response => {
        if (response?.data?.Status === 200) {
          console.log('Response:', response);
        
          localStorage.setItem("token", response.data.Data.Token);
          window.location.reload();
        } else {
          alert(response?.data?.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const access_token = queryParams.get('access_token');
    localStorage.setItem("token", access_token);
    if (localStorage.getItem('token') !== "null" && localStorage.getItem('token') !== null) {
      reloader();
    }
  }, []);

  const reloader = () => {
    window.location.reload();
  };

  const toggleAdminLoginForm = () => {
    setShowAdminLoginForm(!showAdminLoginForm);
  };

  return (
   <Wrapper>
  <Container>
    {showAdminLoginForm? <div className='text-end mt-2'>
      <button className='btn ' onClick={toggleAdminLoginForm} type='button'>
        Login as User
      </button>
    </div>: <div className='text-end mt-2'>
      <button className='btn ' onClick={toggleAdminLoginForm} type='button'>
        Login as Admin
      </button>
    </div>

    }
    <Header>Login</Header>
    <Body>
      {showAdminLoginForm ? (
          <Admin/>
      ) : (
         <>
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
         <Info>
        Don't have an account?{' '}
        <RegisterBtn onClick={goToSignup} type='button'>
          Sign Up
        </RegisterBtn>
      </Info>
       <div className='text-end mt-4'>
        <Link to={"/forget_password"}>
          <p style={{ fontSize: "10px", display: "inline", background: "#FAF6F0", cursor: "pointer" }} className='p-1 rounded '>Forgot Password</p>
        </Link>
      </div>
         </>
      )}
      
    </Body>
    <Footer>
      
    </Footer>
  </Container>
</Wrapper>

  );
};


function Admin(){
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);
  const navigate = useNavigate();

  const goToSignup = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const handleSubmit = () => {
    const apiUrl = 'https://fitness-server-wwif.onrender.com/admin/signin';
    const postData = {
      email: email,
      password: password,
      Role:"ADMIN"  
    };

    axios.post(apiUrl, postData)
      .then(response => {
        if (response?.data?.Status === 200) {
          console.log('Response:', response);
     
          localStorage.setItem("token", response.data.Data.Token);
          localStorage.setItem("role",response?.data?.Data?.Role)
         window.location.reload();
            
        } else {
          alert(response?.data?.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const access_token = queryParams.get('access_token');
    localStorage.setItem("token", access_token);
    if (localStorage.getItem('token') !== "null" && localStorage.getItem('token') !== null) {
      reloader();
        
    }
  }, []);

  const reloader = () => {
    window.location.reload();
  };

  const toggleAdminLoginForm = () => {
    setShowAdminLoginForm(!showAdminLoginForm);
  };
  return(
    <>
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
         {/* <div className='text-end mt-4'>
        <Link to={"/forget_password"}>
          <p style={{ fontSize: "10px", display: "inline", background: "#FAF6F0", cursor: "pointer" }} className='p-1 rounded '>Forgot Password</p>
        </Link>
      </div> */}
    </>
  )
}

export default Login;
