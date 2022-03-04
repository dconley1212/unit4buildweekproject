import React from "react";
import axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    phone_number: "",
    error: "",
  };

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.phone_number === ""
    ) {
      this.setError("Each field is required to register");
    }
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/users/auth/register", this.state)
      .then((res) => {
        this.props.history.push("/login");
      })
      .catch((err) =>
        this.setState({
          ...this.state,
          error: err.data.error,
        })
      );
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Create username:
            <input
              type="text"
              name="username"
              value={this.username}
              onChange={this.handleChanges}
            ></input>
          </label>
          <label>
            Create password:
            <input
              type="password"
              name="password"
              value={this.password}
              onChange={this.handleChanges}
            ></input>
          </label>
          <label>
            Phone number for two-step authentication:
            <input
              type="tel"
              name="phone_number"
              value={this.phone_number}
              onChange={this.handleChanges}
            ></input>
          </label>
          <button>Create Account</button>
        </form>
        <p>{this.error}</p>
      </div>
    );
  }
}

export default Register;
