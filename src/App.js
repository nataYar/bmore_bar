import React from "react";
import { useState, useRef, useEffect } from "react";
import Nav  from './components/Nav'
import Animations from "./animations.js";
import './styles/App.css';
import './styles/styles.css';
import './styles/svg.css';
import Menu from "./components/Menu/Menu";
import Spoon from './images/svg/Spoon';
import Quotes from "./images/svg/Quotes";
import CoffeeLeaf from './images/svg/CoffeeLeaf';
import Scoop from "./images/svg/Scoop";
// import CoffeeBean from "./images/svg/CofeeBeans2";
import { default as logo } from './images/logo/logo_white.png';
import { default as heroImg } from './images/hero/about_img_short.webp';

function App() {
  const [navClicked, setNavclicked] = useState(false)
  const [windowWidth, setWindowWidth] = useState(null)

  const appRef = useRef()
  const slide1Ref = useRef();
  const textSlide1Ref = useRef();
  const hoursRef = useRef();
  const addressContainerRef = useRef();

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
      <Animations width={windowWidth}
      navClicked={navClicked} appRef={appRef} slide1Ref={slide1Ref}  addressContainerRef={addressContainerRef} textSlide1Ref={textSlide1Ref} hoursRef={hoursRef}/>
      <header>
        <Nav toggleNavCallback={toggleNav} navClicked={navClicked}  />
      </header>
      <div className="app_background"></div>
      <article className='app_content' ref={appRef}>
        <section className="slide1 flex-col-center" ref={slide1Ref} >
          <h1 className='slide1_logo_container'>
            <img className='logo' src={logo} alt="bmore protein bar" />
          </h1>

          <div className="text-block flex-col-center" ref={textSlide1Ref}>
            <p className="popup-slide1 font-fancy margin-btm-mid " >BE KIND</p>
            <p className="popup-slide1 font-fancy margin-btm-mid " >BE STRONG</p>
            <p className="popup-slide1 font-fancy margin-btm-mid " >BE MORE</p>
          </div>
          
          <div className="slide1-bottom-container flex-col-center opacity-anim">
            {/* <div className="horizontal-line"></div> */}
            <div className="btn-container pointer">
              <div className="btn-menu ">
                {/* <CoffeeLeaf/>
                <div className="circle"></div> */}
                <span className='font-regular'>MENU</span>
              </div>
            </div>
          </div>
        </section>

        <section className='slide2 padding-slide flex-col-row' id='location'>
          <div className="location width-100"  ref={addressContainerRef}>
            <div className="width-100 popup-anim">
              <h3 className="subheading font-fancy" id="contacts">Contacts</h3>
              <div className="spoon margin-auto margin-btm-big">
                <Spoon color='#dccdac' />
              </div>
            </div>
            <div className="contacts margin-btm-mid">
              <div className='opacity-anim info-container opacity-anim'>
                  <a className="flex-row" href="https://www.instagram.com/bmoreproteinpub" target="_blank" rel="noreferrer" >
                    <div className='sm-icon insta' ></div>
                    <div className="font-regular">@bmoreproteinpub</div>
                  </a>
                  <a  className="flex-row" href="https://www.yelp.com/biz/bmore-protein-pub-long-beach" target="_blank" rel="noreferrer">
                    <div className='sm-icon yelp' >
                      <svg 
                      aria-label="Yelp" role="img"
                      viewBox="0 0 512 512"><rect
                      width="512" height="512"
                      rx="15%"
                      fill="#d32323"/><path fill="#fff" d="M152 311s-16 3-18-13 0-40 6-55 20-9 20-9l65 32s19 13-3 27m36 28s-6-20-24-8l-49 54s-10 13 3 22 35 19 54 20 15-14 15-14m41-100s-20-1-17 19l40 64s10 12 20 5 28-28 36-45-9-20-9-20m-85-66s-6 19 15 21l72-20s15-7 9-20-18-33-33-45-22 3-22 3m-88 49s18 13 25-8V95s0-15-16-15-56 10-72 19-6 21-6 21"/></svg> 
                    </div>
                    <div className="font-regular">bmore protein pub</div>
                  </a>
                  <a className="flex-row" href="https://www.facebook.com/bmoreproteinpub/" target="_blank" rel="noreferrer">
                    <div className='sm-icon yelp' >
                      <svg enableBackground="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128"><g id="_x31__stroke"><g id="Facebook_1_"><rect fill="none" height="128" width="128"/><path clipRule="evenodd" d="M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z" fill="#4460A0" fillRule="evenodd" id="Facebook"/></g></g></svg>
                    </div>
                    <div className="font-regular">bmoreproteinpub</div>
                  </a>
                </div>
                
                <p className="font-regular pointer margin-btm-mid opacity-anim">Email: bmoreproteinpub@gmail.com</p>
                <p className="font-regular pointer opacity-anim" href="tel:+12133060257">Phone: (213) 306-0257</p>
            </div>
            <br />
            <div className="margin-top-mid">
              <div className="width-100 popup-anim">
                <h3 className="subheading font-fancy">Find Us</h3>
                <div className=" spoon margin-auto margin-btm-big">
                <Spoon color='#dccdac' />
              </div>
              </div>
              <p className="font-regular opacity-anim">
                  707 E Ocean Blvd D Long Beach, CA 90802
                </p>

              <div className="google-maps opacity-anim">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.7700278037464!2d-118.18831427199875!3d33.76660811890422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd310b3a6bbf29%3A0xcb4689f44a64d336!2sBmore%20Protein%20Pub!5e0!3m2!1sen!2sus!4v1677538487272!5m2!1sen!2sus" 
                allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>

          <div className="popup-anim schedule width-100 font-regular margin-top-mid" id="hours" ref={hoursRef}>
            <h3 className="subheading font-fancy">Opening Hours</h3>
            <div className="spoon margin-btm-big margin-auto">
              <Spoon color='#dccdac' />
              </div>
            <div className="flex-row  workday">
              <div>Mon</div> 
              <div className="time">Closed</div>
              </div>
              <div className="flex-row  workday">
              <div>Tue</div> 
              <div className="time">Closed</div>
              </div>
            <div className="flex-row workday">
              <div>Wed</div>
              <div className="time">11:00 AM - 5:00 PM</div>
              </div>
            <div className="flex-row workday">
              <div>Thu</div>
              <div>11:00 AM - 5:00 PM</div>
              </div>
            <div className="flex-row workday">
              <div>Fri</div>
              <div className="time">
                <div>11:00 AM - 3:00 PM</div>
                <div>5:00 PM - 8:30 PM</div>
              </div>
              </div>
            <div className="flex-row workday">
              <div>Sat</div>
              <div className="time">
                <div>10:00 AM - 2:00 PM</div>
                <div>4:30 PM - 8:30 PM</div>
              </div>
              </div>
            <div className="flex-row workday">
              <div>Sun</div>
              <div className="time">10:00 AM - 6:00 PM</div>
            </div>
          </div>
        </section>

        {/* <section className="slide-clip-path width-100">
          <p className="bg">BEMORE</p>
        </section> */}

        <section className="slide-about padding-slide" id="about">
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
            
          <div className="chefsWord">
            <h3 className="font-fancy font-regular">Chef's Word</h3>
            <div className="spoon margin-btm-big ">
                <Spoon color='#fff'/>
              </div>
          </div>
          
          <div className="width-100">
            <h2 className=" opacity-anim subheading font-fancy" id="slide-about-sub">What We Believe In</h2>
          </div>
          
          <div className="text font-mid opacity-anim margin-top-big">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </div>

            <div className="hero-container">
              <img className="hero-img width-100 radius-small"
              src={heroImg} alt="" />
            </div> 


            <div className="quote opacity-anim">
              <div className="quote-marks">
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
        </section> 

        <section className="width-100">
          <Menu />
        </section>
      </article>
      <footer className="padding-5">
        <h2 className="subheading font-fancy opacity-anim">Footer information, links, etc.</h2>
      </footer>
    </main>
  );
}

export default App;
