import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, updateUser, fetchAllUsers } from 'slices/userSlice';
import {
  Wrapper,
  Form,
  Container,
  SubmitButton,
  Body,
  Header,
  Left,
  Right,
  Input,
  Details,
  AboutMe,
  SelfDetails,
  Picture,
  BmiGuage,
  FormField,
  Tetarea
} from './styles';
import "./style.css"
import axios from 'axios';

const Profile = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('male');
  const [diet, setDiet] = useState('lowfat');
  const [bmi, setBmi] = useState(null);
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [toggle, setToggle] = useState(true)
  const [data, setData] = useState(null)
  const [asia, setAsia] = useState(true)
  const [calories, setCalories] = useState(null)

  const calculateBmi = useCallback(() => {

    if (weight && height) {
      const weightMultiplier = asia ? 0.453592 : 1; // 1 lb = 0.453592 kg
      const heightMultiplier = asia ? 0.3048 : 0.01; // 1 ft = 0.3048 meters, 1 cm = 0.01 meters
      
      const weightInKg = weight * weightMultiplier;
      const heightInMeters = height * heightMultiplier;

      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }else {
      setBmi(null);
    }
  }, [height, weight]);

  const calculateBmr = () =>{
    let bmr;

    if (gender === 'female') {
      bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    } else {
      bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    }

    switch (diet) {
      case 'sedentary':
        setCalories(bmr * 1.2);
        break;
      case 'lightlyActive':
        setCalories(bmr * 1.375);
        break;
      case 'moderatelyActive':
        setCalories(bmr * 1.55);
        break;
      case 'veryActive':
        setCalories(bmr * 1.725);
        break;
      case 'extraActive':
        setCalories(bmr * 1.9);
        break;
      default:
        setCalories(null);
        break;
    }

  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const [header, payload, signature] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      const apiUrl = `http://localhost:5000/user/get_user/${decodedPayload?.Id}`;
      
      axios.get(apiUrl)
        .then(response => {
          // console.log('Response:', response.data);
          setData(response?.data?.Data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);

  const updateUserDetails = (e) =>{
    const apiUrl = `http://localhost:5000/user/update_user/${data?.Id}`;
    const postData = {
      FirstName: firstName || data?.first_name,
      LastName: lastName || data?.last_name,
      Country: country || data?.country,
      City: city || data?.city,
      email: email || data?.email,
      Gender: gender || data?.gender
    };
    console.log(postData)
    axios.put(apiUrl, postData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      window.location.reload()
  }

  console.log(data)

  return (
    <Wrapper>
      <SelfDetails>
        <Header>Profile Page</Header>
        <Picture></Picture>
        <AboutMe>Welcome to TrainRight - Your Path to a Healthier You!</AboutMe>
        <Details>
          We're excited to have you on board and embark on this fitness journey together. Whether you're a seasoned fitness enthusiast or just starting out, our app is designed to help you achieve your wellness goals. Get ready to sweat, smile, and thrive with our user-friendly features, personalized workouts, and a supportive community. Let's make every step, rep, and choice count towards a healthier and happier you.
          <br />
          Let's get started!
        </Details>

        <div className=' mb-5'>
          <form>
            <div className='row border py-3 rounded'>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 >Your Details</h4>
                {
                  toggle ?
                    <button style={{ background: "lightblue", padding: "5px 20px", border: "none", borderRadius: "10px", fontSize: "16px", boxShadow: "0 0 5px lightgray", color: "gray" }} onClick={()=>setToggle(!toggle)}>Edit</button>:
                    <div>
                      <button style={{ background: "orange", padding: "5px 20px", border: "none", borderRadius: "10px", fontSize: "16px", boxShadow: "0 0 5px lightgray", color: "white", margin:"0 10px" }} onClick={()=>setToggle(!toggle)} >Cancel</button>
                      <button style={{ background: "lightgreen", padding: "5px 20px", border: "none", borderRadius: "10px", fontSize: "16px", boxShadow: "0 0 5px lightgray", color: "gray" }} onClick={(e)=>{
                        e.preventDefault()
                        updateUserDetails()
                      }} >Save</button>
                    </div>
                }
              </div>
              <div className='col-4'>
                {
                  toggle ? 
                  <div>
                    <label>First Name</label>
                    <h2>{data?.FirstName}</h2>
                  </div>
                  :<FormField>
                  <label>First Name:</label>
                  <Input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormField>
                }
              </div>
              <div className='col-4'>

                {toggle?
                <div>
                <label>Last Name</label>
                <h2>{data?.LastName}</h2>
              </div>
                :
                <FormField>
                  <label>Last Name:</label>
                  <Input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormField>
                }
                
              </div>
              <div className='col-4'>
              {toggle?
                <div>
                <label>Email</label>
                <h2>{data?.email}</h2>
              </div>
                :
                <FormField>
                  <label>Email:</label>
                  <Input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormField>
                }
                
              </div>
              <div className='col-4'>
              {toggle?
                <div>
                <label>Gender</label>
                <h2>{data?.Gender}</h2>
              </div>
                :
                <FormField>
                  <label>Gender:</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </FormField>
                }
                
              </div>
              <div className='col-4'>
              {toggle?
                <div>
                <label>Country</label>
                <h2>{data?.Country}</h2>
              </div>
                :
                <FormField>
                  <label>Country</label>
                  <Input
                    type='text'
                    placeholder='Country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </FormField>
                }
                
              </div>
              <div className='col-4'>
              {toggle?
                <div>
                <label>City</label>
                <h2>{data?.City}</h2>
              </div>
                :
                <FormField>
                  <label>City</label>
                  <Input
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormField>
                }
                
              </div>
            </div>
          </form>



          <div className='row align-items-center border my-5 rounded py-3'>
            <h4 className='ms-2'>Let's calculate your BMI</h4>
            <div className='col-md-4' >
              <div className=' d-block p-3 border ms-3 rounded' style={{ width: "50%" }}>
                <div className='d-flex  justify-content-evenly align-items-center'>
                  <h4 className='m-0 p-0'>Asia</h4>
                  <label class="switch">
                    <input type="checkbox" onChange={()=>{
                      setAsia(!asia)
                    }} />
                    <span class="slider round"></span>
                  </label>
                  <h4 className='m-0 p-0'>Americe</h4>
                </div>
              </div>
              <form>
                <div className='row'>
                  <div className='col-md-6'>
                    {asia ? <FormField>
                      <label>Height (feet):</label>
                      <Input
                        type='number'
                        placeholder='Height'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </FormField>:<FormField>
                      <label>Height (centimeters):</label>
                      <Input
                        type='number'
                        placeholder='Height'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </FormField>}
                  </div>
                  <div className='col-md-6'>
                    {asia ? <FormField>
                      <label>Weight (In LB):</label>

                      <Input
                        type='number'
                        placeholder='Weight'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </FormField>:<FormField>
                      <label>Weight (Kilograms):</label>

                      <Input
                        type='number'
                        placeholder='Weight'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </FormField>}
                  </div>
                  <div className='col-md-6'>
                    <FormField>
                      <label>Age:</label>

                      <Input
                        type='number'
                        placeholder='Age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </FormField>
                  </div>
                  <div className='col-md-6'>
                    <FormField>
                      <label>Activity</label>
                      <select
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                      >
                        <option value='sedentary'> Sedentary </option>
                        <option value='light_exercise'>Light exercise</option>
                        <option value='moderate_exercise'>Moderate exercise</option>
                        <option value='rigorous_exercise'>Rigorous exercise</option>
                      </select>
                    </FormField>

                  </div>
                  <div className='col-12 text-center'>
                    <SubmitButton type='submit' onClick={(e)=>{
                      e.preventDefault()
                      calculateBmi()
                    }}>Submit</SubmitButton>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-3'>
              <BmiGuage>
                {bmi && (
                  <div className='text-center'>

                    <svg width='200' height='200'>
                      <circle
                        cx='100'
                        cy='100'
                        r='90'
                        stroke='#ccc'
                        strokeWidth='20'
                        fill='none'
                      />
                      <circle
                        cx='100'
                        cy='100'
                        r='90'
                        stroke='#ff5722'
                        strokeWidth='20'
                        fill='none'
                        strokeDasharray={`${bmi * 9.42}, 565.48`}
                        transform='rotate(-90, 100, 100)'
                      />
                      <text x='100' y='110' textAnchor='middle' fontSize='24'>
                        {bmi}
                      </text>
                    </svg>
                    <h4 className='text-center m-0 p-0'>Your BMI: {bmi}</h4>
                  </div>
                )}
              </BmiGuage>
            </div>
            <div className='col-md-5 px-5'>
              {bmi &&
                <from>
                  <div className='row align-items-center'>
                    <div className='col-md-12'>
                      <FormField>
                        <label>Activity</label>
                        <select
                          value={diet}
                          onChange={(e) => setDiet(e.target.value)}
                        >
                          <option value='lose_weight'> Lose Weight </option>
                          <option value='gain_weight'> Gain Weight </option>
                          <option value='maintain'> Maintain </option>

                        </select>
                      </FormField>
                    </div>
                    <div className='col-md-12'>
                      <FormField>
                        <label>Target weight:</label>
                        <Input
                          type='number'
                          placeholder='Target weight'
                          value={""}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </FormField>
                    </div>
                    <div className='col-md-12'>
                      <FormField>
                        <label>In weeks:</label>
                        <Input
                          type='number'
                          placeholder='In weeks:'
                          value={""}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </FormField>
                    </div>
                    <div className='col-md-12 text-center'>
                      <button className='btn btn-primary w-75 py-4'>Get cal</button>
                    </div>
                  </div>
                </from>
              }
            </div>
          </div>
        </div>


      </SelfDetails>
    </Wrapper>
  );
};

export default Profile;
