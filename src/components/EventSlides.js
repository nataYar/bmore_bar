import React, { useState, useEffect } from 'react';
import '../styles/eventSlides.css';

import { db } from '../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";

const EventpastEvents = ({ width }) => {
  const [imagesData, setImagesData] = useState([]);
  const [pastEvents, setPastEvents] = useState([])
  const [futureEvents, setFutureEvents] = useState([])
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const eventsRef = collection(db, 'events');
    const unsubscribe = onSnapshot(eventsRef, (querySnapshot) => {
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImagesData(eventsData);
    });
  
    return () => unsubscribe();
  }, []);

  

  useEffect(() => {
    const now = new Date();
    setPastEvents(imagesData.filter((event) => {
        const eventDate = event.timestamp.toDate();
        return eventDate < now;
        }))
    setFutureEvents(imagesData.filter((event) => {
        const eventDate = event.timestamp.toDate();
        return eventDate >= now;
        }))
}, [imagesData])

  const goToPrevious = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? pastEvents.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = slideIndex === pastEvents.length - 1;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setSlideIndex(slideIndex);
  };

  return (
    <div className="events-container">
    <div className="upcoming-wrapper flex-col-center margin-btm-big">
    { futureEvents.length > 0 ? 
    <h2 className="upcoming-wrapper-title flex-col-center font-big opacity-anim"
  
    >UPCOMING</h2> : null }
      <div className={futureEvents.length > 1 ? "between upcoming-wrapper-slides opacity-anim" : "center upcoming-wrapper-slides opacity-anim"} 
      >
      {
      futureEvents.map((el, ind) => (
          <div 
          key={ind}
          className="events-pic-container radius-small ">
            <img src={el.imageUrl} alt="" />
          </div> 
        ))
      }
      </div>
    </div>
    
    <div className="past-wrapper opacity-anim">
        <div className='slide-handler font-fancy-2 margin-btm-mid font-big flex-col-center'>
            <div className='flex-row handlers'>
            { pastEvents.length > 1 ? <div className="prev" onClick={goToPrevious}>❮</div> : null }
            { pastEvents.length > 0 ?  <div>PAST EVENTS</div> : null }
            { pastEvents.length > 1 ? <div className="next" onClick={goToNext}>❯</div>: null }
            </div>

            <div className='dotsContainer'>
            {
              pastEvents.length > 1 ?
            pastEvents.map((slide, ind) => (
              <div
              className={ slideIndex == ind ? "active-dot dot" : "dot" }
                key={ind}
                onClick={() => goToSlide(ind)}
              > ● </div> ))
              :
              null
            }
            </div>
        </div>

        { pastEvents.length > 0 ?
          <div className="radius-small" id="1">
            <img className="past-events-container active-slide" src={pastEvents[slideIndex].imageUrl} alt="" />
          </div> 
          : null
        }
    </div>
    </div>
  )
}

export default EventpastEvents;