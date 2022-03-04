import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";

function App() {
  return (
    <div>
      <header>
        <Link to="/login">Login</Link>
        <Link to="/login">Logout</Link>
        <Link to="/register">Create an Account</Link>
      </header>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;
