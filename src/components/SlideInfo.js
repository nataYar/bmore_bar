import React from 'react';
import Spoon from '../images/svg/Spoon';
import '../styles/slideInfo.css'

 const SlideInfo = () => {
  return (
    <section className='slide2 flex-col-row' id='location'>
                <div className='slide2_section info-container'>
                  <div className="width-100 popup-anim">
                    <h2 className="subheading font-fancy" id="contacts">Contacts</h2>
                    <div className="spoon margin-auto margin-btm-big">
                      <Spoon color='#ffe6c6' /></div>
                    </div>
                  <a className="margin-btm-mid flex-row opacity-anim" href="https://www.instagram.com/bmoreproteinpub" target="_blank" rel="noreferrer" >
                    <div className='sm-icon insta'></div>
                    <div className="font-regular">@bmoreproteinpub</div>
                  </a>
                  <a  className="margin-btm-mid flex-row opacity-anim " href="https://www.yelp.com/biz/bmore-protein-pub-long-beach" target="_blank" rel="noreferrer">
                    <div className='sm-icon yelp' >
                      <svg 
                      aria-label="Yelp" role="img"
                      viewBox="0 0 512 512">
                        <rect
                      width="512" height="512"
                      rx="15%"
                      fill="#d32323"/>
                      <path fill="#fff" d="M152 311s-16 3-18-13 0-40 6-55 20-9 20-9l65 32s19 13-3 27m36 28s-6-20-24-8l-49 54s-10 13 3 22 35 19 54 20 15-14 15-14m41-100s-20-1-17 19l40 64s10 12 20 5 28-28 36-45-9-20-9-20m-85-66s-6 19 15 21l72-20s15-7 9-20-18-33-33-45-22 3-22 3m-88 49s18 13 25-8V95s0-15-16-15-56 10-72 19-6 21-6 21"/>
                      </svg> 
                    </div>
                    <div className="font-regular">bmore protein pub</div>
                  </a>
                  <a className="margin-btm-mid flex-row opacity-anim" href="https://www.facebook.com/bmoreproteinpub/" target="_blank" rel="noreferrer">
                    <div className='sm-icon yelp' >
                      <svg enableBackground="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128"><g id="_x31__stroke"><g id="Facebook_1_"><rect fill="none" height="128" width="128"/><path clipRule="evenodd" d="M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z" fill="#4460A0" fillRule="evenodd" id="Facebook"/></g></g></svg>
                    </div>
                    <div className="font-regular">bmoreproteinpub</div>
                  </a>
                  <a className="phone-number font-regular pointer opacity-anim" href="tel:+12133060257"><span className='beige-light'>Phone: </span>(213) 306-0257</a>
                  <div className="inline width-100 font-regular pointer margin-btm-mid  opacity-anim">
                      <p className='beige-light'>Email: </p> 
                      <p className="email">bmoreproteinpub@gmail.com</p> 
                  </div>
                </div>
          
          
            <div className="find-us-section slide2_section ">
              <div className="width-100 popup-anim">
                <h2 className="subheading font-fancy">Find Us</h2>
                <div className=" spoon margin-auto margin-btm-big"><Spoon color='#ffe6c6' /></div>
              </div>
              <p className="font-regular opacity-anim">
                  707 E Ocean Blvd D Long Beach, CA 90802
                </p>
            
              <div className="google-maps opacity-anim">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.7700278037464!2d-118.18831427199875!3d33.76660811890422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd310b3a6bbf29%3A0xcb4689f44a64d336!2sBmore%20Protein%20Pub!5e0!3m2!1sen!2sus!4v1677538487272!5m2!1sen!2sus" 
                allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </div>
            <div className="opening-hours slide2_section popup-anim schedulefont-regular" id="hours">
              <h2 className="subheading font-fancy">Opening Hours</h2>
              <div className="spoon margin-btm-big margin-auto">
                <Spoon color='#ffe6c6' />
                </div>
              <div className="flex-row workday">
                <div className='beige-light' >Mon</div> 
                <div className="time">Closed</div>
                </div>
                <div className="flex-row workday">
                <div className='beige-light' >Tue</div> 
                <div className="time">Closed</div>
                </div>
              <div className="flex-row workday">
                <div className='beige-light' >Wed</div>
                <div className="time">11:00 AM - 5:00 PM</div>
                </div>
              <div className="flex-row workday">
                <div className='beige-light' >Thu</div>
                <div>11:00 AM - 5:00 PM</div>
                </div>
              <div className="flex-row workday">
                <div className='beige-light' >Fri</div>
                <div className="time">
                  <div>11:00 AM - 3:00 PM</div>
                  <div>5:00 PM - 8:30 PM</div>
                </div>
                </div>
              <div className="flex-row workday">
                <div className='beige-light' >Sat</div>
                <div className="time">
                  <div>10:00 AM - 2:00 PM</div>
                  <div>4:30 PM - 8:30 PM</div>
                </div>
                </div>
              <div className="flex-row workday">
                <div className='beige-light' >Sun</div>
                <div className="time">10:00 AM - 6:00 PM</div>
              </div>
            </div>
    </section>
  )
}

export default SlideInfo;


