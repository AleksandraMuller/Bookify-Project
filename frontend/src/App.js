import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { Main } from "./components/Main";
import { auth } from "./reducers/auth";

const reducer = combineReducers({
  auth: auth.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
