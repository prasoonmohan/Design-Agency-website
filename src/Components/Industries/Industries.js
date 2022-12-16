import React from 'react'
import "./Industries.css"
import ind1 from '../Assets/Images/ind-1.svg'
import ind2 from '../Assets/Images/ind-2.svg'
import ind3 from '../Assets/Images/ind-3.svg'
import ind4 from '../Assets/Images/ind-4.svg'
import ind5 from '../Assets/Images/ind-5.svg'
import ind6 from '../Assets/Images/ind-6.svg'
import ind7 from '../Assets/Images/ind-7.svg'
import ind8 from '../Assets/Images/ind-8.svg'
import ind9 from '../Assets/Images/ind-9.svg'
function Industries() {
  return (
    <div className="ind-container">
     <div className="ind-title">
     <h2>WE ARE WORKING <br /> WITH THESE INDUSTRIES</h2>
     </div>
      <div className="ind-contents">
        <div className="ind-item">
          <img src={ind1} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind2} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind3} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind4} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind5} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind6} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind7} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind8} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
        <div className="ind-item">
          <img src={ind9} alt="" />
          <h4>MEDIA & ENTERTAINMENT</h4>
        </div>
      </div>
    </div>
  )
}

export default Industries