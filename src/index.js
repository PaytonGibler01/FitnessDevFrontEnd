import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Activities, Home, MyRoutines, Routines, NavBar } from "./components";

const App = () => {
  return (
    <Router>
      <div id="App">
        <NavBar/>

        <Switch>

          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/Activities">
            <Activities/>
          </Route>

          <Route path="/my-routines">
            <MyRoutines/>
          </Route>

          <Route path="/exp-routines">
            <Routines/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
