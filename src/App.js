import React from "react";
import { useState, useRef, useEffect } from "react";
import Nav  from './components/Nav'
import Animations from "./animations.js";
import './styles/App.css';
import './styles/styles.css';
import './styles/svg.css';

import EventSlides from './components/EventSlides';
import Menu from "./components/Menu";
import SlideInfo from "./components/SlideInfo";

import Spoon from './images/svg/Spoon';
import Quotes from "./images/svg/Quotes";
import Scoop from "./images/svg/Scoop";

import pic1 from './images/events/1.webp'
import logo from './images/logo/logo_white.png';
import heroImg from './images/hero/about_img_short.webp';
import appBackground from './images/madewithlove.webp';
import { g1, g2, g3, g4, g5, g6, g7, g8 } from './images/importsImg'

function App() {
  const [navClicked, setNavclicked] = useState(false)
  const [windowWidth, setWindowWidth] = useState(null)
  const [optionFood, setOptionFood] = useState(true)


  const foodOptionCallback = (arg) => { setOptionFood(arg)}

  const appRef = useRef()
  const slide1Ref = useRef();
  const textSlide1Ref = useRef();
  const hoursRef = useRef();
  const addressContainerRef = useRef();
  const scoopRef = useRef();

  function toggleNav () {
    setNavclicked(!navClicked)
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="app">
      <header>
        <Nav windowWidth={windowWidth} toggleNavCallback={toggleNav} navClicked={navClicked}  />
      </header>
      <Animations 
      menuClicked={optionFood}
      scoopRef={scoopRef}
      width={windowWidth}
      navClicked={navClicked} appRef={appRef} slide1Ref={slide1Ref}  addressContainerRef={addressContainerRef} 
      textSlide1Ref={textSlide1Ref} hoursRef={hoursRef}/>
      {/* <div className="app_background"></div> */}
      <article className='app_content' ref={appRef}>
        <section className="slide1 flex-col-center" ref={slide1Ref} >
          <img className="app_background" src={ appBackground } alt="" />
          <h1 className='slide1_logo_container'>
            <img className='logo' src={logo} alt="bmore protein bar" />
          </h1>

          {/* <div className="text-block flex-col-center" ref={textSlide1Ref}>
            <p className="popup-slide1 font-fancy margin-btm-mid">BE KIND</p>
            <p className="popup-slide1 font-fancy margin-btm-mid">BE STRONG</p>
            <p className="popup-slide1 font-fancy margin-btm-mid">BE MORE</p>
          </div> */}
          
          <div className="slide1-bottom-container flex-col-center opacity-anim">
            <div className="btn-container pointer">
              <div className="btn-menu ">
              <a href="#menu">
               <span className='font-regular'>MENU</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <SlideInfo />
        
        
        <Menu foodOptionCallback={foodOptionCallback} optionFood={optionFood} />
       

        <section className="slide-events padding-slide" id="events">
          <div className="popup-anim">
            <h2 className="subheading font-fancy margin-top-mid">Events</h2>
            <div className="spoon margin-btm-big margin-auto">
            <Spoon color='#ffe6c6' />
            </div></div>
          
          <div className="events-container">
            <div className="upcoming-wrapper margin-btm-mid flex-col-center">
                <h2 className="font-big margin-btm-mid opacity-anim">UPCOMING</h2>
              <div className="events-pic-container radius-small opacity-anim">
                <img src={pic1} alt="" />
              </div> 
            </div>
            <EventSlides />
          </div>
            
        </section> 

        <section className="slide-gallery flex-col-center" id="gallery" >
          <div className="popup-anim">
            <h2 className="subheading font-fancy margin-top-mid ">Gallery</h2>
            <div className="spoon margin-auto">
              <Spoon color='#ffe6c6' />
              </div>
          </div>
          
          <div className="gallery-container">
            <div className="g-line line-1 font-fancy-2">Cocktails</div>
            <div className="popup-anim g-pic g-pic-1 font-big font-fancy">
              <img className=""
              src={g1} alt="" />
            </div> 
            <div className="popup-anim g-pic g-pic-2 font-big font-fancy">
              <img className=""
              src={g7} alt="" />
            </div> 

          <div className="g-line line-2 font-fancy-2">Coffee</div>  
          <div className="popup-anim g-pic g-pic-3 font-big font-fancy">
            <img className=""
            src={windowWidth > 768 ? g6 : g3} alt="" />
          </div> 
          <div className="popup-anim g-pic g-pic-4 font-big font-fancy">
            <img className=""
            src={g2} alt="" />
          </div> 

           <div className="g-line line-3 font-fancy-2">Pizza & Bagels</div>
            <div className="popup-anim g-pic g-pic-5 font-big font-fancy">
              <img className=""
              src={g5} alt="" />
            </div> 
            <div className="popup-anim g-pic  g-pic-6 font-big font-fancy">
              <img className=""
              src={windowWidth > 768 ? g3 : g6} alt="" />
            </div> 
          </div>
          
        </section>

        <section className="slide-about padding-slide" id="about">
          <div className="slide-about_content">
          <div className="chefsWord popup-anim">
            <h3 className="font-fancy font-regular">Chef's Word</h3>
            <div className="spoon margin-btm-big ">
                <Spoon color='#fff'/>
              </div>
          </div>
          
          <h2 className="opacity-anim slide-about_content_subheading font-fancy" id="slide-about-sub">What We Believe In</h2>

          
          <div className="text font-mid opacity-anim margin-top-big">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </div> 

            <div className="hero-container">
              <img className="hero-img width-100 radius-small"
              src={heroImg} alt="" />
            </div> 


            <div className="quote opacity-anim">
              <div className="text quote-marks">
                <Quotes />
                The goal here is to make this place comfortable so people can relax, unwind and have a good time
              </div>
              <h3 className="margin-top-big font-fancy font-big opacity-anim">
                Rodrigo Inacio 
                </h3>
              <h4 className="font-fancy font-mid opacity-anim">
                Chef & Founder
                </h4>
            </div>
          </div>
          
           
        </section> 
       
      </article>
      <footer>
      <div className="scoop">
              <Scoop/>
            </div>
            <div className="bean-container">
                <div className="bean bean1" id='1'></div>
                <div className="bean bean2" id='2'></div>
                <div className="bean bean3" id='3'></div>
                <div className="bean bean4" id='4'></div>
                <div className="bean bean5" id='5'></div>
            </div>
        <div className='icons flex-row'>
            <a href="https://www.instagram.com/bmoreproteinpub" target="_blank" rel="noreferrer" >
              <div className='sm-icon insta' ></div>
            </a>

            <a href="https://www.yelp.com/biz/bmore-protein-pub-long-beach" target="_blank" rel="noreferrer">
              <div className='sm-icon yelp' >
                <svg 
                aria-label="Yelp" role="img"
                viewBox="0 0 512 512"><rect
                width="512" height="512"
                rx="15%"
                fill="#d32323"/><path fill="#fff" d="M152 311s-16 3-18-13 0-40 6-55 20-9 20-9l65 32s19 13-3 27m36 28s-6-20-24-8l-49 54s-10 13 3 22 35 19 54 20 15-14 15-14m41-100s-20-1-17 19l40 64s10 12 20 5 28-28 36-45-9-20-9-20m-85-66s-6 19 15 21l72-20s15-7 9-20-18-33-33-45-22 3-22 3m-88 49s18 13 25-8V95s0-15-16-15-56 10-72 19-6 21-6 21"/></svg> 
              </div>
            </a>
            <a href="https://www.facebook.com/bmoreproteinpub/" target="_blank" rel="noreferrer">
              <div className='sm-icon yelp' >
                <svg enableBackground="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128"><g id="_x31__stroke"><g id="Facebook_1_"><rect fill="none" height="128" width="128"/><path clipRule="evenodd" d="M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z" fill="#4460A0" fillRule="evenodd" id="Facebook"/></g></g></svg>
              </div>
            </a>
          </div>
        <a className="phone-number font-regular pointer " href="tel:+12133060257">+1 (213) 306-0257</a>
      </footer>
      
    </main>
  );
}

export default App;
