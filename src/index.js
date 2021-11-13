import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Activities, Home, MyRoutines, Routines, NavBar, Login, Register } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div id="App">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

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

          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn}/>
          </Route>

          <Route path="/register">
            <Register setIsLoggedIn={setIsLoggedIn}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
