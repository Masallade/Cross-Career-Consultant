import { Box, HStack, Button } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar.jsx";
import WebsiteStructure from "../domain/website_structure.js";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const optionList = ['Description', 'Eligibility', 'WorkPermit', 'Documents Required', 'Application Process'];

export default function WorkPermit() {
    const location = useLocation();
    const immigration = location.state?.immigration;

    const [isVisible, setIsVisible] = useState(true);
    const [selectedComponent, setSelectedComponent] = useState('Description');
    const [nextComponent, setNextComponent] = useState(null);

    useEffect(() => {
        if (immigration) {
            console.log('Received immigration data:', immigration);
        }
    }, [immigration]);

    function handleClick(option) {
        if (option === selectedComponent) return;

        setNextComponent(option);
        setIsVisible(false);
    }

    useEffect(() => {
        if (!isVisible && nextComponent) {
            const timeoutId = setTimeout(() => {
                setSelectedComponent(nextComponent);
                setIsVisible(true);
                setNextComponent(null);
            }, 500);

            return () => clearTimeout(timeoutId);
        }
    }, [isVisible, nextComponent]);

    if (!immigration) {
        return <div>Error: Immigration details not found!</div>;
    }

    return (
        <>
            <Navbar websitestructure={WebsiteStructure.WorkPermit} />
            <Box position="relative" height="100vh" width="100vw">
                <HStack
                    position="absolute"
                    top="55%"
                    transform="translateY(-50%)"
                    spacing="0"
                    height="90%"
                    width="100%"
                    backgroundColor="teal.500"
                    overflow="hidden"
                >
                    <Box 
                        position="relative"
                        height="100%" 
                        width="40%" 
                        background="black"
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection="column"
                    >
                        {optionList.map((option) => (
                            <Button
                                onClick={() => handleClick(option)}
                                key={option}
                                m="4"
                                w="230px"
                                bg="#e6b904"
                                borderRadius="lg"
                                boxShadow="md"
                                _hover={{
                                    transform: "scale(1.05)",
                                    boxShadow: "lg"
                                }}
                                _active={{
                                    transform: "scale(0.98)",
                                    boxShadow: "sm"
                                }}
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>

                    <Box 
                        position="absolute"
                        left="25%"
                        borderLeftRadius="200px"
                        height="100%"
                        width="75%"
                        background="#f8faff"
                    />

<Box 
    position="absolute"
    left={isVisible ? "25%" : "100%"}
    borderLeftRadius="200px"
    height="100%"
    width={isVisible ? "75%" : "0%"}
    background="#e6b904"
    transition="width 0.5s ease, left 0.5s ease"
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='space-around'
    overflow="hidden" // Hide content overflow during transition
>
    {isVisible && (
        <>
            {selectedComponent === 'Description' && <DescriptionComponent title="Description" description={immigration.overallDescription}/>}
            {selectedComponent === 'WorkPermit' && <WorkPermitComponent workPermitInfo={immigration.workPermitInfo}/>}
            {selectedComponent === 'Eligibility' && <EligibilityComponent eligibility={immigration.eligibility}/>}
            {selectedComponent === 'Documents Required' && <DocAppComponent list={immigration.documentRequired}/>}
            {selectedComponent === 'Application Process' && <DocAppComponent list={immigration.applicationProcess}/>}
        </>
    )}
</Box>

                </HStack>
            </Box>
        </>
    );
}

// Other components (DescriptionComponent, WorkPermitComponent, EligibilityComponent, DocAppComponent, DocAppProcess) remain the same





function DescriptionComponent({title,description}){
    console.log(description);
    
    return(
        <div className= {`m-2 flex flex-col items-center p-4 rounded-lg ${title==='Description'?'':'border border-black w-[40%]'}  `}>
        <h1 className="heading-responsive text-black mb-2">{title}</h1>
            <p className="text-2xl text-greyColor leading-relaxed text-center">{description}</p>
            </div>
    );
}



function WorkPermitComponent({workPermitInfo}){
    
    return(
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl text-black relative bottom-10">Work Permit Visas</h1>
            <div className="flex flex-row items-center justify-between">
            <DescriptionComponent title={workPermitInfo[0].name} description={workPermitInfo[0].desc}/>
            <DescriptionComponent title={workPermitInfo[1].name} description={workPermitInfo[1].desc}/>

            </div>
        </div>
        
    );
}

function EligibilityComponent({eligibility}){
    
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-black text-4xl">Eligibilty</h1>
            <div className="flex flex-row p-2 rounded-lg ">
            <EligibilityData title={'Language'} value={eligibility.language}/>
            <EligibilityData title={'Qualification'} value={eligibility.minQualification}/>
            <EligibilityData title={'Experience'} value={eligibility.minExperience}/>
            </div>

                <div className="p-2 bg-primaryAmber border border-greyColor rounded-lg m-2">

                
            <p className="text-black text-2xl p-2">Profession:
          <span>
        {eligibility.profession.map((pro) => (
            <span className="text-navColor bg-black p-2 rounded-lg m-2" >{pro}</span>
        ))}</span>
        </p>
        </div>
        </div>    );
}

function EligibilityData({title,value}){
    return(
        <div className="bg-primaryAmber rounded-lg p-2 m-2 border border-greyColor ">
        <p className="text-black text-2xl m-2">{title}:<span className="text-navColor bg-black p-2 rounded-lg"> {value} </span> </p>
        </div>    
    );
}



function DocAppComponent({list}){
console.log('nmnmnmnm',list);
    return(
        <div className="relative">
        <hr className="border-black"/>
        <div className="flex flex-row justify-center items-centers">
        {list.slice(0,3).map((listElement,index)=>
        <DocAppProcess title={listElement} index={index+1} />
        )}
        </div>
        <hr className="border-black"/>
        <div className="flex flex-row justify-center items-centers">
        {list.slice(3).map((listElement,index)=>
        <DocAppProcess title={listElement} index={index+4} />
        )}        </div>
        </div>

    );
}

function DocAppProcess({title,index}){
    return(
      
            <div className="relative bottom-10  items-center flex flex-col mx-4">
              <div className="
              lg:w-16 md:w-12 sm:w-10 xs:w-11 xxs:w-8 xxxs:w-6 xxxxs:w-4
              lg:h-12 md:h-10 sm:h-9 xs:h-8 xxs:h-7 xxxs:h-6 xxxxs:h-4
              lg:top-[40px] md:top-[33px] sm:top-[30px] xs:top-[27px] xxs:top-[24px] xxxs:top-[21px] xxxxs:top-[13px]


              relative  bg-black rounded-b-[30px] shadow-lg"></div>
              <div className="
              
              lg:w-52 lg:h-44  md:w-36 md:h-28  sm:w-28 sm:h-24  xs:24- xs:h-20  xxs:w-20 xxs:h-20  xxxs:w-16 xxxs:h-20  xxxxs:w-12 xxxxs:h-16
              
              bg-white rounded-[20px] z-[1] backdrop-blur-sm bg-opacity-40 
              flex flex-col justify-evenly items-center">
                <p className="text-[#e6b904] text-responsive absolute top-0 bottom-1">{index}</p>
                <p className="text-responsive text-black text-center">
                {title}
                </p>
                
              </div>
            </div>
          
    );
}