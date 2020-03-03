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
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    }
  }
});
