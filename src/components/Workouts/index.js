import React, { useEffect, useState } from 'react';
import { WorkOutForm, Wrapper, Container, Header, Picture } from './styles';
import "./style.css"
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
    "Rest",
    "Cardio",
    "Olympic",
    "Stretches"
  ]);

  const exercises = {
    "Core": [
      { name: "Crunches", url: "https://www.youtube.com/embed/4hmQA3snTyk?si=fUM371Qy1t7Z-LY9" },
      { name: "Plank", url: "https://www.google.com/search?q=Plank%0D%0A&sca_esv=574277537&rlz=1C1PNCB_enUS1016US1041&ei=rDMvZeWYAaPm5NoPjYmwkAY&ved=0ahUKEwjlns7xt_6BAxUjM1kFHY0EDGIQ4dUDCBE&uact=5&oq=Plank%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiBlBsYW5rCkgAUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQHiAwQYACBB&sclient=gws-wiz-serp" },
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
      { name: "Dumbbell Chest Press", url: "https://www.youtube.com/embed/KjYak5vZO9s?si=9I0u-5uD9eFh_k1x" },
      { name: "Decline Bench Press", url: "url_for_decline_bench_press" },
      { name: "Incline Bench Press", url: "url_for_incline_bench_press" },
      { name: "Floor Press", url: "url_for_floor_press" },
      { name: "Push Up", url: "url_for_push_up" },
      { name: "Pullover", url: "url_for_pullover" },
      { name: "Pec Deck", url: "url_for_pec_deck" },
    ],
    "Legs": [
      { name: "Box Jump", url: "url_for_box_jump" },
      { name: "Box Squat", url: "url_for_box_squat" },
      { name: "Bulgarian Split Squat", url: "url_for_bulgarian_split_squat" },
      { name: "Cable Pull Through", url: "url_for_cable_pull_through" },
      { name: "Calf Raise", url: "url_for_calf_raise" },
      { name: "Front Squat", url: "url_for_front_squat" },
      { name: "Deficit Deadlift", url: "url_for_deficit_deadlift" },
      { name: "Goblet Squat", url: "url_for_goblet_squat" },
      { name: "Hack Squat", url: "url_for_hack_squat" },
      { name: "High Knees", url: "url_for_high_knees" },
      { name: "Hip Thrust", url: "url_for_hip_thrust" },
      { name: "Cable Hip Abduction", url: "url_for_cable_hip_abduction" },
      { name: "Hip Abduction", url: "url_for_hip_abduction" },
      { name: "Jump Squat", url: "url_for_jump_squat" },
      { name: "Lateral Box Jump", url: "url_for_lateral_box_jump" },
      { name: "Lunges", url: "url_for_lunges" },
      { name: "Mountain Climber", url: "url_for_mountain_climber" },
      { name: "Pistol Squat", url: "url_for_pistol_squat" },
      { name: "Squat", url: "url_for_squat" },
      { name: "Trap Bar Deadlift", url: "url_for_trap_bar_deadlift" },
      { name: "Zercher Squat", url: "url_for_zercher_squat" },
      { name: "Cable Kickback", url: "url_for_cable_kickback" },
      { name: "Romanian Dead Lift", url: "url_for_romanian_dead_lift" },
      { name: "Glute Bridge", url: "url_for_glute_bridge" },
    ],
    "Full Body": [
      { name: "Battle Roap", url: "url_for_battle_roap" },
      { name: "Ball Slam", url: "url_for_ball_slam" },
      { name: "Burpee", url: "url_for_burpee" },
      { name: "Jumping Jacks", url: "url_for_jumping_jacks" },
      { name: "Kettlebell Swing", url: "url_for_kettlebell_swing" },
      { name: "Kettlebell Turkish Get Up", url: "url_for_kettlebell_turkish_get_up" },
      { name: "Squat to Row", url: "url_for_squat_to_row" },
      { name: "Sumo Deadlift High Pull", url: "url_for_sumo_deadlift_high_pull" },
      { name: "Thruster", url: "url_for_thruster" },
    ],
    "Cardio": [
      { name: "Aerobics", url: "url_for_aerobics" },
      { name: "Stairmaster", url: "url_for_stairmaster" },
      { name: "Stationary Bike", url: "url_for_stationary_bike" },
      { name: "Elliptical Machine", url: "url_for_elliptical_machine" },
      { name: "Jump Rope", url: "url_for_jump_rope" },
      { name: "Rowing Machine", url: "url_for_rowing_machine" },
    ],
    "Stretches": [
      { name: "Pegion Stretch", url: "url_for_pegion_stretch" },
      { name: "Child's Pose", url: "url_for_childs_pose" },
      { name: "Knees to Chest", url: "url_for_knees_to_chest" },
      { name: "Head to Knees", url: "url_for_head_to_knees" },
      { name: "Figure 4 Stretch", url: "url_for_figure_4_stretch" },
      { name: "Crossbody Shoulder Stretch", url: "url_for_crossbody_shoulder_stretch" },
      { name: "Seated Heart Opener", url: "url_for_seated_heart_opener" },
      { name: "Downward Dog", url: "url_for_downward_dog" },
      { name: "Lunge with Reach and Twist", url: "url_for_lunge_with_reach_and_twist" },
      { name: "Cat-Cow Stretch", url: "url_for_cat_cow_stretch" }
    ],
    "Olympic": [
      { name: "Clean", url: "url_for_clean" },
      { name: "Clean and Jerk", url: "url_for_clean_and_jerk" },
      { name: "Hang Clean", url: "url_for_hang_clean" },
      { name: "Hang Snatch", url: "url_for_hang_snatch" },
      { name: "Jump Shrug", url: "url_for_jump_shrug" },
      { name: "Overhead Squat", url: "url_for_overhead_squat" },
      { name: "Power Clean", url: "url_for_power_clean" },
      { name: "Power Snatch", url: "url_for_power_snatch" },
      { name: "Snatch", url: "url_for_snatch" },
      { name: "Muscle Snatch", url: "url_for_muscle_snatch" },
      { name: "Split Jerk", url: "url_for_split_jerk" }
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
      <Header>Workouts</Header>
      <Picture></Picture>
      <Container>
        <p className='my-5' style={{fontSize:"16px"}}>Welcome to our Workouts page, where your journey to a healthier, stronger, and happier you begins! Physical fitness isn't just about looking good; it's about feeling your best and living your life to the fullest. We're here to inspire and motivate you on your path to a more active and vibrant lifestyle. Get ready to experience the joy of working out and discover the transformative power of prioritizing your physical well-being. Let's get moving!</p>
        <div>


          <div class="soft-ui-container">
            <div style={{display:"flex", alignItems:"center"}}>
              <div class="dropdown-container">
                <label class="form-label" for="dayDropdown">Select Day:</label>
                <select class="form-select" id="dayDropdown" value={selectedDay} onChange={handleDayChange}>
                  {days.map((day) => (
                    <option class="form-option" key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

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
