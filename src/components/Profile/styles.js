import styled from 'styled-components';
import bg from 'assets/PROFILE_BG.jpg';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const Container = styled.div`
  min-height: 20rem;
  max-width: 60%;
  padding: 2rem;
  background: #fff;
  /* box-shadow: 1px 2px 6px #222; */
  font-size: 1.2rem;
  line-height: 2rem;
  /* border-radius: 0.5rem; */
  display: flex;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

export const Body = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1rem;
  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    color: #808080;
  }
  select {
    padding: 0.8rem;
    font-size: 1.2rem;
    border: 1px solid #ddd;
  }
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  padding: 0.8rem;
  margin: 0.5rem 0;
`;

export const Tetarea = styled.textarea`
  border: 1px solid #ddd;
  padding: 0.8rem;
  margin: 0.5rem 0;
`;

export const Info = styled.div``;

export const SubmitButton = styled.button`
  background-color: #6cc51d;
  border-color: #6cc51d;
  color: #fff;
  padding: 0.8rem;
  font-size: 1.2rem;
  cursor: pointer;
  align-self: center;
  min-width: 12rem;
  border-radius: 3px;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const Details = styled.div`
  font-size: 1.2rem;
  padding: 0 0 2rem 4rem;
  width: 80%;
  align-self: flex-start;
`;

export const AboutMe = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  padding: 2rem 0 0.5rem 4rem;
  color: rgb(108, 197, 29);
  align-self: flex-start;
`;

export const SelfDetails = styled.div`
  width: calc(100% - 2rem);
  margin: 2rem;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  position: relative;
`;

export const Header = styled.div`
  font-size: 3rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 1.2rem;
  position: absolute;
  color: white;
  border-radius: 30px;
  // box-shadow: 0 0 10px white;
  text-shadow: 0 0 30px black;
  font-weight: bold;
  top: 21rem;
  left: 5rem;
  opacity: 1;
  text-transform: uppercase;
`;

export const Picture = styled.div`
  width: calc(100% - 2rem);
  margin: 2rem;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 35vh
`;

export const BmiGuage = styled.div`
  padding: 2rem;
  h3 {
    text-align: center;
    padding: 1rem;
  }
`;
