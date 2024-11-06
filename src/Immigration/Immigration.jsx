import WebsiteStructure from "../domain/website_structure"
import Navbar from "../Navbar/Navbar"
import Young from "../assets/young.png"
import old from "../assets/old.png"
import { Box, Progress, Badge, Stack, Text, Divider, Icon, Center } from '@chakra-ui/react';
import { FaCheckCircle } from "react-icons/fa"; 
import { FaUser } from "react-icons/fa";
 // For step completion icons
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



export default function Immigration(){

  const location = useLocation();
  const immigration = location.state?.immigration;

  useEffect(() => {
    console.log('Received immigration data:', immigration);
  }, [immigration]);

    if (!immigration) {
      return <div>Error: Immigration details not found!</div>;
    }
    return(
        <>
        <div className="
        flex flex-row justify-evenly 
      
        
        absolute top-[15%] z-[10] w-screen h-[80%] bg-background  ">
        <Navbar websitestructure={WebsiteStructure.IMMIGRATION}/>

        <div className="flex flex-row justify-between">
        {/*left side div  */}
        <div className="w-[30%]">
        <AgeLimit ageLimit={immigration.ageLimit}/>
        <EligiblePeople eligiblePeople={immigration.eligiblePeople}/>
        <div className="m-[2%] p-[6%] bg-black rounded-md">
            <Steps steps={immigration.immiSteps.steps}/>
        </div>
        </div>
        
        



        {/*middle side div  */}
        <div className="h-[90%] w-[70%] flex flex-col items-center text-justify m-[4%] text-textColor">
              <h1 className="heading-responsive">{immigration.name}</h1>
            <p className="para-responsive">{immigration.para}</p>

        </div>
        </div>

        {/*right side div  */}
        
        
        </div>
        </>

    )
}


function AgeLimit({ageLimit}){
  console.log('im the agelimt',ageLimit);
  
    return(
        <div className="w-[100%] bg-black rounded-md m-[2%] p-[4%]">
        <h1 className="text-responsive m-[1%] text-navColor">Age Limit:<span className="text-primaryAmber ">{ageLimit} Years</span></h1>

     <div className="h-full w-[100%] flex flex-row justify-between">
    <div className="w-[15%] ">
        <img className="h-full w-full object-contain" src={Young} alt="" />
    </div>
    <Box paddingTop="8" height="xxxxs:20% sm:10%" minWidth="40%">
      <Progress 
        value={ageLimit} 
        size="sm" 
        sx={{ '& > div:first-of-type': { backgroundColor: '#e6b904' } }} // Targets the filled part
       />
    </Box>

    <div className="w-[20%]">
        <img className="h-full w-full object-contain" src={old} alt="" />
    </div>
    
     </div>
    </div>
    )
}


function EligiblePeople({ eligiblePeople }) {
  return (
      <Box padding="4%" borderRadius="md" boxShadow="lg" bg="#e6b904" m="2%">
          <Text className="text-responsive" fontWeight="bold" color="black" mb='1%'>
              Eligible People:
          </Text>

          {eligiblePeople && eligiblePeople.length > 0 ? (
              <Stack direction="row" wrap="wrap" spacing={2} align="flex-start">
                  {eligiblePeople.map((person, index) => (
                      <Badge
                          key={index}
                          variant="solid"
                          display="flex"
                          alignItems="center"
                          bg="black"
                          color="#e6b904"
                          padding="5%"
                          borderRadius="sm"
                          boxShadow="md"
                          transition="all 0.2s"
                          _hover={{
                              transform: "scale(1.05)",
                              bg: "#333",
                              cursor: "pointer",
                          }}
                      >
                          <Text className="para-responsive" fontWeight="bold" color="#e6b904" >
                            {person}
                          </Text>
                      </Badge>
                  ))}
              </Stack>
          ) : (
              <Text color="gray.500" fontStyle="italic">
                  No eligible people found.
              </Text>
          )}
      </Box>
  );
}

function Steps({ steps }) {
  
  return (
    <>
      <h1 className="text-responsive m-[2%] text-navColor">Immigration Steps</h1>

      <Stack spacing={4} maxW="400px" maxH='100%' padding={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        {steps.map((step, index) => (
          <>
            <Step number={index + 1} title={step.Step} description={step.timeline} index={index+1}/>
            <Divider />
            </>
        ))}
      </Stack>
    </>
  );
}




function Step({ title, description,index}) {
  return (
    <Box
    display="flex"
    flex='row'
    >
            <Box
              w={{ base: 12, sm: 8, md: 10, lg: 16 }} // Width changes based on screen size
              h={{ base: 3, sm: 8, md: 10, lg: 12 }}
              borderWidth="2px"
              borderRadius="full"
              borderColor="#e6b904"
              backgroundColor="black"
              display='flex'
              justifyContent='center'
              alignItems='center'
              color='white'
              >
                <Text className="para-responsive">{index}</Text>
                </Box>
        {/* Step Title & Description */}
        <Box marginLeft={2}>
          <Text className="para-responsive text-primaryAmber">{title}</Text>
          <Text className="para-responsive text-navColor">{description}</Text>
        </Box>
    </Box>
  );
}
