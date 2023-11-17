import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactContainer from 'react-bootstrap/Container';
import ReactNav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Components
import Login from 'components/Login';
import Signup from 'components/Signup';
import Dashboard from 'components/Dashboard';
import Profile from 'components/Profile';
import GoalSetting from 'components/GoalSetting';
import Workouts from 'components/Workouts';
import Registration from 'components/Registration';
import sport from "assets/sport.png"
import { useLocation } from 'react-router-dom';

import {
  Header,
  Wrapper,
  LeftSide,
  RightSide,
  Container,
  Nav,
  ListItem,
  UndorderList,
  FormField,
  Input
} from './styles';
import { logout } from 'slices/authSlice';
import Admin from 'components/Admin';
import nutrition from "assets/Nutrition.png"
import Nutrition from 'components/Nutition';
import Tracking from "assets/tracking.png"
import { useEffect } from 'react';

const NotFound = () => <h2>404 - Page not found</h2>;

const App = () => {

  const [isNutirtion, setNutrition] = useState(false)
  const [isTracking, setTracking] = useState(false)
  const [subject, setSubject] = useState(null)
  const [msg, setMsg] = useState(null)

  let token = false
  if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null && localStorage.getItem("token") != "undefined" && localStorage.getItem("token") != "null") {
    token = true
  }
  const username = useSelector(
    (state) => state.auth.user && state.auth.user.firstName
  );



  return (
    <Router>
      <Wrapper>
        <Container style={{ background: !token ? "gray" : "" }}>
          <LeftSide style={{ display: !token ? "none" : "" }}>
            <Nav>
              <img
                className='logo-abbr'
                src='data:image/png;base64,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'
                alt=''
              ></img>
              <UndorderList>
                <ListItem>
                  <NavLink to='/profile' title='Profile'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='2rem'
                      viewBox='0 0 448 512'
                      fill='#808080'
                      onClick={() => {
                        setNutrition(false)
                        setTracking(false)
                      }}
                    >
                      <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
                    </svg>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to='/workouts' title='Workouts'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1.8rem'
                      viewBox='0 0 640 512'
                      fill='#808080'
                      onClick={() => {
                        setNutrition(false)
                        setTracking(false)
                      }}
                    >
                      <path d='M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z' />
                    </svg>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to='/nutrition' title='Nutrition'>
                    <img src={nutrition} width={"25"} style={{ filter: !isNutirtion ? 'grayscale(100%)' : "" }} onClick={() => {
                      setNutrition(true)
                      setTracking(false)
                    }} />
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to='/track-your-page' title='Track Your progress'>
                    <img src={Tracking} onClick={() => {
                      setNutrition(false)
                      setTracking(true)
                    }} width={"25"} style={{ filter: !isTracking ? 'grayscale(100%)' : "" }} />
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to='/dashboard' title='Dashboard'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='2rem'
                      viewBox='0 0 512 512'
                      fill='#808080'
                      onClick={() => {
                        setNutrition(false)
                        setTracking(false)
                      }}
                    >
                      <path d='M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z' />
                    </svg>
                  </NavLink>
                </ListItem>


                <ListItem>
                  <NavLink to='/events' fill='#6cc51d' title='Events'>

                    <img src={sport} width={"25"} onClick={() => {
                      setNutrition(false)
                      setTracking(false)
                    }} />
                  </NavLink>
                </ListItem>
              </UndorderList>
            </Nav>
          </LeftSide>
          <RightSide>
            <Navbar expand='lg' className='bg-body-tertiary'>
              <ReactContainer>
                <Navbar.Brand href='#home' id='brand'>
                  Fitness45
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <ReactNav className='me-auto'>
                    <NavLink to='/dashboard' title='Dashboard'>
                      Dashboard
                    </NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink to='/track-your-page'>Goal Setting</NavLink>
                    <NavLink to='/workouts'>Workouts</NavLink>
                    <NavLink to='/registration'>Registration</NavLink>
                  </ReactNav>
                </Navbar.Collapse>
              </ReactContainer>
            </Navbar>

            {token && (
              <Header style={{ padding: "10px 10px 10px 0" }}>
                <button type="button" class="btn btn-info me-5 text-dark" data-toggle="modal" data-target="#exampleModal">
                  Contact Us
                </button>

                <button
                  className='btn btn-danger'
                  style={{ padding: "10px", background: "red", color: "white" }}
                  type='button'
                  onClick={() => {
                    localStorage.clear()
                    window.location.reload()
                  }}
                >
                  Logout
                </button>
              </Header>
            )}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Request query</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <FormField>
                      <label>Subject:</label>
                      <Input
                        type='text'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </FormField>
                    <FormField>
                      <label>Subject:</label>
                      <textarea
                        type='text'
                        placeholder=''
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        rows={12}
                      ></textarea>
                    </FormField>
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <Routes>

              {token ? (
                <>
                  <Route path='/' element={<Navigate to='/profile' />} />
                  <Route path='/profile' exact element={<Profile />} />
                  <Route path='/track-your-page' exact element={<GoalSetting />} />
                  <Route path='/workouts' exact element={<Workouts />} />
                  <Route path='/nutrition' exact element={<Nutrition />} />
                  <Route path='/dashboard' exact element={<Dashboard />} />
                  <Route
                    path='/events'
                    exact
                    element={<Registration />}
                  />
                  <Route path='/admin' exact element={<Admin />} />
                  <Route path='*' element={<Navigate to='/profile' />} />

                </>
              ) : (
                <>
                  <Route path='*' element={<Navigate to='/login' />} />
                  <Route path='/login' element={<Login />} />{' '}
                  <Route path='/signup' element={<Signup />} />{' '}
                </>
              )}
            </Routes>
          </RightSide>
        </Container>
      </Wrapper>
    </Router>
  );
};

export default App;
