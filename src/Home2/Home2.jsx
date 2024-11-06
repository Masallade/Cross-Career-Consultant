import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import WebsiteStructure from '../domain/website_structure';

import StudentVisa from '../assets/slider/slider_student.png';
import ImmigrationPic from '../assets/slider/slider_immigration.png';
import Country from '../assets/slider/slider_country.png';

import AchievementMainScreen from "../components/AchievementScreen/AchievementMainScreen/AchievementMainScreen.jsx";
import ImigrationAreas from '../components/ImigrationAreas/ImigrationAreas.jsx';
import TrustedPartners from "../components/TrustedPartners/TrustedPartners.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Footer from "../components/footer/footer.jsx";
import Home2AboutUs from './AboutUS/AboutUs.jsx';
import Home2Immigration from './Immigration/Immigration.jsx';

export default function Home2() {
    const sliderData = [
        StudentVisa,
        ImmigrationPic,
        Country
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const transitionDuration = 3000; // in milliseconds, match with CSS transition

    const nextSlide = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
            setIsAnimating(false);
        }, transitionDuration); // Duration should match the CSS transition duration
    };

    const prevSlide = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
            setIsAnimating(false);
        }, transitionDuration); // Duration should match the CSS transition duration
    };

    // Optional: Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative bg-background min-h-screen w-full flex flex-col items-center overflow-hidden">
            <Navbar websitestructure={WebsiteStructure.HOME} />
            <Slider
                pic={sliderData[currentSlide]}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                isAnimating={isAnimating}
                transitionDuration={transitionDuration}
            />
            <Home2AboutUs/>
            <Home2Immigration/>
            <AchievementMainScreen/>
            <ImigrationAreas/>
            <TrustedPartners/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

const Slider = ({ pic, nextSlide, prevSlide, isAnimating, transitionDuration }) => {
    return (
        <div className={`
             lg:h-[90vh]  xxxxs:h-[40vh] xxxs:h-[50vh] xxs:h-[55vh] xs:h-[60vh] sm:h-[65vh] md:h-[70vh] md:flex md:flex-col md:items-center md:justify-center
        relative w-full mt-[6%] transition-opacity duration-[${transitionDuration}ms]  overflow-hidden ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <img src={pic} alt='Slide' className={`sticky max-w-full object-cover  transition-opacity duration-[${transitionDuration}ms]`} />
            <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-5 box-border">
                {/* <button onClick={prevSlide} className="bg-black/50 text-white border-none px-4 py-2 mx-2 text-lg cursor-pointer rounded transition-colors duration-500 hover:bg-[#f36e38b3]">
                    &#10094; Prev
                </button>
                <button onClick={nextSlide} className="bg-black/50 text-white border-none px-4 py-2 mx-2 text-lg cursor-pointer rounded transition-colors duration-500 hover:bg-[#f36e38b3]">
                    Next &#10095;
                </button> */}
            </div>
        </div>
    );
};
