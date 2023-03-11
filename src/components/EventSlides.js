import React, { useState, useEffect, useRef } from 'react';
import '../styles/eventSlides.css';
import pic2 from '../images/events/2.png';
import pic3 from '../images/events/3.png';
import pic4 from '../images/events/4.png';

const EventSlides = () => {
const [slideIndex, setSlideIndex] = useState(0);

const ref1 = useRef()
const ref2 = useRef()
const ref3 = useRef()

const slides = [
  { url: pic2, title: "Lorem ipsum" },
  { url: pic3, title: "Lorem ipsum2" },
  { url: pic4, title: "Lorem ipsum3" },
];

// useEffect(() => {
//     showSlides(slideIndex);
//     console.log(slideIndex)
// }, [slideIndex])

  const goToPrevious = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = slideIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setSlideIndex(slideIndex);
  };

  return (
        <div className="past-wrapper margin-top-big width-100">
            <div className='slide-handler font-fancy-2 margin-btm-mid font-big flex-col-center'>
               <div className='flex-row handlers'>
                  <a className="prev" onClick={goToPrevious}>❮</a>
                  <div>PAST EVENTS</div>
                  <a className="next" onClick={goToNext}>❯</a>
               </div>
               <div className='dotsContainer'>
               {slides.map((slide, ind) => (
                  <div
                  className={ slideIndex == ind ? "active-dot dot" : "dot" }
                  // className=''
                    key={ind}
                    onClick={() => goToSlide(ind)}
                  >
                    ●
                  </div>
                ))}
               </div>
            </div>
            <div ref={ref1} className="pic-container width-100 pic-container-slide radius-small" id="1">
                <img className="active-slide" src={slides[slideIndex].url} alt="" />
                </div> 
            <p className='margin-top-mid'>{slides[slideIndex].title} </p>
        </div>
  )
}

export default EventSlides;