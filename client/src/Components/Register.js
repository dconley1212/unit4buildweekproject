import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledRegisterWrapper = styled.div`
  margin: 5rem 25rem;
  background-color: #ffffff;
  height: 48vh;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
`;

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  padding: 4rem;
`;

const StyledRegisterInput = styled.input`
  display: block;
  height: 1rem;
  border-radius: 5px;
  border: 1px;
  background-color: #eee;
  width: 100%;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledRegisterButton = styled.button`
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid black;
  color: #000000;
  background-color: #8fbc8f;
  font-size: 1rem;
`;

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    phone_number: "",
  };

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/users/auth/register", this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <StyledRegisterWrapper>
          <StyledRegisterForm onSubmit={this.handleSubmit}>
            <label>
              Create username:
              <StyledRegisterInput
                type="text"
                name="username"
                value={this.username}
                onChange={this.handleChanges}
              ></StyledRegisterInput>
            </label>
            <label>
              Create password:
              <StyledRegisterInput
                type="password"
                name="password"
                value={this.password}
                onChange={this.handleChanges}
              ></StyledRegisterInput>
            </label>
            <label>
              Phone number:
              <StyledRegisterInput
                type="tel"
                name="phone_number"
                value={this.phone_number}
                onChange={this.handleChanges}
              ></StyledRegisterInput>
            </label>
            <StyledRegisterButton>Create Account</StyledRegisterButton>
          </StyledRegisterForm>
        </StyledRegisterWrapper>
        <p>{this.error}</p>
      </div>
    );
  }
}

export default Register;
