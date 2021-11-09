import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Activities, Home, MyRoutines, Routines } from "./components";

const App = () => {
  return (
    <Router>
      <div id="App">
        <Switch>

          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/Activities">
            <Activities/>
          </Route>

          <Route path="/MyRoutines">
            <MyRoutines/>
          </Route>

          <Route path="/Routines">
            <Routines/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
