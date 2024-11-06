import { useState, useEffect } from 'react';

import decor1 from '../../assets/decor.png'

import usFlag from "../../assets/us.svg";
import auFlag from "../../assets/au.svg";
import caFlag from "../../assets/ca.svg";
import dkFlag from "../../assets/dk.svg";
import fiFlag from "../../assets/fi.svg";
import frFlag from "../../assets/fr.svg";
import gbFlag from "../../assets/gb.svg";
import glFlag from "../../assets/gl.svg";
import ieFlag from "../../assets/ie.svg";
import isFlag from "../../assets/is.svg";
import itFlag from "../../assets/it.svg";
import ptFlag from "../../assets/pt.svg";
import trFlag from "../../assets/tr.svg";

const flagImages = [
    usFlag, auFlag, caFlag, dkFlag, fiFlag, frFlag,
    gbFlag, glFlag, ieFlag, isFlag, itFlag, ptFlag, trFlag
];

const flagNames = [
    'United States', 'Australia', 'Canada', 'Denmark', 'Finland', 'France', 
    'United Kingdom', 'Greenland', 'Ireland', 'Iceland', 'Italy', 'Portugal', 'Turkey'
];

const paragraph=`The civil national flag of Icelanders is blue as the sky with a snow-white cross, and a fiery-red cross inside the white cross. The arms of the cross extend to the edge of the flag, and their combined width is 2⁄9, but the red cross 1⁄9 of the combined width of the flag.`;

const ImigrationAreasMain = () => {
    const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % flagImages.length);
                setAnimate(true);
            }, 1000);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="lg:h-screen sm:h-[70vh] xxxxs:h-[40vh] w-screen flex justify-evenly items-center">
            {/* Immigration Details */}
            <div className="box left-side-box">
                <h2>VISA</h2>
                <p className='para-responsive text-textColor'>{paragraph}</p>
                <div className="box-bottom-image">
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />
          <img className="w-full h-full object-contain" src={decor1} alt="Decorative" />

        </div>
                
            </div>

            {/* Country Flags */}
                <div className="immigration-areas-flags">
                    <img
                        className={`h-[80%] ${animate ? 'animate-flag' : ''}`}
                        src={flagImages[currentFlagIndex]}
                        alt="Country flag"
                    />
                    <p className="text-responsive  text-primaryAmber mt-4">
                        {flagNames[currentFlagIndex]}
                    </p>
            </div>
        </div>
    );
};

export default ImigrationAreasMain;
