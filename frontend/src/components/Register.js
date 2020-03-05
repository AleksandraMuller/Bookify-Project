import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const URL = "http://localhost:8080/users";

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorText, setErrorText] = useState(false);
  const history = useHistory();

  const handleRegister = event => {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        res.json();
        if (res.status === 201) {
          history.push("/login");
        } else {
          setErrorText(true);
          throw new Error("Unable to sign Up, please try again");
        }
      })
      .then(json => console.log(json))
      .catch(err => console.log("error:", err));
  };

  return (
    <div>
      <button onClick={() => history.push("/login")}>SIGN IN</button>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      ></input>

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
      <button onClick={event => handleRegister(event)}>REGISTER</button>
      {errorText && <div>Could not add user. Please try again!</div>}
    </div>
  );
};
