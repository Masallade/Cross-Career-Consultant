import tp3 from "../../assets/TrustedPartner/3.svg";
import tp4 from "../../assets/TrustedPartner/4.svg";
import tp5 from "../../assets/TrustedPartner/5.svg";
import tp6 from "../../assets/TrustedPartner/6.svg";
import tp7 from "../../assets/TrustedPartner/7.svg";
import tp8 from "../../assets/TrustedPartner/8.svg";
import tp9 from "../../assets/TrustedPartner/9.svg";
import tp10 from "../../assets/TrustedPartner/10.svg";

let tpArray = [tp3, tp4, tp5, tp6, tp7, tp8, tp10, tp9];

const TrustedPartners = () => {
  return (
      <div className="xl:h-[50vh] lg:h-[45vh] md:h-[40vh] sm:h-[35vh] xs:h-[30vh] xxs:h-[25vh] xxxs:h-[20vh]  xxxxs:h-[15vh]  bg-black w-full flex flex-col justify-around items-center overflow-hidden">
        {/* Header */}
        <div className=" w-full flex flex-row justify-evenly items-center">

          <div className="h-[2.5%] w-[15%] bg-primaryAmber"></div>
          <p className="heading-responsive text-primaryAmber mx-[2%]">Our Trusted Partners</p>
          <div className="h-[2.5%] w-[15%] bg-primaryAmber"></div>

        </div>

        {/* Image Slider */}
        <div className="flex overflow-hidden mt-6">
          <div className="flex animate-marquee space-x-1">
            {/* First set of images */}
            {tpArray.map((imgSrc, index) => (
              <img key={index} className="h-[100%]" src={imgSrc} alt={`Trusted Partner ${index + 1}`} />
            ))}
            {/* Duplicate set of images for continuous animation */}
            {tpArray.map((imgSrc, index) => (
              <img key={index + tpArray.length} className="h-[100%]" src={imgSrc} alt={`Trusted Partner ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default TrustedPartners;
