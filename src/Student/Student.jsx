import { Box } from "@chakra-ui/react";
import ukFlag from '../assets/uk_flag.png';
import eurFlag from '../assets/europe_flag1.png';
import norFlag from '../assets/norway_flag.png';
import finFlag from '../assets/finland_flag.png';
import ausFlag from '../assets/aus_flag.png';
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../components/footer/footer.jsx'
import { useState, useEffect } from "react";

const flagList = [ukFlag, eurFlag, norFlag, finFlag, ausFlag];

const flagEnum = Object.freeze({
    TOPLEFT: 'topLeft',
    BOTTOMLEFT: 'bottomLeft',
    CENTER: 'center',
    TOPRIGHT: 'topRight',
    BOTTOMRIGHT: 'bottomRight',
});

export default function Student() {
    const [topLeft, setTopLeft] = useState(0);
    const [topRight, setTopRight] = useState(1);
    const [bottomLeft, setBottomLeft] = useState(2);
    const [bottomRight, setBottomRight] = useState(3);
    const [center, setCenter] = useState(4);
    const [index, setIndex] = useState(0);

    const array = [
        { val: topLeft, method: setTopLeft },
        { val: topRight, method: setTopRight },
        { val: bottomLeft, method: setBottomLeft },
        { val: bottomRight, method: setBottomRight },
        { val: center, method: setCenter }
    ];

    const updateImage = (currentIndex, setState) => {
        setState(currentIndex === 4 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateImage(array[index].val, array[index].method);
            setIndex(prevIndex => (prevIndex === 4 ? 0 : prevIndex + 1));
        }, 2000); // Adjust timing if needed

        return () => clearInterval(interval);
    }, [index]);

    return (
        <>        
        <Navbar/>
        <div className="relative w-screen h-[80%] mt-[5%] bg-primaryAmber flex flex-row overflow-hidden">
            <ImageBox type={flagEnum.TOPLEFT} imgSrc={flagList[topLeft]} zValue={1} />
            <ImageBox type={flagEnum.BOTTOMLEFT} imgSrc={flagList[bottomLeft]} zValue={2} />
            <ImageBox type={flagEnum.TOPRIGHT} imgSrc={flagList[topRight]} zValue={2} />
            <ImageBox type={flagEnum.BOTTOMRIGHT} imgSrc={flagList[bottomRight]} zValue={1} />
            <ImageBox type={flagEnum.CENTER} imgSrc={flagList[center]} zValue={0} />
            <div className="w-full h-screen z-[3] flex flex-row justify-center items-center">
  <div className="flex flex-col items-center justify-evenly overflow-y-auto h-full no-scrollbar">
    <LeftContantHolder />
    <LeftContantHolder />
    <LeftContantHolder />
  </div>

           
                <div className="z-10 w-2 h-screen bg-black bg-opacity-40">
                </div>
                <div className="flex flex-col items-center justify-evenly overflow-y-auto h-full no-scrollbar">

            <RightContantHolder/>    
            <RightContantHolder/>   
            <RightContantHolder/>   
            </div>
            </div>
        </div>
        <Footer/>
        </>

    );
}

function ImageBox({ type, imgSrc, zValue }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Toggle animation by resetting 'animate' when imgSrc changes
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 1000); // Duration should match animation time

        return () => clearTimeout(timeout);
    }, [imgSrc]);

    return (
        <Box
            position="absolute"
            zIndex={zValue}
            w={`${type === flagEnum.BOTTOMRIGHT || type === flagEnum.TOPLEFT ? '40%' : type === flagEnum.CENTER ? '58%' : '30%'}`}
            h={`${type === flagEnum.BOTTOMRIGHT || type === flagEnum.TOPLEFT ? '80%' : type === flagEnum.CENTER ? "120%" : "60%"}`}
            bg="black"
            top={`${type === flagEnum.TOPLEFT || type === flagEnum.TOPRIGHT ? '-74px' : ""}`}
            left={`${type === flagEnum.BOTTOMLEFT || type === flagEnum.TOPLEFT ? '-90px' : ""}`}
            right={`${type === flagEnum.BOTTOMRIGHT || type === flagEnum.TOPRIGHT ? '-90px' : type === flagEnum.CENTER ? "23%" : ""}`}
            bottom={`${type === flagEnum.BOTTOMRIGHT || type === flagEnum.BOTTOMLEFT ? '-74px' : type === flagEnum.CENTER ? "-40%" : ""}`}
            borderRadius="50%"
            border="2px solid black"
            boxShadow="3xl"
            overflow="hidden"
            animation={animate ? "slideIn 1s ease-in-out" : "none"} // Apply animation conditionally
            
        >
            <img
                className="absolute inset-0 w-full h-full object-cover "
                src={imgSrc}
                alt=""
            />
        </Box>
    );
}


const LeftContantHolder=()=>{
    return(
        <div className="flex flex-row justify-start items-center my-8">
            <div className="h-72 w-96 rounded-3xl bg-secondary2 bg-opacity-60 backdrop-blur-sm relative right-[-25px] border-2 border-black">
            </div>
            <div className="w-16 h-16 bg-black rounded-[50%] ml-auto"></div>
            <div className="h-2 w-24 bg-black"></div>            
        </div>
    );
}

const RightContantHolder=()=>{
    return(
        <div className="flex flex-row items-center justify-start my-8">
        <div className="h-2 w-24 bg-black"></div> 
        <div className="w-16 h-16 bg-black rounded-[50%] ml-auto"></div>
        <div className="flex flex-row justify-start items-center "></div>
            <div className="h-72 w-96 rounded-3xl bg-secondary2 bg-opacity-60 backdrop-blur-sm relative left-[-25px] border-2 border-black">
            </div>
            </div>
                      
    );
}