import React from "react";
import './testing_ul.css';

const TestingUl=()=>{
   return( 
    <div className="div-css">
      <ul className="no-bullets horizontal-list">
        <li><i className="fas fa-phone"></i>wwe wwe wwe wwe</li>
        <li><i class="fa-solid fa-envelope"></i>email</li>
        <li><i className="fas fa-home"></i>home</li>
    </ul>
    
    
    <ol className="no-numbers horizontal-list">
        <li><i className="fas fa-phone"></i>thunderbolt</li>
        <li><i class="fa-solid fa-envelope"></i>email</li>
        <li><i className="fa-solid fa-address-card"></i>about</li>

    </ol>
    </div>

);}



 const Testing2=()=>{
    return(
        <div className="testing-2">
            <ul className="horizontal-list no-bullets">
                <li>
                <i class="fa-solid fa-rocket"></i> rocket          
                 </li>

                 <li>
                 <i class="fa-solid fa-ship"></i> ship          
                 </li>

                 <li>
                 <i class="fa-solid fa-car"></i> car          
                 </li>

                 <li>
                 <i class="fa-solid fa-bicycle"></i> bike          
                 </li>
            </ul>
        </div>
    )
}
export default TestingUl
export  {Testing2,  };
