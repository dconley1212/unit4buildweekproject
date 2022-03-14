import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
`;

const StyledLinks = styled.div`
  display: block;
  padding: 5px;
`;

const StyledNavLink = styled(Link)`
  padding: 10px;
  margin: 10px;
  color: #f5fffa;
  font-size: 1.3rem;
`;

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #000000;
`;

const StyledSlogan = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  color: #000000;
  margin: 0px;
`;

const StyledActionParagraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #000000;
  margin: 0px;
`;

function App() {
  return (
    <div>
      <StyledHeader>
        <header>
          <StyledLinks>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/login">Logout</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </StyledLinks>
        </header>
      </StyledHeader>
      <StyledTitle>Healthy Plants</StyledTitle>
      <StyledSlogan>Anyone can learn how to have a green thumb!</StyledSlogan>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Login />
          <StyledActionParagraph>
            Register or Login for tips.
          </StyledActionParagraph>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
