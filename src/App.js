import React from "react";
import { useLayoutEffect, useRef } from "react";
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const slide1Ref = useRef();
  const tlSlide1 = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const lines = self.selector(".popup-text");
      tlSlide1.current = gsap
        .timeline()
        .fromTo('.logo', { y: '20px', opacity: 0, duration: 1, }, { y: '0', opacity: 1, duration: 1.8 })
        .fromTo(lines, { y: '20px', opacity: 0 }, { y: '0', opacity: 1, duration: 1, stagger: .5 } , .2)
    }, slide1Ref); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);


  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     const lines = self.selector(".popup-text");
  //     tlSlide1.current = gsap
  //       .timeline()
  //       .fromTo(lines[0], { x: '-20px', opacity: 1 }, { x: '0', opacity: 1, duration: 1, stagger: .5 } )
  //       // .to(lines[1], { x: -120, rotation: -360 }, "<")
  //       // .to(lines[2], { y: -166 })
  //       .reverse();
  //   }, slide1Ref); // <- Scope!
  //   return () => ctx.revert(); // <- Cleanup!
  // }, []);


  return (
    <div className="app">
      <header>
        {/* logo, navigation  */}
      </header>
      <main className='app_background'>
        <article className='slide1-container slide' ref={slide1Ref}>
          {/* <h1>JavaScript Basics</h1> */}
          <div className='slide1_logo_container'>
           <div className="logo"></div>
          </div>
          <p className="popup-text">BE KIND</p>
          <p className="popup-text">BE STRONG</p>
          <p className="popup-text">BE MORE</p>
          {/* <section>
              <h2>Syntax Basics</h2>
              <p>Understanding statements, variable naming, whitespace...</p>
          </section> */}
          <section>
              <h2>Operators</h2>
              <p>Operators allow you to manipulate values...</p>
          </section>
          <section>
              <h2>Conditional Code</h2>
              <p>Sometimes you only want to run a block of code under certain conditions...</p>
          </section>
        </article>
      </main>
      
      <footer>
          Footer information, links, etc.
      </footer>
    </div>
  );
}

export default App;
