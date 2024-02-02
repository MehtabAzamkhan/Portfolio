import "./AchievementsStyles.css";
import AchievementsCard from "./AchievementsCard";
import React from 'react';
import AchievementsCardData from "./AchievementsCardData";




const MyAchievements = () => {
  return     <div className="achievementsWork-container">
    <h1 className="achievements-heading">Skies are Limit</h1>
    <div className="achievements-container">
        {AchievementsCardData.map((val,ind) =>{
            return(
                <AchievementsCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                source={val.source}
                />
            )
        })}
    </div>
    </div>;
  
};

export default MyAchievements;