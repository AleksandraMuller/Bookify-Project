import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../reducers/auth";

const URL = "http://localhost:8080/sessions";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLoginUser = async event => {
    event.preventDefault();

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setErrorText(true);
          throw new Error("Unable to login, please try again");
        }
      })
      .then(json => {
        history.push("/welcome");
        console.log(json);
        dispatch(auth.actions.setLoggedIn(json.loggedIn));
        dispatch(auth.actions.setToken(json.accessToken));
        dispatch(auth.actions.setUser(json.userId));
        dispatch(auth.actions.setName(json.name));
      })
      .catch(err => console.log("error:", err));
  };

  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      ></input>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      ></input>
      <button onClick={event => handleLoginUser(event)}>Login</button>
      {errorText && <div>User not found, access forbidden</div>}
      <button onClick={() => history.push("/register")}>
        Sign up for an account
      </button>
    </div>
  );
};
