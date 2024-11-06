import React, { useState, useEffect } from "react";
import Logo from '../assets/logo.png';
import WebsiteStructure from '../domain/website_structure';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { canImmi,ukImmi,ausImmi,schImmi } from "../mappers/ImmigrationMapper";
import { canWorkPermit, ukWorkPermit, schWorkPermit, ausWorkPermit } from "../mappers/WorkPermitMapper";

const immigrationObjList=[
    canImmi,
    ukImmi,
    ausImmi,
    schImmi
]

const workpermitObjList=[
  canWorkPermit,
  ukWorkPermit,
  schWorkPermit,
  ausWorkPermit
]


const ProfessionalsData=[
    'Doctors',
    'Nurses',
    'Lawyers',
    'Engineers',
    'Business Man',
    'Paramedics staff',]

const studentData=[
    'UK',
    'Canada',
    'Australia',
    'scandinavian',
    'Europe',
    ]

const residencyData=[
    'UK Business Investment',
    'portugal D2 Visa (Entrepreneur Visa)',
    'portugal D7 Visa (Retirement or Passive Income Visa)',
    'portugal D9 Visa (Golden Visa)',
    ]
    

const Navbar = ({ websitestructure }) => {
    const [isSticky, setIsSticky] = useState(false);

    

    useEffect(() => {
        const handleScroll = () => {
            // Add sticky class when scrolled past 100px
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={` xxxxs:h-[10%] sm:h-[15%]
        fixed left-0 top-0 z-10  w-full flex flex-row justify-between items-center bg-navColor transition-all duration-900 ease-in-out ${isSticky ? "bg-background h-[8%] px-[10px]" : ""}`}>
            <img className={`

            lg:h-[140px] lg:w-[180px]   md:h-[100px] md:w-[140px]  sm:h-[80px] sm:w-[100px] xs:h-[70px] xs:w-[90px]   xxs:h-[50px] xxs:w-[70px] xxxs:h-[40px] xxs:w-[60px] xxxxs:h-[40px] xxxxs:w-[50px] 
              my-[2%] 
              relative  object-contain left-[0px] transition-all duration-900 ease-in-out ${isSticky ? "h-[100px] w-[120px]" : "" }`} src={Logo} alt="Logo" />

    <ul className="
    ml-[2%]
    w-full text-textColor flex flex-row items-center justify-between z-[11] list-none sm:scrollbar-hide">
    <LiElement currentPage={websitestructure===WebsiteStructure.HOME} path='/' element="Home"  /> 
    <LiElement currentPage ={websitestructure===WebsiteStructure.IMMIGRATION} element={<ImmiWorkPermit name="Immigration" objectList={immigrationObjList}/>}/>
    <LiElement currentPage ={websitestructure===WebsiteStructure.WORKPERMIT} element={<ImmiWorkPermit name="WorkPermit" objectList={workpermitObjList} />}/>
    <LiElement currentPage ={websitestructure===WebsiteStructure.RESIDENCY} path='/residency' element={<ResStuPro liName={'Residency'} list={residencyData} />} />
    <LiElement currentPage ={websitestructure===WebsiteStructure.STUDENT} path='/student' element={<ResStuPro liName={'Students'} list={studentData} />} />
    <LiElement currentPage ={websitestructure===WebsiteStructure.PROFESSIONALS} path ='/professionals'element={<ResStuPro liName={'Professionals'} list={ProfessionalsData}/>}/>
    <LiElement currentPage ={websitestructure===WebsiteStructure.CONTACTUS} path='/team' element='Contact Us' />
    <LiElement currentPage ={websitestructure===WebsiteStructure.ABOUT} path='/about' element='About Us' />

    </ul>

        </div>
    );
};

export default Navbar;


const LiElement=({element, path, currentPage})=>{
  
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
};

  return(
    <li 
    className={` navbar-text-responsive
      py-[2%] px-[1%] z-10
       cursor-pointer ${currentPage?"bg-primaryAmber text-black rounded-lg":""} `}
    onClick={path!=null?()=>navigateTo(path):()=>{}}>
      {element}
    </li>
  )

}



const ImmiWorkPermit = ({name,objectList }) => {
  

    return (
      <li className="relative  group ">
        {name} <FontAwesomeIcon className="nav-text-responsive]" icon={faCaretDown} />
        <div className="
        absolute  lg:top-[7px] md:top-[5px] sm:top-[0] xs:top-[-1px] xxs:top-[-6px] xxxs:top-[-8px] xxxxs:top-[-10px]
        lg:h-[400px] lg:w-[500px] md:h-[300px] md:w-[380px] sm:h-[280px] sm:w-[340px] xs:h-[230px] xs:w-[260px] xxs:h-[140px] xxs:w-[170px] xxxxs:h-[100px] xxxxs:w-[90px]  xxxs:h-[120px] xxxs:w-[150px] 
         flex flex-wrap gap-2 justify-between left-0 z-10 hidden group-hover:flex rounded-lg h-[400px] w-[800px] bg-secondary2 mt-4 p-4 shadow-lg transition-all duration-300">
          {objectList.map((object) => (
            <IWPElement
              object={object}
            />
          ))}
        </div>
      </li>
    );
  };
  
  const IWPElement = ({object }) => {
          
    const navigate = useNavigate();
  
    const navigateTo = (path, object) => {
      navigate(`${path}`, { state: { immigration: object } });
    };
  
    return (
      <div 
        onClick={() => {
          navigateTo(object.path, object);
        }}
        className="
       xxxxs:w-[25px] xxxxs:h-[30px] xxxs:h-[40px] xxxs:w-[50px]  xxs:h-[50px] xxs:w-[60px] xs:w-[100px] xs:h-[80px] sm:h-[100px] sm:w-[130px] md:h-[100px] md:w-[150px] lg:h-[150px] lg:w-[200px] 
       lg:rounded-2xl md:rounded-xl sm:rounded-lg xs:rounded-md xxxs:rounded-md xxxxs:rounded-sm 
        group flex flex-col justify-start  bg-secondary2 hover:bg-primaryAmber p-[2%]  shadow-md transition-transform transform hover:scale-105"
      >
        <h1 className="menu-heading-responsive mb-[2%] font-semibold text-primaryAmber group-hover:text-white">
          {object.name}
        </h1>
        <p className="menu-para-responsive text-white font-thin	 overflow-hidden text-ellipsis line-clamp-4">
          {object.detail}
        </p>
      </div>
    );
  };
  
  
  

function ResStuPro({liName,list}){
    return(
        <li className="
        relative group">
            {liName} <FontAwesomeIcon className="nav-text-responsive" icon={faCaretDown} />
        <ul  className="
                absolute  lg:top-[13px] md:top-[11px] sm:top-[9px] xs:top-[6px] xxs:top-[5px] xxxs:top-[1px] xxxxs:top-[-1px]

        
        left-0 top-[-10] z-10 hidden group-hover:block shadow-lg shadow-black/80  w-auto min-w-max mt-2 rounded-lg bg-secondary2">
            {list.map((listData)=><li className=" para-responsive m-[2%] text-background hover:bg-primaryAmber hover:text-black p-2 rounded-lg">
                {listData}</li>)}
        </ul>
        </li>
    )
}