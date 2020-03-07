import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../reducers/auth";

export const BuyLink = props => {
  const { sales } = props;

  return (
    <a href={sales === undefined ? "Not available in store" : `${sales}`}>
      Buy
    </a>
  );
};
