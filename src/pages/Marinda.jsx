import React, { useEffect, useRef } from 'react'
import './Marinda.scss'
import LocomotiveScroll from 'locomotive-scroll'
import title from '../Assets/Title.svg'
import menu from '../Assets/menu.svg'
import img1 from '../Assets/img1.jpeg'
import img2 from '../Assets/img2.webp'
import img3 from '../Assets/img3.jpeg'
import img4 from '../Assets/img4.jpeg'
import img5 from '../Assets/img5.png'
import img6 from '../Assets/img6.webp'
import img7 from '../Assets/img7.jpeg'
import img8 from '../Assets/img8.jpeg'
import img9 from '../Assets/img9.jpeg'
import img10 from '../Assets/img10.jpeg'
import img11 from '../Assets/img11.webp'
import img12 from '../Assets/img12.png'
import { gsap } from 'gsap'


const Marinda = () => {

  const page1 = useRef(null);
  const ref = useRef(null);

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
        duration:1.5,
        delay:1.5
      })
      tl.to(page1.current,{
        y:'0vh',
        rotate:-360,
        scale:1,
        duration:0.6
      })
    }
    return animate();
  },[])

  useEffect(()=>{
  let locoScroll;
  locoScroll = new LocomotiveScroll({
  el: ref.current,
  smooth: true,
  });
  new ResizeObserver(() => locoScroll.update()).observe(
    ref.current
  );
  },[])

  
  
  return (
    <>
    <div className='rotate'>
    <div className="rotate-desc">Please rotate your device<br />to ensure a better experience.</div>
    </div>
      <div className="main"  ref={ref}>
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
            <img src={img3} alt="left eyed" />
            <p>As a multidisciplinary freelancer, I'm passionate about creating iconic digital experiences through motion, typography, and creative coding for companies and agencies around the world.</p>
            </div>
          <div className="p2_right">
            <img src={img4} alt="idk" />
            <h1>DIGITAL ART DIRECTOR INTERACTIVE DESIGNER CREATIVE DEVELOPER BASED IN AMSTERDAM, NL.</h1>
          </div>
        </div>
        <div className="page3">
          <div className='website-text'>
            <h1>WEBISTE</h1>
          </div>
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
          <div className="awards-banner">
            <div className='awards_inner'>
              <div className="award_1">
                <div className='award_section-1'>
                    <p>SITE OF THE DAY</p>
                    <h5>AWARDS</h5>
                  </div>
                  <h5>9</h5>
                </div>
                <div className="award_2">
                  <div className='award_section-2'>
                    <p>SITE OF THE MONTH</p>
                    <h5>WINNERS</h5>
                  </div>
                  <h5>1</h5>
                </div>
                <div className="award_3">
                  <div className='award_section-3'>
                    <p>FWA OF THE DAY</p>
                    <h5>AWARDS</h5>
                  </div>
                  <h5>6</h5>
                </div>
                <div className="award_4">
                  <div className='award_section-4'>
                    <p>ACCLAIMED</p>
                    <h5>MENTIONS</h5>
                  </div>
                  <h5>8</h5>
                </div>
              </div>
            </div>
            <div className="page5">
              <div className="p5_top">
                <div className="p5_top-left">
                  <div className="p5_top-innerTop">
                    <img src={img8} alt="" />
                    <h1>THE</h1>
                  </div>
                  <div className="p5_top-innerBottom">
                    <h1>PIXEL</h1>
                  </div>
                </div>
                <div className="p5_top-right">
                  <img src={img9} alt="" />
                </div>
              </div>
              <div className='p5_center'>
                <img src={img10} alt="" />
                <h1>PERFECT</h1>
              </div>
              <div className="p5_bottom">
                <h1>ARTISAN</h1>
                <div className='p5_botom-right'>
                  <p className='p5_para'>Over the past 5+ years, I've teamed up with high-profile clients and partners globally earning <a href="">mentions & awards </a>from digital platforms like The FWA,</p>
                  <h5>AWWWARDS</h5>
                  <p className='p5_para'>Communication Arts, Site Inspire, Behance, Codrops and many others.</p>
                </div>
              </div>            
            </div>
            <div className="hero page6">
            <div className="Hero_Container-3 footer-container-6">
                <div className="container_img">
                  <img src={img11} alt="" />
                </div>
                <h4>WOW CONCEPT <span>NEW</span></h4>
                <p>WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic & interactive shopping experience.</p>              
                </div>
              
              <div className="Hero_Container-2">
                <h2>ALL WORK!</h2>
                <h3>A Featured selection <br/>the latest work- <br/>of the last years.</h3>
                <h6><span>Tip!</span> Drag sideways to navigate</h6>
              </div>
              <div className="Hero_Container-1">
                <div className="container_img">
                  <img src={img1} alt="" />
                </div>
                <h4>AVRo | KO <span>NEW</span></h4>
                
                <p>AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars. </p>
              </div>
            </div>
            <div className='page7'>
              <div className="footer">
                <div className="footer-left">
                  <span>MARINDA &#xA9;</span>
                  <img src={img12} alt="" />
                  <p>Legal</p>
                </div>
                <div className="footer-right">
                  <ul>
                    <li className='l1'>TWITTER</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBLE</li>
                    <li>BEHANCE</li>
                  </ul>
                </div>
              </div>
            </div>
      </div>
    </>
    
  )
}

export default Marinda
