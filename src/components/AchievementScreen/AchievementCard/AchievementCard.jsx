import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AchievementCard = ({ name, number, icon }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // Start the animation
        }
      },
      { threshold: 0.5 }  // Adjust threshold as per your need
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(number); // The target number
    if (start === end) return; // If already at the end, exit

    let incrementTime = Math.abs(Math.floor(1000 / end)); // Speed of the counter
    let timer = setInterval(() => {
      start += 1;
      setCurrentNumber(start);
      if (start === end) clearInterval(timer); // Stop once reached end
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [isVisible, number]);

  return (
    <div className="flex flex-col items-center justify-betweens p-[5%]" ref={cardRef}>
      <div className="rounded-sm xxxs:rounded-md xxxs:w-[80%] sm:w-[100%] w-[70%] h-[20%] flex flex-row items-center justify-center bg-textColor p-[5%] ">
        <FontAwesomeIcon className="icon-responsive" icon={icon} />
      </div>
      <div className="flex flex-row  justify-center items-center py-4">
        <p className="text-responsive text-textColor ">{currentNumber}</p>
        <p className="text-responsive text-textColor">+</p>
      </div>
      <p className="text-responsive text-primaryAmber">{name}</p>
    </div>
  );
};

export default AchievementCard;
