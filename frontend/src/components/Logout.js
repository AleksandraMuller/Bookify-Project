import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../reducers/auth";

import { Button } from "../styles/styles_Logout";

export const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //LOG OUT
  const handleLogOut = () => {
    history.push("/login");
    dispatch(auth.actions.setLoggedOut());
  };

  return <Button onClick={handleLogOut}>Log out</Button>;
};
