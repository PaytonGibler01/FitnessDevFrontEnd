import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Routines.css";

const Routines = ({allRoutines,setAllRoutines}) => {

  console.log(allRoutines)
  return (
    <div className="ui-container">
     <ul className="routines-main-container">
        {allRoutines.length
        ? allRoutines.map((routine)=>{
          return (
            <div key={`routine:${routine.id}`}>
              <Link 
              to={`/${routine.id}`}
              key={routine.id}
              className="link-tag"
              >
            <h1>{routine.name}</h1></Link>
              <p> {routine.creatorName}</p>
              <p> {routine.goal}</p>

        {routine.activities.length ? routine.activities.map((activity)=>{
          return (
            <div key={`activity: ${activity.id}`}>
            
           <h4>Activities: {activity.name}</h4>
             <p> {activity.description}</p>
             <p>Count: {activity.count}</p>
             <p>Sets: {activity.duration}</p>
            </div>
             )
            }): null}
          </div>
            
          )
        })
      :null}
     </ul>
   </div>
  );
};

export default Routines;
