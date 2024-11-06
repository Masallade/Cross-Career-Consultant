import React from "react";
import './StepsMainScreen.css';
import CardComponent from "../CardComponent/CardComponent.jsx";
import { faGear,faBriefcase,faComputer,faScaleBalanced,faHospitalUser,faPalette } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const StepsMainScreen=()=>{

    let disciplineContent=[
        {name:'Engineering',detail:'Electrical and electronics, mechanical engineering, chemical engineering and civil engineering',icon:faGear},
        {name:'Business and Management',detail:'Business administration, digital marketing, international business, foreign trade, entrepreneurship',icon:faBriefcase},
        {name:'Information Technology',detail:'Information systems, software engineering and design, programming languages, artificial intelligence',icon:faComputer},
        {name:'Law',detail:'Human rights, cyber law, business law, taxation law, corporate law and management',icon:faScaleBalanced},
        {name:'Medical',detail:'Pharmacy, microbiology, medical lab technology, and biotechnology',icon:faHospitalUser},
        {name:<span>Arts and <br /> Humanities</span>,detail:'Journalism, mass communication, english, geography, history, sociology, political science',icon:faPalette},
 ]

 const top3Discipline=disciplineContent.slice(0,3);
 const bottom3Discipline=disciplineContent.slice(3,6);
   return( <div className="main-div">
    <h1 className="main-div-h1">Popular disciplines among People</h1>
    <div className="top-3">
        {top3Discipline.map((discipline,index)=>{
            return  <CardComponent name={discipline.name} detail={discipline.detail} icon={discipline.icon}/>

        })}
    </div>
    <div className="bottom-3">
        {bottom3Discipline.map((discipline,index)=>{
            return  <CardComponent name={discipline.name} detail={discipline.detail} icon={discipline.icon}/>
        })}
    </div>
    </div>
)}

export default StepsMainScreen