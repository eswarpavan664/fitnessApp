import React, { useEffect, useState } from 'react';

import {
  Wrapper,
  Header,
  Picture,
  GoalDetails,
} from './styles';
import axios from 'axios';
import "./style.css"

const GoalSetting = () => {

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
      { name: "Tricep Dip", url: "url_for_tricep_dip_image.jpg" },
      { name: "Bench Press", url: "url_for_bench_press_image.jpg" },
      { name: "Bicep Curl", url: "url_for_bicep_curl_image.jpg" },
      { name: "Hammer Curl", url: "url_for_hammer_curl_image.jpg" },
      { name: "Incline Dumbbell Bicep Curl", url: "url_for_incline_dumbbell_bicep_curl_image.jpg" },
      { name: "Preacher Curl", url: "url_for_preacher_curl_image.jpg" },
      { name: "Reverse Curl", url: "url_for_reverse_curl_image.jpg" },
      { name: "Skullcrusher", url: "url_for_skullcrusher_image.jpg" },
      { name: "Triceps Extension", url: "url_for_triceps_extension_image.jpg" },
      { name: "Arnold Press", url: "url_for_arnold_press_image.jpg" },
      { name: "Face Pull", url: "url_for_face_pull_image.jpg" },
      { name: "Front Raises", url: "url_for_front_raises_image.jpg" },
      { name: "Lateral Raises", url: "url_for_lateral_raises_image.jpg" },
      { name: "Overhead Press", url: "url_for_overhead_press_image.jpg" },
      { name: "Push Press", url: "url_for_push_press_image.jpg" },
      { name: "Reverse Fly", url: "url_for_reverse_fly_image.jpg" },
      { name: "Seated Overhead Press", url: "url_for_seated_overhead_press_image.jpg" },
      { name: "Shoulder Press", url: "url_for_shoulder_press_image.jpg" },
      { name: "Upright Row", url: "url_for_upright_row_image.jpg" },
      { name: "Strict Military Press", url: "url_for_strict_military_press_image.jpg" },
      { name: "Wrist Roller", url: "url_for_wrist_roller_image.jpg" },
      { name: "Bent-Over Row", url: "url_for_bent_over_row_image.jpg" },
    ],
    "Back": [
      { name: "Back Extension", url: "url_for_back_extension_image.jpg" },
      { name: "Bent Over Row", url: "url_for_bent_over_row_image.jpg" },
      { name: "Bent Over Single Arm Row", url: "url_for_bent_over_single_arm_row_image.jpg" },
      { name: "Chin Up", url: "url_for_chin_up_image.jpg" },
      { name: "Deadlift", url: "url_for_deadlift_image.jpg" },
      { name: "Good Morning", url: "url_for_good_morning_image.jpg" },
      { name: "Incline Row", url: "url_for_incline_row_image.jpg" },
      { name: "Inverted Row", url: "url_for_inverted_row_image.jpg" },
      { name: "Kipping Pullup", url: "url_for_kipping_pullup_image.jpg" },
      { name: "Lat Pulldown", url: "url_for_lat_pulldown_image.jpg" },
      { name: "Kneeling Pulldown", url: "url_for_kneeling_pulldown_image.jpg" },
      { name: "Rack Pull", url: "url_for_rack_pull_image.jpg" },
      { name: "Romanian Deadlift", url: "url_for_romanian_deadlift_image.jpg" },
      { name: "Shrug", url: "url_for_shrug_image.jpg" },
      { name: "Seated Row", url: "url_for_seated_row_image.jpg" },
      { name: "Stiff Leg Barbell Deadlift", url: "url_for_stiff_leg_barbell_deadlift_image.jpg" },
      { name: "Sumo Barbell Deadlift", url: "url_for_sumo_barbell_deadlift_image.jpg" },
      { name: "T Bar Row", url: "url_for_t_bar_row_image.jpg" },
      { name: "Upright Row", url: "url_for_upright_row_image.jpg" },
    ],
    "Chest": [
      { name: "Around the World", url: "url_for_around_the_world_image.jpg" },
      { name: "Bench Press", url: "url_for_bench_press_image.jpg" },
      { name: "Chest Dip", url: "url_for_chest_dip_image.jpg" },
      { name: "Chest Fly", url: "url_for_chest_fly_image.jpg" },
      { name: "Dumbbell Chest Press", url: "url_for_dumbbell_chest_press_image.jpg" },
      { name: "Decline Bench Press", url: "url_for_decline_bench_press_image.jpg" },
      { name: "Incline Bench Press", url: "url_for_incline_bench_press_image.jpg" },
      { name: "Floor Press", url: "url_for_floor_press_image.jpg" },
      { name: "Push Up", url: "url_for_push_up_image.jpg" },
      { name: "Pullover", url: "url_for_pullover_image.jpg" },
      { name: "Pec Deck", url: "url_for_pec_deck_image.jpg" },
    ],
    "Legs": [
      { name: "Box Jump", url: "url_for_box_jump_image.jpg" },
      { name: "Box Squat", url: "url_for_box_squat_image.jpg" },
      { name: "Bulgarian Split Squat", url: "url_for_bulgarian_split_squat_image.jpg" },
      { name: "Cable Pull Through", url: "url_for_cable_pull_through_image.jpg" },
      { name: "Calf Raise", url: "url_for_calf_raise_image.jpg" },
      { name: "Front Squat", url: "url_for_front_squat_image.jpg" },
      { name: "Deficit Deadlift", url: "url_for_deficit_deadlift_image.jpg" },
      { name: "Goblet Squat", url: "url_for_goblet_squat_image.jpg" },
      { name: "Hack Squat", url: "url_for_hack_squat_image.jpg" },
      { name: "High Knees", url: "url_for_high_knees_image.jpg" },
      { name: "Hip Thrust", url: "url_for_hip_thrust_image.jpg" },
      { name: "Cable Hip Abduction", url: "url_for_cable_hip_abduction_image.jpg" },
      { name: "Hip Abduction", url: "url_for_hip_abduction_image.jpg" },
      { name: "Jump Squat", url: "url_for_jump_squat_image.jpg" },
      { name: "Lateral Box Jump", url: "url_for_lateral_box_jump_image.jpg" },
      { name: "Lunges", url: "url_for_lunges_image.jpg" },
      { name: "Mountain Climber", url: "url_for_mountain_climber_image.jpg" },
      { name: "Pistol Squat", url: "url_for_pistol_squat_image.jpg" },
      { name: "Squat", url: "url_for_squat_image.jpg" },
      { name: "Trap Bar Deadlift", url: "url_for_trap_bar_deadlift_image.jpg" },
      { name: "Zercher Squat", url: "url_for_zercher_squat_image.jpg" },
      { name: "Cable Kickback", url: "url_for_cable_kickback_image.jpg" },
      { name: "Romanian Dead Lift", url: "url_for_romanian_dead_lift_image.jpg" },
      { name: "Glute Bridge", url: "url_for_glute_bridge_image.jpg" },
    ],
    "Full Body": [
      { name: "Battle Roap", url: "url_for_battle_roap_image.jpg" },
      { name: "Ball Slam", url: "url_for_ball_slam_image.jpg" },
      { name: "Burpee", url: "url_for_burpee_image.jpg" },
      { name: "Jumping Jacks", url: "url_for_jumping_jacks_image.jpg" },
      { name: "Kettlebell Swing", url: "url_for_kettlebell_swing_image.jpg" },
      { name: "Kettlebell Turkish Get Up", url: "url_for_kettlebell_turkish_get_up_image.jpg" },
      { name: "Squat to Row", url: "url_for_squat_to_row_image.jpg" },
      { name: "Sumo Deadlift High Pull", url: "url_for_sumo_deadlift_high_pull_image.jpg" },
      { name: "Thruster", url: "url_for_thruster_image.jpg" },
    ],
    "Cardio": [
      { name: "Aerobics", url: "url_for_aerobics_image.jpg" },
      { name: "Stairmaster", url: "url_for_stairmaster_image.jpg" },
      { name: "Stationary Bike", url: "url_for_stationary_bike_image.jpg" },
      { name: "Elliptical Machine", url: "url_for_elliptical_machine_image.jpg" },
      { name: "Jump Rope", url: "url_for_jump_rope_image.jpg" },
      { name: "Rowing Machine", url: "url_for_rowing_machine_image.jpg" },
    ],
    "Stretches": [
      { name: "Pegion Stretch", url: "url_for_pegion_stretch_image.jpg" },
      { name: "Child's Pose", url: "url_for_childs_pose_image.jpg" },
      { name: "Knees to Chest", url: "url_for_knees_to_chest_image.jpg" },
      { name: "Head to Knees", url: "url_for_head_to_knees_image.jpg" },
      { name: "Figure 4 Stretch", url: "url_for_figure_4_stretch_image.jpg" },
      { name: "Crossbody Shoulder Stretch", url: "url_for_crossbody_shoulder_stretch_image.jpg" },
      { name: "Seated Heart Opener", url: "url_for_seated_heart_opener_image.jpg" },
      { name: "Downward Dog", url: "url_for_downward_dog_image.jpg" },
      { name: "Lunge with Reach and Twist", url: "url_for_lunge_with_reach_and_twist_image.jpg" },
      { name: "Cat-Cow Stretch", url: "url_for_cat_cow_stretch_image.jpg" }
    ],
    "Olympic": [
      { name: "Clean", url: "url_for_clean_image.jpg" },
      { name: "Clean and Jerk", url: "url_for_clean_and_jerk_image.jpg" },
      { name: "Hang Clean", url: "url_for_hang_clean_image.jpg" },
      { name: "Hang Snatch", url: "url_for_hang_snatch_image.jpg" },
      { name: "Jump Shrug", url: "url_for_jump_shrug_image.jpg" },
      { name: "Overhead Squat", url: "url_for_overhead_squat_image.jpg" },
      { name: "Power Clean", url: "url_for_power_clean_image.jpg" },
      { name: "Power Snatch", url: "url_for_power_snatch_image.jpg" },
      { name: "Snatch", url: "url_for_snatch_image.jpg" },
      { name: "Muscle Snatch", url: "url_for_muscle_snatch_image.jpg" },
      { name: "Split Jerk", url: "url_for_split_jerk_image.jpg" }
    ]
  };

  const [date, setDate] = useState(null)
  const [reps, setReps] = useState(null)
  const [sets, setSets] = useState(null)
  const [steps, setSteps] = useState(null)
  const [water, setWater] = useState(null)
  const [sleep, setSleep] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedExercise, setSelectedExercise] = useState(exercises[selectedCategory][0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setSelectedExercise(exercises[newCategory][0]);
  };

  const handleExerciseChange = (event) => {
    const newExercise = event.target.value;
    setSelectedExercise(newExercise);
  };

  const handleCreateTrack = () => {
    try {
      const token = localStorage.getItem('token');
      const [header, payload, signature] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      const apiUrl = 'https://fitness-server-wwif.onrender.com/user/track/create';
      const postData = {
        email: decodedPayload?.email,
        date: date,
        category: selectedCategory,
        exercise: selectedExercise,
        reps: reps,
        sets: sets,
        steps: steps,
        water_intake: water,
        sleep_time: sleep,
        created_by: decodedPayload?.Id
      };

      axios.post(apiUrl, postData)
        .then(response => {
          console.log('Response:', response.data);
          setCurrentPage(1);
          window.location.reload()
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (err) {
      console.log("Error ", err)
    }
  }

  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log(perPage, "-", currentPage)
    const token = localStorage.getItem('token');
    const [header, payload, signature] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    const apiUrl = `https://fitness-server-wwif.onrender.com/user/track/get/?email=${decodedPayload?.email}&page_no=${currentPage}&per_page=${perPage}`;

    axios.get(apiUrl)
      .then(response => {
        console.log('Response:', response.data);
        setResult(response.data); // Set the response data to the state
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [currentPage, perPage]);

  console.log(result)

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (event) => {
    setPerPage(event.target.value);
    setCurrentPage(1);
  };



  return (
    <Wrapper>
      <GoalDetails className='p-0'>
        <Header>Track your progress</Header>
        <Picture></Picture>

        <p className='mx-5 my-5' style={{ fontSize: "16px" }}>Welcome to the Track your Progress page, your key to achieving your fitness goals and celebrating your success! Consistency is the secret to lasting progress, and logging your daily activity is your roadmap to fitness triumph. Embrace the power of accountability and watch your journey unfold one day at a time. Start today and see how each small effort compounds into significant achievements. Together, we'll make every day count on your path to a healthier, stronger you.</p>
        <div className='mx-5'>
          <button type="button" class="btn btn-primary py-2" data-toggle="modal" data-target="#exampleModal" style={{ width: "60px" }}>
            Add
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">


                  <div className="container">
                    <h2>Track your progress</h2>
                    <div className="row">
                      <div className="col-12">
                        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                      </div>

                      <div className="col-12">
                        <label htmlFor="categoryDropdown" className="form-label">Select Category:</label>
                        <select
                          id="categoryDropdown"
                          className="form-select"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                        >
                          <option value="">Select Category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="exerciseDropdown" className="form-label">Select Exercise:</label>
                        <select
                          id="exerciseDropdown"
                          className="form-select"
                          value={selectedExercise}
                          onChange={handleExerciseChange}
                        >
                          <option value="">Select Exercise</option>
                          {exercises[selectedCategory] && exercises[selectedCategory].map((exercise) => (
                            <option key={exercise.name} value={exercise.name}>
                              {exercise.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <input type="number" placeholder="No. of reps" className="form-control" value={reps} onChange={(e) => setReps(e.target.value)} />
                      </div>

                      <div className="col-12">
                        <input type="number" placeholder="No. of sets" className="form-control" value={sets} onChange={(e) => setSets(e.target.value)} />
                      </div>

                      <div className="col-12">
                        <input type="number" placeholder="No. of steps" className="form-control" value={steps} onChange={(e) => setSteps(e.target.value)} />
                      </div>

                      <div className="col-12">
                        <input type="number" placeholder="Water intake (ltrs)" className="form-control" value={water} onChange={(e) => setWater(e.target.value)} />
                      </div>

                      <div className="col-12">
                        <input type="number" placeholder="Sleep time (hours)" className="form-control" value={sleep} onChange={(e) => setSleep(e.target.value)} />
                      </div>
                    </div>
                  </div>


                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={() => {
                    handleCreateTrack()
                  }}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="table-container" >
          <table className="soft-ui-table" >
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Exercise</th>
                <th>Reps</th>
                <th>Sets</th>
                <th>Sleep Time (hours)</th>
                <th>Steps</th>
                <th>Water Intake (ltrs)</th>
              </tr>
            </thead>
            <tbody >
              {result.map((track, index) => (
                <TrackTable key={index} track={track} />
              ))}
            </tbody>
          </table>
        </div>

        <div className='m-5 px-5' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>

         
          <div className="items-per-page" style={{display:"flex", alignItems:"center"}}>
            <label htmlFor="perPageDropdown" className="form-label m-0 p-0 me-3">Items per page:</label>
            <select
              id="perPageDropdown"
              className="form-select"
              value={perPage}
              onChange={handlePerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="pagination-container">
            <button
              className="btn btn-secondary"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Previous
            </button>
            <span className="mx-2">Page {currentPage}</span>
            <button
              className="btn btn-secondary"
              disabled={result.length < perPage}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </div>


        </div>





      </GoalDetails>
    </Wrapper>
  );
};

function TrackTable({ track }) {
  return (
    <tr>
      <td>{new Date(track.date).toLocaleDateString()}</td>
      <td>{track.category}</td>
      <td>{track.exercise}</td>
      <td>{track.reps}</td>
      <td>{track.sets}</td>
      <td>{track.sleep_time}</td>
      <td>{track.steps}</td>
      <td>{track.water_intake}</td>
    </tr>
  )
}

export default GoalSetting;
