import React from "react";
import Navbar from "../Navbar/Navbar";
import WebsiteStructure from "../domain/website_structure";
import './About.css'
import Lottie from "lottie-react";
import OurPurpose from "../assets/lottie_animation/our_purpose.json";
import OurWork from "../assets/lottie_animation/our_work.json";
import OurClients from "../assets/lottie_animation/our_clients.json";
import MiniBanner from '../assets/mini-banner.png'
import Footer from '../components/footer/footer.jsx'



const client={title:'Our Clients',paragraph:'Clients of The Elite Citizenship include high-net-worth and ultra-high-net worth-individuals and families, entrepreneurs, and investors, as well as top-level managers, artists, and celebrities of the fashion, entertainment, and sports worlds. We also frequently provide our services to other consulting and law firms, private banks, family offices, and other professionals in the private wealth management industry.Many have expressed their gratitude and satisfaction with the services that we provided by writing to us. The following selection of testimonials is drawn from a large collection of client feedback we have received over time and of which we are proud.'}
const purpose={title:'Purpose', paragraph:'Enhancing human potential through global citizenship We work towards a world where a sensible flow of people and capital between countries — for trade, tourism, labor, and investment — contributes to global peace and prosperity and where people live in dignity and security in their countries of birth or countries of choice.'}
const vision={title:'Vision', paragraph:'Enhancing human potential through global citizenship We work towards a world where a sensible flow of people and capital between countries — for trade, tourism, labor, and investment — contributes to global peace and prosperity and where people live in dignity and security in their countries of birth or countries of choice.'}

function About() {
  return(
        <>
       <Navbar websitestructure={WebsiteStructure.ABOUT}/>
       <div className="absolute top-20 flex flex-row justify-center  left-0 w-full h-[100px] bg-black">
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
          <img className="w-full h-full object-contain" src={MiniBanner} alt="Decorative" />
        </div>

         <div className="h-screen w-screen bg-background flex flex-col justify-center mt-[45%] items-center">
            <p className="text-primaryAmber text-[3rem]">About Us</p>
            <p className="text-textColor text-[1.2rem] text-center pb-2">The Elite Citizenship is the global leader in residence and citizenship by investment. Our unwavering commitment to excellence has established us as a trusted provider of top-tier services in citizenship, residence, and business immigration across numerous countries. Hundreds of wealthy individuals and their advisors each year rely on our expertise and experience in this area. With an unparalleled understanding of the complex legal landscape, our highly skilled professionals are equipped to guide you through the intricacies of immigration law, ensuring your journey to a new life is smooth and successful.</p>
        <div className="our-purpose">
            <div className="our-purpose-animation-container">
                <Lottie loop={true} animationData={OurPurpose}/>
            </div>

            <TextDiv title={purpose.title} paragraph={purpose.paragraph} />


        </div>

            <div className="our-vision">
            <TextDiv title={vision.title} paragraph={vision.paragraph} />


            <div className="our-vision-animation-container">
            <Lottie loop={true} animationData={OurWork}/>

            </div>


        </div>


        <div className="our-clients">
        <div className="our-clients-animation-container">
        <Lottie loop={true} animationData={OurClients}/>
        </div>
        <TextDiv title={client.title} paragraph={client.paragraph} />
        </div>


        </div>
        </>
       
                
  )
}

export default About;




function TextDiv({title, paragraph}){
    return(
        <div class="relative flex flex-col justify-center items-center p-5 h-[80%] w-[45%] rounded-r-[20%] rounded-l-none bg-transparent flex justify-center items-start z-10 before:absolute before:bg-background2 before:blur-lg before:z-[-1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-r-[20%] before:rounded-l-none">
        <FormatingText title={title} paragraph={paragraph}/>
        </div>
    )
}




function FormatingText({title, paragraph}){
    console.log(title);

    return(
        <>
        <p className="text-primaryAmber text-[2.2rem] text-center" >{title}</p>
        <p className="text-[1.2rem] text-textColor">{paragraph}</p>
        </>
    );
}