import './ThreeServices.css'
import TrustedBgImgBlack from '../../../assets/TrustedPartner/trusted_bg_img_black.png';
const ThreeServices =()=>{
    return(
        <div className="ts-main">
            <p className='ts-main-p'>Addtional Service</p>
            <div className="main-container">
            <div className="center-line">
                <img src={TrustedBgImgBlack} alt="" />
            </div>
            <div className="service-holder">
            <Service name="Ambassy Appointment "/>
            <Service name="Documentations verification service for HEC MOFA IBCC"/>
            <Service name="foreign education equivalency approved"/>
            </div>
            
        </div>
        </div>
    )
}

const Service=({name})=>{
    return(
        <div className="service">
            <p>{name}</p>
        </div>

    );
}

export default ThreeServices