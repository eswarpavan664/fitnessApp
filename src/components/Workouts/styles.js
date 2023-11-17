import styled from 'styled-components';

import bg from 'assets/workouts.jpg';

export const WorkOutForm = styled.div`
  position: absolute;
  top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  form {
    padding: 2rem;

    width: 40rem;
    background: white;
    border-radius: 10px;
    box-shadow: 1px 2px 9px 3px #ddd;
  }
  input {
    padding: 0.8rem;
  }
  .form-label {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  button:not(.cancel-btn) {
    background-color: rgb(108, 197, 29);
    margin-top: 1rem;
    padding: 0.8rem;
    color: #ffffff;
    border: 1px solid rgb(108, 197, 29);
    :hover {
      background-color: rgb(118, 200, 29);
    }
    font-size: 1.4rem;
  }
`;

export const Wrapper = styled.div`
  margin: 2rem;
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  overflow: hidden;
  table {
    font-size: 1.2rem;
  }
  .workout-btn {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: #fff;
  }
  .cancel-btn {
    text-decoration: none;
    color: #222;
    border: 1px solid #222;
    padding: 0.8rem;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-top: 1.2rem;
  }
`;

export const Container = styled.div`
  /* margin: 2rem;
  padding: 2rem; */
`;

export const Header = styled.div`
  font-size: 3rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 1.6rem;
  position: absolute;
  color: #fff;
  font-weight: bold;
  top: 27rem;
  left: 12rem;
  text-shadow:0 0 10px black;
  text-transform: uppercase;
`;

export const Picture = styled.div`
  width: 100%;
  background-image: url(${bg});
  
  background-repeat: no-repeat;
  background-size: cover;
  height: 25rem;
`;
