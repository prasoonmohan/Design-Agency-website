import React from 'react'
import "./Measurements.css"
import mt1 from '../Assets/Images/mt-1.svg'
import mt2 from '../Assets/Images/mt-2.svg'
import mt3 from '../Assets/Images/mt-3.svg'
import mt4 from '../Assets/Images/mt-4.svg'
import mt5 from '../Assets/Images/mt-5.svg'
import mt6 from '../Assets/Images/mt-6.svg'
import mt7 from '../Assets/Images/mt-7.svg'
import mt8 from '../Assets/Images/mt-8.svg'
function Measurements() {
  return (
    <div className="mt-container">
    <div className="mt-header">
      
      <h1>MEASUREMENT  TO OUR SUCCESS</h1>
      <h4>Our process-driven approach keeps us going</h4>
      
    </div>
    <div className="mt-items">
      <div className="item">
      <img src={mt1} alt="" />
      <h4>TRANSPARENCY AND RELIABILITY</h4>
      </div>
      <div className="item">
      <img src={mt2} alt="" />
      <h4>REAL TIME PROJECT STATUS</h4>
      </div>
      <div className="item">
      <img src={mt3} alt="" />
      <h4>WELL STRUCTURED COMMUNICATION</h4>
      </div>
      <div className="item">
      <img src={mt4} alt="" />
      <h4>AGILE METHODOLOGY</h4>
      </div>
      <div className="item">
      <img src={mt5} alt="" />
      <h4>ONSITE COLLABORATION</h4>
      </div>
      <div className="item">
      <img src={mt6} alt="" />
      <h4>INNOVATION AT WORK</h4>
      </div>
      <div className="item">
      <img src={mt7} alt="" />
      <h4>CLIENT'S INVOLVEMENT IN EACH MILESTONE</h4>
      </div>
      <div className="item">
      <img src={mt8} alt="" />
      <h4>DEDICATED TEAM</h4>
      </div>
    </div>
    </div>
  )
}

export default Measurements