import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { Main } from "./components/Main";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";
import { Details } from "./components/Details";
import { auth } from "./reducers/auth";

const reducer = combineReducers({
  auth: auth.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/details/:bookId" exact>
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
