import React from 'react'
import one from "assets/one.png"
import two from "assets/two.png"
import three from "assets/three.png"
import bg from "assets/nutition.jpg"
function Nutrition() {

const redirectToWebsiteOne = () => {
  window.open('https://www.eatingwell.com/article/291347/simple-30-day-weight-loss-meal-plan-1200-calories/', '_blank');
};

const redirectToWebsiteTwo = () => {
  window.open('https://www.eatingwell.com/article/287714/7-day-diet-meal-plan-to-lose-weight-1500-calories/', '_blank');
};

const redirectToWebsiteThree = () => {
  window.open('https://www.eatingwell.com/article/2060706/healthy-weight-gain-meal-plan/', '_blank');
};

  return (
    <div>
      <div className='container-fluid p-3'>

        <div className='bg-light p-4'>
          <div className='bg-light' style={{height:"43vh", backgroundImage: `url(${bg})`, backgroundPosition:"center", position:"relative"}}><h2 style={{position:"absolute", bottom:10, left:10, color:"white", textShadow:"0 0 10px black", fontSize:"36px"}}>NUTRITION</h2></div>
          <p className='mt-5' style={{fontSize:"16px"}}>Welcome to our Nutrition page! Achieving your desired physical fitness isn't just about exercise; it begins with what you put on your plate. Eating nutritious and balanced meals is a fundamental pillar of your health and fitness journey. Discover the key to nourishing your body for optimal performance and well-being right here. This page includes a suggested meal plan based on your profile. Please feel free to customize the recipes or the meal plan as per your convenience.</p>
          <div className='row'>
            <div className='col-4 p-5'>
              <div className='card'>
                <img src={one} />
                <button onClick={redirectToWebsiteOne} style={{background:"lightblue", padding:"10px", border:"none"}}>Visit Website</button>
              </div>
            </div>
            <div className='col-4 p-5'>
              <div className='card'>
                <img src={two} />
                <button onClick={redirectToWebsiteTwo} style={{background:"lightblue", padding:"10px", border:"none"}}>Visit Website</button>
              </div>
            </div>
            <div className='col-4 p-5'>
              <div className='card'>
                <img src={three} />
                <button onClick={redirectToWebsiteThree} style={{background:"lightblue", padding:"10px", border:"none"}}>Visit Website</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Nutrition;