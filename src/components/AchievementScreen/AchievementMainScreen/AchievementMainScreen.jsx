import { faPlaneCircleCheck, faCircleCheck, faPeopleGroup, faGlobe } from '@fortawesome/free-solid-svg-icons';
import AchievementCard from '../AchievementCard/AchievementCard.jsx';

let achievementContent = [
    { name: 'Project Completed', number: 700, icon: faPlaneCircleCheck },
    { name: 'Years Of Experience', number: 10, icon: faCircleCheck },
    { name: 'Global Immigration', number: 20, icon: faGlobe },
    { name: 'Team Members', number: 100, icon: faPeopleGroup },
];

const AchievementMainScreen = () => {
    return (
            <div className="relative flex flex-col justify-center items-center w-[90%] bg-textColor m-[10vh_5vw_0] rounded-lg overflow-hidden">
                <p className="absolute top-0 heading-responsive">Why choose us</p>
                <div className="absolute right-0 top-0 w-[7.5%] h-[15%] bg-primaryAmber rounded-bl-[100%]"></div>
                <div className="[50%] w-[80%] flex justify-between items-center bg-black rounded-md z-1 m-[12%] ">
                    {achievementContent.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            name={achievement.name}
                            number={achievement.number}
                            icon={achievement.icon}
                        />
                    ))}
                </div>
                <div className="absolute left-0 bottom-0 w-[7.5%] h-[15%] bg-primaryAmber rounded-tr-[100%]"></div>
            </div>
    );
};

export default AchievementMainScreen;
