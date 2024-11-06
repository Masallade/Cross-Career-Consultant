import React from "react";
import "./CardComponent.css"; // Importing the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Named import

const CardComponent = ({name,detail,icon}) => {
  return (
    <div className="card-container">
      {/* Use FontAwesomeIcon with the imported icon */}
      <div className="discipline-data">
        <div className="discipline-icon">
            <FontAwesomeIcon className="dis-icon" icon={icon}/>
        </div>
        <div className="discipline-name">
            <p>{name}</p>
        </div>
      </div>
      <p className="discipline-detail">
      {detail}
      </p>
    
    </div>
  );
};

export default CardComponent;
