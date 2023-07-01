import React, { useEffect, useRef } from 'react'
import './Marinda.scss'
import title from '../Assets/Title.svg'
import menu from '../Assets/menu.svg'
import img1 from '../Assets/img1.jpeg'
import img2 from '../Assets/img2.WEBP'
import img3 from '../Assets/img3.jpeg'
import img4 from '../Assets/img4.jpeg'
import img5 from '../Assets/img5.png'
import img6 from '../Assets/img6.WEBP'
import img7 from '../Assets/img7.jpeg'

import { gsap } from 'gsap'


const Marinda = () => {

  const page1 = useRef();

  useEffect(()=>{
    const animate = ()=>{
      const tl = gsap.timeline();

      tl.to(page1.current,{
        y:'100vh',
        scale:0.6,
        duration:0
      })

      tl.to(page1.current,{
        y:'30vh',
        duration:1,
        delay:1
      })
      tl.to(page1.current,{
        y:'0vh',
        rotate:360,
        scale:1,
        duration:0.7
      })
    }
    return animate
  },[])


  return (
    <>
      <div className="main">
        <div className="page1" ref={page1}>
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
        <div className="page2">
          <div className="p2_left">
            <h2>
              INTERACTIVE 
              <span> ARTIST!</span>
            </h2>
            <img src={img3} alt="" />
            <p>As a multidisciplinary freelancer, I'm passionate about creating iconic digital experiences through motion, typography, and creative coding for companies and agencies around the world.</p>
            </div>
          <div className="p2_right">
            <img src={img4} alt="idk" />
            <h1>DIGITAL ART DIRECTOR INTERACTIVE DESIGNER CREATIVE DEVELOPER BASED IN AMSTERDAM, NL.</h1>
          </div>
        </div>
        <div className="page3">
            <h1>WEBISTE</h1>
            <img src={img5} alt="stamp" />
          </div>
          <div className="page4">
            <div className="p4_left">
              <div className="p4_topContent">
                <div className="p4_top-left">
                  <h1>UPCOMING NEXT</h1>
                  <h4>Fresh entry - A selected work from the latest digital releases.</h4>
                  <h6><span>Tip!</span> Drag sideways to navigate</h6>
                </div>
                <div className="p4_top-right">
                  <div className='top_right-img'>
                    <img src={img6} alt="" />
                  </div>
                  <h4>UNEXPECTED TIME</h4>
                  <p>Unexpected Time is a classic-furitistic gamification web experience showcasing the lost history & culture in a world dominated by the virtual reality. </p>
                </div>
              </div>
              <img src={img7} alt="" />
            </div>
            <div className="p4_right">
              <div className='p4_right-inner'>
              <h1>Think, Create <span>DELIVER</span></h1>
              <h5 className='first-letter'>A strong project is created by deep collaboration. I design, develop, and deliver websites that drive results and win awards. </h5>
              <br /><br />
              <h5>Like an artisan, I like to start from raw matter and give life to an iconic product that makes your brand stand out, starting from a Visual Strategy that guide the client’s vision to reality.</h5>
              </div>
              <div className="oval">
                <h5>ALL WORK</h5>
              </div>
            </div>
          </div>
          <div className="page5"></div>
      </div>
    </>
  )
}

export default Marinda
