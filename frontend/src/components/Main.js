import React from "react";
import { useHistory } from "react-router-dom";

export const Main = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/login")}>Log in</button>
      <button onClick={() => history.push("/register")}>Register</button>
    </div>
  );
};
