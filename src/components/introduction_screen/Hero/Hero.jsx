import { useEffect } from 'react';
import './Hero.css';
import arrow_btn from'../../../assets/arrow_btn.png';
import play_icon from'../../../assets/play_icon.png';
import pause_icon from'../../../assets/pause_icon.png';

const Hero = ({ setPlayStatus, setHeroCount, heroCount, playStatus, heroData }) => {

    // Add useEffect to log heroCount when it updates
    useEffect(() => {
        console.log("Updated heroCount:", heroCount);
    }, [heroCount]);

    return (
        <div className='hero'>
            <div className="hero-text">
                <p className='hero-text-p1'>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-bottom-section">
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrow_btn} alt=""/>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt=''/>
                    <p>See the Video</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Hero;
