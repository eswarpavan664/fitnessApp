import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 1.2rem;
  button {
    background: rgba(108, 197, 29);
    border: rgba(108, 197, 29);
    font-size: 1.4rem;
    padding: 0.5rem;
  }
  .card-title {
    font-size: 1.6rem;
    padding: 1rem;
  }
  img {
    max-height: 36rem;
  }
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
  top: 18rem;
  left: 5rem;
  opacity: 1;
  text-transform: uppercase;
  
`;