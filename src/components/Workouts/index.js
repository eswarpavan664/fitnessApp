import React, { useEffect, useState } from 'react';
import { WorkOutForm, Wrapper, Container, Header, Picture } from './styles';
import "./style.css"
import bg from "assets/workouts.jpg"



const getWorkouts = (state) => state.workouts.data;

const Workout = () => {

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedCategory, setSelectedCategory] = useState("Core");

  const [days, setDays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]);

  const [categories, setCategories] = useState([
    "Legs",
    "Core",
    "Arms and Shoulders",
    "Chest",
    "Back",
    "Full Body",
    "Cardio",
    "Olympic",
    "Stretches"
  ]);

  const exercises = {
    "Core": [
      { name: "Crunches", url: "https://www.youtube.com/embed/4hmQA3snTyk?si=fUM371Qy1t7Z-LY9" },
      { name: "Plank", url: "https://www.youtube.com/embed/6LqqeBtFn9M?si=hHqTN0P73DEPUie5" },
      { name: "V Ups", url: "https://www.youtube.com/embed/z6PJMT2y8GQ?si=cokIkEvInemwsyDa" },
      { name: "Superman", url: "https://www.youtube.com/embed/TNHSgs_orU0?si=romaaVCEy0bneNXJ" },
      { name: "Hollow Hold", url: "https://www.youtube.com/embed/TNHSgs_orU0?si=vqLcHBGBlSBSg0hv" },
      { name: "Ab Wheel Rollout", url: "https://www.youtube.com/embed/vncVOEtMhpk?si=g2n5vAsq5y2GijoJ" },
      { name: "Decline Crunches", url: "https://www.youtube.com/embed/W1pnuoe1SOQ?si=kCrqOahgEu5G3XvM" },
      { name: "Leg Raises", url: "https://www.youtube.com/embed/l4kQd9eWclE?si=5LmRu0TovH5GC56k" },
      { name: "Dead Bug", url: "https://www.youtube.com/embed/kwWZBbkXtg4?si=y3biNZgMTbQ_efJU" },
      { name: "Bicycle Crunches", url: "https://www.youtube.com/embed/Iwyvozckjak?si=m-oH2TmyrQVklc4A" },
      { name: "Reverse Crunches", url: "https://www.youtube.com/embed/hyv14e2QDq0?si=RYkmemuH8-2XCIfm" },
      { name: "Russian Twist", url: "https://www.youtube.com/embed/wkD8rjkodUI?si=KXs00Q9kkGXpg1bD" },
      { name: "Flutter Kicks", url: "https://www.youtube.com/embed/eEG9uXjx4vQ?si=L2mJFYywBsts4LHH" },
      { name: "Scissor Kicks", url: "https://www.youtube.com/embed/WoNCIBVLbgY?si=1MLWMkp6M7ZvDGV7" },
      { name: "Bird Dog", url: "https://www.youtube.com/embed/wiFNA3sqjCA?si=R_9G21d4GRfRbiWm" },
    ],
    "Arms and Shoulders": [
      { name: "Tricep Dip", url: "https://www.youtube.com/embed/6kALZikXxLc?si=uOOl2oqMRGb-vTJm" },
      { name: "Bench Press", url: "https://www.youtube.com/embed/rxD321l2svE?si=BPzMV3k6i3knbN1R" },
      { name: "Bicep Curl", url: "https://www.youtube.com/embed/ykJmrZ5v0Oo?si=ns2_YSKHT5lYUIHL" },
      { name: "Hammer Curl", url: "https://www.youtube.com/embed/TwD-YGVP4Bk?si=ZJibwIsC9eoVUfGX" },
      { name: "Incline Dumbbell Bicep Curl", url: "https://www.youtube.com/embed/b4jOP-spQW8?si=8TU1oNyMh3bLm14e" },
      { name: "Preacher Curl", url: "https://www.youtube.com/embed/DoCWeUBA0Gs?si=CG5DRpZpBF9cEAad" },
      { name: "Reverse Curl", url: "https://www.youtube.com/embed/nRgxYX2Ve9w?si=sWTIOgrI2qO7O1Uy" },
      { name: "Skullcrusher", url: "https://www.youtube.com/embed/BdqzYZmL2Bc?si=ds38ee8INLZ2K8HW" },
      { name: "Triceps Extension", url: "https://www.youtube.com/embed/_gsUck-7M74?si=cYTnNb97av64QJwV" },
      { name: "Arnold Press", url: "https://www.youtube.com/embed/zvId5KzQGwk?si=HuZuq5Ayq39TYMfI" },
      { name: "Face Pull", url: "https://www.youtube.com/embed/0Po47vvj9g4?si=g_aTwpgv5nRef5e9" },
      { name: "Front Raises", url: "https://www.youtube.com/embed/sOcYlBI85hc?si=XImCMx76ev0HWOsp" },
      { name: "Lateral Raises", url: "https://www.youtube.com/embed/wZnsZsMywrY?si=ZTJy7r-zIQFwAUBt" },
      { name: "Overhead Press", url: "https://www.youtube.com/embed/03p2g6mYunk?si=MnKWT3IsFQ2Cxou-" },
      { name: "Push Press", url: "https://www.youtube.com/embed/4tCaD42ghlc?si=adecCVfpMZ7Iv959" },
      { name: "Reverse Fly", url: "https://www.youtube.com/embed/QICCsyKVP-g?si=TOWywf6ZWTbg9BPo" },
      { name: "Seated Overhead Press", url: "https://www.youtube.com/embed/b5JzUH8gsOg?si=cVZYFhlsBh-84or6" },
      { name: "Shoulder Press", url: "https://www.youtube.com/embed/B-aVuyhvLHU?si=YfSw2WL_sAQ9MFSW" },
      { name: "Upright Row", url: "https://www.youtube.com/embed/vJ8x0Oz06gw?si=SPla9yi_l6OFbjR9" },
      { name: "Strict Military Press", url: "https://www.youtube.com/embed/J9nSWwSXUbU?si=5L-ARnyW2O0xmaNh" },
      { name: "Wrist Roller", url: "https://www.youtube.com/embed/oWtRl_ysx08?si=1QmoiiAmyi9l36nw" },
      { name: "Bent-Over Row", url: "https://www.youtube.com/embed/TcYPkHJId98?si=5kwu6_xT7k1AD7A4" },
    ],
    "Back": [
      { name: "Back Extension", url: "https://www.youtube.com/embed/DDJtB8Zgyow?si=oWiWwnOOugOc8T4D" },
      { name: "Bent Over Row", url: "https://www.youtube.com/embed/TcYPkHJId98?si=b8UFN5J-WJLwwaaV" },
      { name: "Bent Over Single Arm Row", url: "https://www.youtube.com/embed/-koP10y1qZI?si=d71f6pvaAs3kuNfS" },
      { name: "Chin Up", url: "https://www.youtube.com/embed/_71FpEaq-fQ?si=WKIM2gbc5L4HnO4s" },
      { name: "Deadlift", url: "https://www.youtube.com/embed/1ZXobu7JvvE?si=vYfLayrMY6Dg_MyH" },
      { name: "Good Morning", url: "https://www.youtube.com/embed/YA-h3n9L4YU?si=z8ql6KRLtxUZMd1o" },
      { name: "Incline Row", url: "https://www.youtube.com/embed/Nx0TzjgsI-0?si=1xD8tuecj8XNqcTi" },
      { name: "Inverted Row", url: "https://www.youtube.com/embed/9fItzuh9Iok?si=vhzXfsdFRKfqv8ca" },
      { name: "Kipping Pullup", url: "https://www.youtube.com/embed/lzRo-4pq_AY?si=eb1wciEnDaG_vypE" },
      { name: "Lat Pulldown", url: "https://www.youtube.com/embed/u3gQT2aMVaI?si=kumKTJHxiiwqUJvD" },
      { name: "Kneeling Pulldown", url: "https://www.youtube.com/embed/VIJPZ8m0EDM?si=FGvg8yoORgLTll0y" },
      { name: "Rack Pull", url: "https://www.youtube.com/embed/e11lVmLsvFU?si=hiCZKhRf7C0ZLiZL" },
      { name: "Romanian Deadlift", url: "https://www.youtube.com/embed/o_UD5VkV4oU?si=PUN5pyn75cOqqxVD" },
      { name: "Shrug", url: "https://www.youtube.com/embed/g6qbq4Lf1FI?si=x3nFkDRu5VfobGUa" },
      { name: "Seated Row", url: "https://www.youtube.com/embed/xQNrFHEMhI4?si=j7xIr7Pa4y4l8Nwj" },
      { name: "Stiff Leg Barbell Deadlift", url: "https://www.youtube.com/embed/xfQWZLs2Kfs?si=CWof7GFHHh9TfEze" },
      { name: "Sumo Barbell Deadlift", url: "https://www.youtube.com/embed/YUrXRgNjSmw?si=FvJ98i69QuECZsk_" },
      { name: "T Bar Row", url: "https://www.youtube.com/embed/hYo72r8Ivso?si=qlGb9W7Ef_vpG4B4" },
      { name: "Upright Row", url: "https://www.youtube.com/embed/vJ8x0Oz06gw?si=jG772mW-V01EEj_7" },
    ],
    "Chest": [
      { name: "Around the World", url: "https://www.youtube.com/embed/WB6zzM14xtM?si=hSx7NSoBHOpGsLJI" },
      { name: "Bench Press", url: "https://www.youtube.com/embed/rxD321l2svE?si=J6cZj8Qe7Z3wP97A" },
      { name: "Chest Dip", url: "https://www.youtube.com/embed/dX_nSOOJIsE?si=J5Csz6zSKvch3Rw9" },
      { name: "Chest Fly", url: "https://www.youtube.com/embed/UKwkChzThig?si=BVynDrcDW_ihnznG" },
      { name: "Dumbbell Chest Press", url: "https://www.youtube.com/embed/KjYak5vZO9s?si=DHupLpwT10hb7OjI" },
      { name: "Decline Bench Press", url: "https://www.youtube.com/embed/0xRvl4Qv3ZY?si=r0C60Ahpg2aF0XGV" },
      { name: "Incline Bench Press", url: "https://www.youtube.com/embed/7UB2HQg5FNY?si=ok2pKO8Gare9zPOa" },
      { name: "Floor Press", url: "https://www.youtube.com/embed/T0Y3OBF1bNI?si=p5MXPecVhpNvoVi-" },
      { name: "Push Up", url: "https://www.youtube.com/embed/bt5b9x9N0KU?si=alzLbYf-OZdVV05z" },
      { name: "Pullover", url: "https://www.youtube.com/embed/KQOBt5gjkSI?si=l-V6UzeU2hngdzDL" },
      { name: "Pec Deck", url: "https://www.youtube.com/embed/eGjt4lk6g34?si=TsGAB9TJi9xGjjqT" },
    ],
    "Legs": [
      { name: "Box Jump", url: "https://www.youtube.com/embed/WB6zzM14xtM?si=hSx7NSoBHOpGsLJI" },
      { name: "Box Squat", url: "https://www.youtube.com/embed/YRmghGLu2ZQ?si=57oDWlM9xiEKtRwK" },
      { name: "Bulgarian Split Squat", url: "https://www.youtube.com/embed/RCWkvwz7DoU?si=UMBFXVWoDZatM0ut" },
      { name: "Cable Pull Through", url: "https://www.youtube.com/embed/VRDxdi2d-2c?si=Xahf-K5B0JKUSv2x" },
      { name: "Calf Raise", url: "https://www.youtube.com/embed/-M4-G8p8fmc?si=CVb-b4TsaDNU7F7L" },
      { name: "Front Squat", url: "https://www.youtube.com/embed/B86Zj72LwzA?si=a_1IGgcMvx56MKhn" },
      { name: "Deficit Deadlift", url: "https://www.youtube.com/embed/CpWsUsqBtN8?si=BcwR9eBFRWf_Ojg-" },
      { name: "Goblet Squat", url: "https://www.youtube.com/embed/mmMOODrrALI?si=AKfVStXeCtnWZZvs" },
      { name: "Hack Squat", url: "https://www.youtube.com/embed/0tn5K9NlCfo?si=jtL-0GvybbdjnzLZ" },
      { name: "High Knees", url: "https://www.youtube.com/embed/ZNDHivUg7vA?si=1h34qjYH6Kr9qyyQ" },
      { name: "Hip Thrust", url: "https://www.youtube.com/embed/Zp26q4BY5HE?si=0LHqvqq1TPhxiWCx" },
      { name: "Cable Hip Abduction", url: "https://www.youtube.com/embed/pvnR8CDb4BU?si=yuqcJQRuI-FNePgW" },
      { name: "Hip Abduction", url: "https://www.youtube.com/embed/CP4LjhZ_Wq0?si=mjY-vjqRrE2UfXGJ" },
      { name: "Jump Squat", url: "https://www.youtube.com/embed/A-cFYWvaHr0?si=vnVnl-tKxNRs3DLz" },
      { name: "Lateral Box Jump", url: "https://www.youtube.com/embed/bNHwR90FO0I?si=foOqyepR6z9XPHvH" },
      { name: "Lunges", url: "https://www.youtube.com/embed/wrwwXE_x-pQ?si=szYOBEzByBDcjJ9R" },
      { name: "Mountain Climber", url: "https://www.youtube.com/embed/nmwgirgXLYM?si=htWjPGBz5oCxBw5c" },
      { name: "Pistol Squat", url: "https://www.youtube.com/embed/smn5zko8Kpk?si=oibmIdxY69RcimIH" },
      { name: "Squat", url: "https://www.youtube.com/embed/xqvCmoLULNY?si=IqpWDAJBPTU880Gk" },
      { name: "Trap Bar Deadlift", url: "https://www.youtube.com/embed/FYx76NSijfU?si=LBZPLm91wPMP6Po5" },
      { name: "Zercher Squat", url: "https://www.youtube.com/embed/nwx6Ip7hd3I?si=YLVYtef_zb6wus6C" },
      { name: "Cable Kickback", url: "https://www.youtube.com/embed/ifP5sFBT7IE?si=_GbSMVFIZqt6dorb" },
      { name: "Romanian Dead Lift", url: "https://www.youtube.com/embed/o_UD5VkV4oU?si=Jrha1nmOpLgChHlR" },
      { name: "Glute Bridge", url: "https://www.youtube.com/embed/wPM8icPu6H8?si=t1IoK4FFGHxCnrJ4" },
    ],
    "Full Body": [
      { name: "Battle Roap", url: "https://www.youtube.com/embed/7wDx6mZDxA8?si=XEWAh9n_Cw85a0-W" },
      { name: "Ball Slam", url: "https://www.youtube.com/embed/ePo39a3mSfk?si=H1nl-uzYUx7sHTm6" },
      { name: "Burpee", url: "https://www.youtube.com/embed/qLBImHhCXSw?si=d_xGMQlvuR_KOSUZ" },
      { name: "Jumping Jacks", url: "https://www.youtube.com/embed/iSSAk4XCsRA?si=vAYIlJN5f5QgpRZZ" },
      { name: "Kettlebell Swing", url: "https://www.youtube.com/embed/sSESeQAir2M?si=dyTyBVocAO0llysE" },
      { name: "Kettlebell Turkish Get Up", url: "https://www.youtube.com/embed/sgd8n917Zv0?si=z_bIWQR0weqaTpj0" },
      { name: "Squat to Row", url: "https://www.youtube.com/embed/qZn-_dXCP2s?si=7dtqjbtIzsAf3pq9" },
      { name: "Sumo Deadlift High Pull", url: "https://www.youtube.com/embed/gh55vVlwlQg?si=HKKF-hs04ZHsG1UF" },
      { name: "Thruster", url: "https://www.youtube.com/embed/L219ltL15zk?si=dL42wCnRSKzYfGz9" },
    ],
    "Cardio": [

      { name: "Stairmaster", url: "https://www.youtube.com/embed/xSB39wbMz4w?si=NF7fh9XqmHnVMA2T" },
      { name: "Stationary Bike", url: "https://www.youtube.com/embed/NwwDBARCGgo?si=Gp0qtz1m7huVbU_R" },
      { name: "Elliptical Machine", url: "https://www.youtube.com/embed/YWfswVvOaiI?si=hhx93CV3uyA_XkUR" },
      { name: "Jump Rope", url: "https://www.youtube.com/embed/u3zgHI8QnqE?si=6EIyuUxtd4lVAoet" },
      { name: "Rowing Machine", url: "https://www.youtube.com/embed/6_eLpWiNijE?si=icaWrZnTUmFus5q0" },
    ],
    "Stretches": [
      { name: "Pegion Stretch", url: "https://www.youtube.com/embed/op-eDU9eNqM?si=-zsP3hDn6uWsayX4" },
      { name: "Child's Pose", url: "https://www.youtube.com/embed/qYvYsFrTI0U?si=tU8-YXN0ZVF4w38r" },
      { name: "Knees to Chest", url: "https://www.youtube.com/embed/o8gAyDUh2bs?si=hjpzTCuYhHsbFv5Z" },
      { name: "Head to Knees", url: "https://www.youtube.com/embed/Z3xK3trnpfw?si=4PU_UNZKQmlHekQh" },
      { name: "Figure 4 Stretch", url: "https://www.youtube.com/embed/Xb5gHdYtHnk?si=cY52Oy_CyFCuXLwB" },
      { name: "Crossbody Shoulder Stretch", url: "https://www.youtube.com/embed/Pg0JvLSfWwM?si=PlbWh4DbVTvFayRx" },
      { name: "Seated Heart Opener", url: "https://www.youtube.com/embed/e4FZvgKOv2c?si=VilNXb0PxL6xWa1Q" },
      { name: "Downward Dog", url: "https://www.youtube.com/embed/EC7RGJ975iM?si=JNQhnVaSZNjPqiIn" },
      { name: "Lunge with Reach and Twist", url: "https://www.youtube.com/embed/JVzLwJFaGcQ?si=2_dPgimlIlx4XKZy" },
      { name: "Cat-Cow Stretch", url: "https://www.youtube.com/embed/fcnv4gyMzf8?si=8VRggo_ixVdQjgSS" }
    ],
    "Olympic": [
      { name: "Clean", url: "https://www.youtube.com/embed/Ty14ogq_Vok?si=rrLkm1g5OHwjdyHV" },
      { name: "Clean and Jerk", url: "https://www.youtube.com/embed/PjY1rH4_MOA?si=amxwCdSjliyfuipr" },
      { name: "Hang Clean", url: "https://www.youtube.com/embed/WCdhjfg7fv4?si=tU0nIqFuxJ2h9u1A" },
      { name: "Hang Snatch", url: "https://www.youtube.com/embed/IucshEToDyM?si=SMZ5UF8va6Z67_uF" },
      { name: "Jump Shrug", url: "https://www.youtube.com/embed/wHuavoXFi3c?si=L8d9deRWNedy1Ru3" },
      { name: "Overhead Squat", url: "https://www.youtube.com/embed/pn8mqlG0nkE?si=GiwEql7NwqrgBsiT" },
      { name: "Power Clean", url: "https://www.youtube.com/embed/KwYJTpQ_x5A?si=5r7EmilwZSfaFhk1" },
      { name: "Power Snatch", url: "https://www.youtube.com/embed/TL8SMp7RdXQ?si=4YiAMw41E6_bJY1U" },
      { name: "Snatch", url: "https://www.youtube.com/embed/GhxhiehJcQY?si=wZbjIhbCc7faGnWo" },
      { name: "Muscle Snatch", url: "https://www.youtube.com/embed/bJYzOo1cNqY?si=7JLl_lilK-ZUpkB-" },
      { name: "Split Jerk", url: "https://www.youtube.com/embed/GUDkOtraHHY?si=RTTwYbxjYgoztkbQ" }
    ]
  };


  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredExercises = exercises[selectedCategory];


  return (
    <Wrapper>
      <div className='bg-light' style={{ height: "43vh", backgroundImage: `url(${bg})`, backgroundPosition: "center", position: "relative" }}><h2 style={{ position: "absolute", bottom: 10, left: 10, color: "white", textShadow: "0 0 10px black", fontSize: "36px" }}>WORKOUTS</h2></div>

      <Container>
        <p className='my-5' style={{ fontSize: "16px" }}>Welcome to our Workouts page, where your journey to a healthier, stronger, and happier you begins! Physical fitness isn't just about looking good; it's about feeling your best and living your life to the fullest. We're here to inspire and motivate you on your path to a more active and vibrant lifestyle. Get ready to experience the joy of working out and discover the transformative power of prioritizing your physical well-being. Let's get moving!</p>
        <div>


          <div class="soft-ui-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <div class="dropdown-container">
                <label class="form-label" for="dayDropdown">Select Day:</label>
                <select class="form-select" id="dayDropdown" value={selectedDay} onChange={handleDayChange}>
                  {days.map((day) => (
                    <option class="form-option" key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div> */}

              <div class="dropdown-container">
                <label class="form-label" for="categoryDropdown">Select Category:</label>
                <select class="form-select" id="categoryDropdown" value={selectedCategory} onChange={handleCategoryChange}>
                  {categories.map((category) => (
                    <option class="form-option" key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <ul style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {filteredExercises &&
              filteredExercises.map((exercise) => (
                <div style={{ margin: "20px 0" }}>
                  <h3>{exercise.name}</h3>
                  <iframe width="360" height="202" src={exercise.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen></iframe>
                </div>
              ))}
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Workout;
