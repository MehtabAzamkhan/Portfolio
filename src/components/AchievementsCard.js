import "./AchievementsStyles.css";

import React from 'react';

// import { NavLink } from "react-router-dom";


const AchievementsCard = (props) => {
  return    (
    <div className="projectachievements-card">
    <img src={props.imgsrc} alt=""/>
    <h2 className="projectachievements-title">{props.title}</h2>
    <div className="proachievements-details">
      <p>{props.text}</p> 
      {/* <div className="proachievements-btns">
       <NavLink to={props.source}
       className="btn2">Source</NavLink>
      </div> */}
      </div>
  </div>
  );
};

export default AchievementsCard;