import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  userId: "",
  accessToken: "",
  loggedIn: false
};

export const auth = createSlice({
  name: "auth",
  initialState
});
