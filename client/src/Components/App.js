import React from "react";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import styled, { createGlobalStyle } from "styled-components";
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PrivateRoute from "./PrivateRoute";
import Contact from "./Contact";
import plantImg from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/annie-spratt-hX_hf2lPpUU-unsplash.jpg";
import About from "./About";

// Things to contribute before deploying, the last one I could deploy first and add it later
//1. Footer should link to contact page and about page
//2. Figure out reminder capability/ adding a picture to the backend and how to send a reminder

const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}
body {
    font-family: sans-serif;
    background: url(${plantImg});
    height: 100%;
    margin: 0;
    padding: 0;
    background-size: cover;
    color: #555;
    background-repeat: no-repeat;
}
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 1.5rem;
  background-color: #000000;
`;

const StyledLinks = styled.div`
  display: block;
  padding: 0.3rem;
`;

const StyledNavLink = styled(Link)`
  padding: 0.6rem;
  margin: 0.6rem;
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
  margin: 0.2rem;
`;

const StyledFooter = styled.footer`
  background: #000000;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 10vh;
`;

const StyledFooterLinks = styled.div`
  display: flex;
  padding: 0.3rem;
  margin-left: 3rem;
`;

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <StyledHeader>
        <StyledLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/login" onClick={handleLogout}>
            Logout
          </StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </StyledLinks>
      </StyledHeader>
      <Switch>
        <PrivateRoute path="/update/:user_id/:plant_id">
          <GlobalStyle />
          <EditPlant />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/add">
          <GlobalStyle />
          <AddPlant />
        </PrivateRoute>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <GlobalStyle />
          <Contact />
        </Route>
        <PrivateRoute path="/dashboard">
          <GlobalStyle />
          <Dashboard />
        </PrivateRoute>
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
        </Route>
      </Switch>
      <StyledFooter>
        <StyledFooterLinks>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </StyledFooterLinks>
      </StyledFooter>
    </div>
  );
}

export default App;
