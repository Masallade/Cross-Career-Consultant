import Immigration from '../../assets/slider/Immigration.png';
import decor1 from '../../assets/decor.png';

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home2Immigration() {
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false); // Tracks if the animation has already run
  const controls = useAnimation(); // Controls for Framer Motion
  const imageControls = useAnimation();
  const fullText =
    "There are many legal ways to Canadian immigration i.e. Express Entry, Family Class, Provincial Nomination and Business Immigration. There are many other options to move Canada permanently.<br>Are you looking for Canadian Visa Consultant in Lahore?";
  const [ref, inView] = useInView({ threshold: 0.1 }); // Intersection Observer for text

  // Typewriting Effect - Only first time
  useEffect(() => {
    if (inView && !hasAnimated) {
      setDisplayedText(""); // Reset the displayed text when animation starts
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingInterval);
          setHasAnimated(true); // Mark animation as complete
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [inView, fullText, hasAnimated]);

  // Animation when image/text comes into view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 }); // Trigger text animation
      imageControls.start({ opacity: 1, scale: 1 }); // Trigger image animation
    }
  }, [inView, controls, imageControls]);

  return (
    <div className="lg:h-screen sm:h-[70vh] xs:h-[40vh] xxxxs:h-[30vh] w-screen bg-secondary flex flex-row justify-between items-center ">

        {/* Text with Scroll Reveal and Typewriting Effect */}
      <motion.div
        className="box left-side-box" 
        initial={{ opacity: 0, x: 50 }} // Start from the right with opacity 0
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
        ref={ref} // Intersection Observer reference
      >
        {/* <div className="absolute top-0 rotate-180 left-0 w-full h-[300px]">
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
        </div> */}
        <h2>Immigration</h2>
        <p className="para-responsive text-textColor">{displayedText}</p>

        <div className="box-bottom-image">
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />

        </div>
      </motion.div>
      {/* Image with Scroll Reveal Animation */}

      <motion.div
        className="h-full w-1/2 flex flex-row justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }} // Initial hidden state
        animate={imageControls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
      >
<img 
    className="image-side-box" 
    src={Immigration} 
    alt="Company Logo" 
/>
    </motion.div>

      
    </div>
  );
}
