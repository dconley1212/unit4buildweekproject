import React from "react";
import { useHistory } from "react-router-dom";

// you might want to put a button under the navlink for the logout link and create
// a handledClick function so it clears the token in local storage and pushes the user
// back to the login page.
// You will want to create and endpoint for logging out your user.

const LogOut = () => {
  const { push } = useHistory();

  return <div></div>;
};

export default LogOut;
