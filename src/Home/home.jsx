import { useEffect, useState } from "react";
import Background from "../components/introduction_screen/Background/Background.jsx";
import Navbar from "../components/introduction_screen/Navbar/Navbar.jsx";
import Hero from "../components/introduction_screen/Hero/Hero.jsx";
import StepsMainScreen from "../components/StepsScreen/StepsMainScreen/StepsMainScreen.jsx";
import AchievementMainScreen from "../components/AchievementScreen/AchievementMainScreen/AchievementMainScreen.jsx";
import ImigrationAreasMain from "../components/ImigrationAreas/ImigrationAreasMain/ImigrationAreasMain.jsx";
import TrustedPartners from "../components/TrustedPartners/TrustedPartners.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import AdditionalServices from "../components/AdditionalServices/Main/AdditionalServices.jsx";
import Footer from "../components/footer/footer.jsx";
import WebsiteStructure from "../domain/website_structure.js";


const Home=()=>{
  let heroData=[
    {text1:"Design your future abroad",text2:"empower your engineering career globally!"},
    {text1:"Unlock your international potential",text2:"study, grow, and thrive overseas!"},
    {text1:"Practice medicine where it matters",text2:"expand your healing hands worldwide"},
    
  ]

  useEffect(()=>{
    setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})},
    5000
  )},[])

  const [heroCount,setHeroCount]=useState(0);
  const [playStatus,setPlayStatus]=useState(false);

  return(
    <div className="app-main-div">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar websitestructure={WebsiteStructure.HOME}/>
      <Hero
       setPlayStatus={setPlayStatus}
       setHeroCount={setHeroCount}
       heroCount={heroCount}
       playStatus={playStatus}
       heroData={heroData[heroCount]}
       />
      <StepsMainScreen/>
      <AchievementMainScreen/>
      <ImigrationAreasMain/>
      <TrustedPartners/>
      <AdditionalServices/>
      <Testimonials/>
      <Footer/>


    </div>
  )
}

export default Home;