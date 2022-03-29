import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";
import getPayloadData from "../utils/tokenPayload";

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  padding: 0 10px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background-color: #fff;
  border-radius: 15px;
  border: 0.2px solid white;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #8fbc8f;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleLoginSubmit(e) {
    console.log("login form function triggered");
    e.preventDefault();

    axios
      .post("http://localhost:9000/api/users/auth/login", form)
      .then((resp) => {
        getPayloadData(resp.data.token);
        return push("/dashboard");
      })
      .catch((err) => console.log("err:", err));
  }

  return (
    <div>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleLoginSubmit}>
          <label>
            Username:
            <StyledInput
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            ></StyledInput>
          </label>
          <label>
            Password:
            <StyledInput
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            ></StyledInput>
          </label>
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </div>
  );
};

export default Login;
