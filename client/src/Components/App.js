import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import styled, { createGlobalStyle } from "styled-com
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import PrivateRoute from "./PrivateRoute";

//lets create state errors next for login, register, add plant, or edit plant
// you need to create different formschema components for each validation that you plan to use
// so create validation folder and create your different formschemas and add them 
// to each different form

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
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <StyledHeader>
        <header>
          <StyledLinks>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/login" onClick={handleLogout}>
              Logout
            </StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </StyledLinks>
        </header>
      </StyledHeader>
      <Switch>
        <PrivateRoute path="/update/:user_id/:plant_id">
          <EditPlant />
        </PrivateRoute>
        <PrivateRoute path="/dashboard/add">
          <AddPlant />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <GlobalStyle />
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/register">
          <GlobalStyle />
          <Register />
        </PrivateRoute>
        <PrivateRoute path="/login">
          <GlobalStyle />
          <Login />
        </PrivateRoute>
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
