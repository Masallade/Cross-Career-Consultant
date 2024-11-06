import tes1 from '../../assets/Testinomial/tes1.png';
import tes2 from '../../assets/Testinomial/tes2.png';
import tes3 from '../../assets/Testinomial/tes3.png';

import tesDecor1 from '../../assets/Testinomial/testinomial_decor/1.png';
import tesDecor2 from '../../assets/Testinomial/testinomial_decor/2.png';
import tesDecor3 from '../../assets/Testinomial/testinomial_decor/3.png';

import { useState, useEffect } from 'react';

// Image and Text Arrays
const tesImages = [tes1, tes2, tes3];
const testDecor = [tesDecor1, tesDecor2, tesDecor3];
const tesText = [
  'Mr. Sikander Lalani has a career span of over 40 years...',
  'Lalani & Associates is one of the best immigration consultants in Pakistan...',
  'We have offices in Pakistan and the United Arab Emirates...'
];

// Function to truncate long text
const Truncate = (text) => {
  return text.length > 100 ? `${text.slice(0, 100)}...` : text;
};

const Testimonials = () => {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [currentDecorIndex, setCurrentDecorIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(false); // Disable animation before switching content
      setTimeout(() => {
        setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % tesImages.length);
        setCurrentDecorIndex((prevIndex) => (prevIndex + 1) % testDecor.length);
        setAnimate(true); // Re-enable animation after switching content
      }, 500); // Delay before image and text change
    }, 2000); // Interval for each switch

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:h-screen  sm:h-[70vh] xxxxs:h-[30vh] xs:h-[60vh] xxs:h-[50vh]  w-screen flex flex-col items-center">
      <h1 className="text-primaryAmber heading-responsive">Testimonials</h1>

      <div className="h-[70%] w-[100%] flex flex-row items-center justify-evenly">
        {/* Left Decoration Image */}
        <div className='h-[100%] w-[60%] rounded-lg relative'>
          <img
            className={`h-full w-full object-contain transition-transform duration-500 ease-in-out ${
              animate ? 'scale-100 translate-y-0' : 'scale-0 translate-y-full'
            }`}
            src={testDecor[currentDecorIndex]}
            alt="Decoration"
          />
        </div>

        {/* Text and Profile Image */}
        <div className="sm:h-[60%] sm:w-[30%] xxxs:h-[50%] xxxs:w-[30%] xxxxs:h-[50%] xxxxs:w-[40%] 
        
        relative bg-black rounded-lg flex flex-col justify-between items-center border-2 border-primaryAmber border-solid">
          <p
            className={`z-10 para-responsive mx-[2%] text-textColor italic break-words text-center leading-relaxed max-w-full overflow-hidden relative before:content-['“'] after:content-['”'] before:para-responsive after:para-responsive before:mr-1 after:ml-1 ${
              animate ? 'animate-text' : ''
            }`}
          >
            {Truncate(tesText[currentFlagIndex])}
          </p>

          <div
           className={`
            md:bottom-[-25%] bottom-[-30%]
            sm:h-[60%] sm:w-[50%] xxxxs:h-[50%] xxxxs:h-[30%]  
              absolute rounded-md   border-primaryAmber border-solid border-2 overflow-hidden`}
>
  <img
    className={`object-cover h-full w-full ${animate ? 'animate-flag' : ''}`}
    src={tesImages[currentFlagIndex]}
    alt="Testimonial"
  />
</div>

        </div>

        {/* Right Decoration Image */}
        <div className='h-[100%] w-[60%] rounded-lg relative'>
          <img
            className={`h-full w-full object-contain transition-transform duration-500 ease-in-out ${
              animate ? 'scale-100 translate-y-0' : 'scale-0 translate-y-full'
            }`}
            src={testDecor[currentDecorIndex]}
            alt="Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
