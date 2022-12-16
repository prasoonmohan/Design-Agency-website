import React from 'react'
import Header from '../Header/Header'
import "./Home.css"
import Img from '../Assets/Images/Group 82.svg'
function Home() {
  return (
    <div className='container'>
        <Header />
        <div className="bg-image">
        <img src={Img} alt="image"/>
        </div>
        <div className="text">
          <h1>INNOVATION DIGITAL TECHNOLOGY</h1>
          <p>everything we do is the consumer, imagination and you.</p>
        </div>
    </div>
  )
}

export default Home