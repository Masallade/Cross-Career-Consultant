// router_manager.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "../../About/About";
import ContactUs from "../../ContactUs/ContactUs";
import Home2 from "../../Home2/Home2"
import Immigration from "../../Immigration/Immigration";
import WorkPermit from "../../WorkMermit/WorkPermit";
import Student from "../../Student/Student";

function RouterManager() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/student" element={<Student/>}/>
        <Route path="/workpermit/uk" element ={<WorkPermit/>}/>
        <Route path="/workpermit/aus" element ={<WorkPermit/>}/>
        <Route path="/workpermit/can" element ={<WorkPermit/>}/>
        <Route path="/workpermit/sch" element ={<WorkPermit/>}/>
        <Route path="/immigration/uk" element={<Immigration/>}/>
        <Route path="/immigration/aus" element={<Immigration/>}/>
        <Route path="/immigration/can" element={<Immigration/>}/>
        <Route path="/immigration/sch" element={<Immigration/>}/>
        <Route path="/immigration" element={<Immigration/>}/>

        <Route path="/" element={<Home2/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default RouterManager;
