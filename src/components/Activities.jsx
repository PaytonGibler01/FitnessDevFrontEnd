import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";
//import { createActivities } from "../api"

const Activities = ({allActivities, setAllActivities}) => {
  return (
   <div className="ui-container">
     <ul className="activities-main-container">
        {allActivities.length
        ? allActivities.map((activity)=>{
          return (
            <div key={`activity: ${activity.id}`}>
              <Link 
              to={`/${activity.id}`}
              key={activity.id}
              className="link-tag"
              >
            <h2>{activity.name}</h2>
              </Link>
             <p> {activity.description}</p>
             <p>Count: {activity.count}</p>
             <p>Sets: {activity.duration}</p>
            </div>
          )
        })
      :null}
     </ul>
   </div>
  );
};

export default Activities;
