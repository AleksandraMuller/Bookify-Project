import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { Main } from "./components/Main";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";
import { Details } from "./components/Details";
import { Profile } from "./components/Profile";

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
          {/* // When you don't need to send props to the component of a route, you can use this format:
              // <Route exact path="/" component={Main} />
              // It'll save you some lines
          */}
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
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
