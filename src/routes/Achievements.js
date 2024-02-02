import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import MyAchievements from '../components/MyAchievements';

const Achievements = () => {
  return  (<div>
  <Navbar/>
  <HeroImg2 heading="Achievements" text="A Journey to Success"/>
  <MyAchievements/>
  <Footer/>
</div>
  );
};

export default Achievements