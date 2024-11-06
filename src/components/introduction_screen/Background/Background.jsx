import './Background.css';
import doctorImg from'../../../assets/Healthy Centre.png';
import engineerImg from'../../../assets/software_engineer.png';
import studentImg from'../../../assets/student.png';
import video from '../../../assets/video.mp4'

const Background=({playStatus,heroCount})=>{

    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        )
    }

    else if(heroCount===0){
        console.log(heroCount);

        return(
            <img className='background fade-in' src={doctorImg} alt="" />
        )
    }


    else if(heroCount===1){
        console.log(heroCount);
        return(
            <img className='background fade-in' src={engineerImg} alt="" />
        )
    }


    else if(heroCount===2){
        console.log(heroCount);
        return(
            <img className='background fade-in' src={studentImg} alt="" />
        )
    }


}

export default Background;