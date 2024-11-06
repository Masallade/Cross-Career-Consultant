import './PicturePart.css';
import img from '../../../assets/additional_service.png';

const PicturePart = () => {
  return (
    <div className="background-design">
      <div className="image">
        <img src={img} alt="Additional Service" />
      </div>
    </div>
  );
};

export default PicturePart;
