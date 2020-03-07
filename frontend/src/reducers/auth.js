import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: localStorage.getItem("name"),
  email: "",
  userId: "",
  accessToken: localStorage.getItem("accessToken"),
  loggedIn: true,
  reviewId: ""
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      // Did you know is using immer library underneath? I didn't hehe, was just reading it, it's a pretty cool library.
      // Allows you to do this "mutation" straight into the state. Did we talk about immutability already?
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = true;
    },
    setLoggedOut: (state, action) => {
      state.loggedIn = false;
      localStorage.clear();
      sessionStorage.clear();
    },
    setName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("name", action.payload);
    },
    setReviewId: (state, action) => {
      state.reviewId = action.payload;
    }
  }
});
