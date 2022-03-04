import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    e.prevent.default();

    axios
      .post("http://localhost:9000/api/users/auth/login", form)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("username", resp.data.username);
        push("/dashboard");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          ></input>
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
