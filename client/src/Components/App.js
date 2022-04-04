import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import styled, { createGlobalStyle } from "styled-components";
import AddPlant from "./AddPlant";

//Currently I think my route on the client side needs to hold id information to
// hit the correct router on the backend server. Because I tested the backend routes
// and they are working.

const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}
body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #8FBC8F, #3CB371);
    height: 100%;
    margin: 0;
    color: #555;
}
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 1.5%;
  background-color: #000000;
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
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/login">Logout</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </StyledLinks>
        </header>
      </StyledHeader>
      <Switch>
        <Route path="/dashboard/add">
          <GlobalStyle />
          <AddPlant />
        </Route>
        <Route path="/dashboard">
          <GlobalStyle />
          <Dashboard />
        </Route>
        <Route path="/register">
          <GlobalStyle />
          <Register />
        </Route>
        <Route path="/login">
          <GlobalStyle />
          <Login />
        </Route>
        <Route exact path="/">
          <GlobalStyle />
          <StyledTitle>Healthy Plants</StyledTitle>
          <StyledSlogan>Find your inner green thumb!</StyledSlogan>
          <Login />
          <StyledActionParagraph>
            Register or Login for tips.
          </StyledActionParagraph>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
