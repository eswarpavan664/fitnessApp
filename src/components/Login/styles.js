import styled from 'styled-components';
import bg from 'assets/bg.jpg';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Container = styled.div`
  width: 28rem;
  min-height: 20rem;
  padding: 1rem;
  background: #fff;
  box-shadow: 1px 2px 6px #222;
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const HeaderDetails = styled.div`
  width: calc(100% - 2rem);
  margin: 2rem;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  position: relative;
`;

export const Header = styled.div``;

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

export const RegisterBtn = styled.button`
  cursor: pointer;
  color: #6cc51d;
  background: transparent;
  border: none;
  font-size: 1rem;
`;

export const Footer = styled.footer`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

export const Error = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: red;
`;
