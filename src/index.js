import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CreatePersonalRoutine } from "./components/MyRoutines";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getAllActivities, getRoutines } from "./api"
import { Activities, Home, MyRoutines, Routines, NavBar, Login, Register, CreateRoutines,UserPage } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);

  useEffect(async () => {
    const data = await getAllActivities()
    setAllActivities(data)
    console.log(data)
  }, []);

  useEffect(async () => {
    const data = await getRoutines()
    setAllRoutines(data)
  }, []);

  return (
    <Router>
      <div id="App">
        <NavBar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} />

        <Switch>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/activities">
            {/* <SearchBar/> */}
            <Activities 
            setAllActivities={setAllActivities} 
            allActivities={allActivities}/>
          </Route>

          <Route path="/my-routines">
            <CreateRoutines
            setAllRoutines={setAllActivities}
            allRoutines={allRoutines}/> 
            <UserPage 
            setAllRoutines={setAllActivities}
            allRoutines={allRoutines} />
          </Route>

          <Route path="/exp-routines">
            <Routines 
            setAllRoutines={setAllActivities} 
            allRoutines={allRoutines}/>
          </Route>

          <Route path="/login">
            <Login 
            setIsLoggedIn={setIsLoggedIn}/>
          </Route>

          <Route path="/register">
            <Register 
            setIsLoggedIn={setIsLoggedIn}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
