import styled from 'styled-components';
import bg from 'assets/trackprogress.jpg';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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

export const Header = styled.div`
  font-size: 3rem;
  text-transform: capitalize;
  align-self: flex-start;
  padding: 1.6rem;
  position: absolute;
  color: #fff;
  font-weight: bold;
  top: 25rem;
  left: 5rem;
  opacity: 0.9;
  text-transform: uppercase;
  text-shadow: 0 0 10px black
`;

export const Picture = styled.div`
  width: calc(100% - 2rem);
  margin: 2rem;
  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 43vh;
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
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  padding: 0.8rem;
  margin: 0.5rem;
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
  margin-top: 1rem;
`;

export const Footer = styled.footer`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

export const GoalDetails = styled.div`
  width: calc(100% - 2rem);
  margin: 2rem;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  position: relative;
`;

export const FormField = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  label {
    color: #808080;
    padding: 0 1rem;
  }
`;
