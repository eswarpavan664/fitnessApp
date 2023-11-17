import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
`;

export const Header = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  div {
    margin: 0 0.5rem;
    color: #222;
  }
  button {
    border: none;
    background: none;
    color: red;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 8rem;
  position: fixed;
  height: 100vh;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  nav {
    display: initial;
    ${({ $isLoggedIn }) => !$isLoggedIn && `display: none;`}
    #brand {
      font-size: 2rem;
      font-weight: bold;
      text-transform: capitalize;
      font-style: italic;
      font-variant: small-caps;
      color: rgb(108, 197, 29);
    }
  }
  @media screen and (min-width: 700px) {
    margin-left: 8rem;
    width: calc(100% - 8rem);
    nav {
      display: none;
    }
  }

  .navbar-nav {
    margin-right: auto !important;
    position: absolute;
    z-index: 2;
    background: white;
    right: 3rem;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 1px 2px 7px #4449;
    a {
      padding: 0.5rem;
      text-decoration: none;
      font-size: 1.8rem;
    }
  }
`;

export const Nav = styled.nav`
  margin: 1rem 0;
`;
export const ListItem = styled.li`
  margin: 1rem;
  list-style-type: none;
`;
export const UndorderList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70vh;
  margin-top: 1rem;
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