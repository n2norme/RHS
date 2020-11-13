import React from 'react';
//import {useEffect} from 'react';
//import DistrictTitle from './DistrictTitle';
import './HalfPageImage.scss';






function HalfPageImage(props) {

 //   useEffect(() => {     
  //      let img = document.querySelector(".district-image");
  //      img.style.setProperty('--path','url("../Images/jelle-van-leest-hg9wYdBNdbk-unsplash.jpg")');
        
    
   //      });


    return (
        <div className="container-fluid district-image">
                <div className="district-caption">
                    <div className="row">
                        <h2 id="district-title">Dutemple</h2>
                    </div>
                </div>
            </div>
    )
}

export default HalfPageImage;
