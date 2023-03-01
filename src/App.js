import React from "react";
import { useState, useRef } from "react";
import Nav  from './Nav'
import Animations from "./animations.js";
import './Styles/App.css';
import './Styles/styles.css';
import { default as logo } from './images/logo_white.png';


function App() {
  const [navClicked, setNavclicked] = useState(false)
  const slide1Ref = useRef();
  const slide2Ref = useRef();
  const textSlide1Ref = useRef();

  const addressContainerRef = useRef();

  function toggleNav () {
    setNavclicked(!navClicked)
    console.log('You clicked nav.');
  }

  return (
    <main className="app">
      <Animations slide1Ref={slide1Ref}  slide2Ref={slide2Ref} addressContainerRef={addressContainerRef} textSlide1Ref={textSlide1Ref} />
      <header>
        <Nav toggleNavCallback={toggleNav} navClicked={navClicked} />
      </header>
      <div className="app_background"></div>
      <article className='app_content'>
        <section className="slide-100-100 slide1 flex-col-center" ref={slide1Ref} >
          <h1 className='slide1_logo_container'>
            <img className='logo' src={logo} alt="bmore protein bar" />
          </h1>

          <div className="text-block flex-col-center" ref={textSlide1Ref}>
            <p className="popup-text font-reg" >BE KIND</p>
            <p className="popup-text font-reg" >BE STRONG</p>
            <p className="popup-text font-reg" >BE MORE</p>
          </div>
          
          <div className="slide1-bottom-container flex-col-center">
            <div className="horizontal-line"></div>
            <div className="btn-container">
              <div className="btn btn-menu">
                <span>MENU</span>
              </div>
            </div>
          </div>
        </section>

        <section className='slide2 flex-col-left padding-mid radius-mid' id='slide2' ref={slide2Ref}>
          <div className="address"  ref={addressContainerRef}>
            <p className="popup-text font-regular ">
                (213) 306-0257
              </p>
            <p className="popup-text font-regular ">
              707 E Ocean Blvd D Long Beach, CA 90802
              </p>
            </div>

          <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.7700278037464!2d-118.18831427199875!3d33.76660811890422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd310b3a6bbf29%3A0xcb4689f44a64d336!2sBmore%20Protein%20Pub!5e0!3m2!1sen!2sus!4v1677538487272!5m2!1sen!2sus" 
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
         
          <div className="schedule width-100">
            <h4>HOURS</h4>
            <div className="flex-row  workday">
              <div>Mon-Tue</div> 
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
      </article>
      <footer className="padding-5">
          Footer information, links, etc.
      </footer>
    </main>
  );
}

export default App;
