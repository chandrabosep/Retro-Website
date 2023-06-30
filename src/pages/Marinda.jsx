import React from 'react'
import './Marinda.scss'
import title from '../Assets/Title.svg'
import menu from '../Assets/menu.svg'
import img1 from '../Assets/img1.jpeg'
import img2 from '../Assets/img2.WEBP'


const Marinda = () => {
  return (
    <>
      <div className="main">
        <div className="page1">
          <div className="nav">
            <h5>Amsterdam, NL</h5>
            <img src={title} className='title' alt="title" />
            <img src={menu} className='menu' alt="menu" />
          </div>
          <div className="hero">
            <div className="Hero_Container-1">
              <div className="container_img">
                <img src={img1} alt="" />
              </div>
              <h4>AVRo | KO <span>NEW</span></h4>
              
              <p>AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars. </p>
            </div>
            <div className="Hero_Container-2">
              <h2>ALL WORK!</h2>
              <h3>A Featured selection <br/>the latest work- <br/>of the last years.</h3>
              <h6><span>Tip!</span> Drag sideways to navigate</h6>
            </div>
            <div className="Hero_Container-3">
              <div className="container_img">
                <img src={img2} alt="" />
              </div>
              <h4>THE ROGER HUB <span>NEW</span></h4>
              <p>The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer.</p>
            </div>
          </div>
          <h1>MIRANDA</h1>
        </div>
      </div>
    </>
  )
}

export default Marinda
