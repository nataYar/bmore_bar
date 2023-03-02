import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animations = ({ navClicked, appRef, slide1Ref, textSlide1Ref, slide2Ref, addressContainerRef , hoursRef}) => {

  const navTl = useRef();

  useEffect(() => {
    //  navigation menu
    // const nv = gsap.utils.selector(".blob");
    navTl.current = gsap.timeline({
      defaults: {
        duration: .7,
        ease: "power1.in"
        },
      paused: true
    })

    navTl.current
    .to(".blob", {
      x: '-20%',
      y: '-10%',
      // ease: "",
      opacity: 1, 
      // duration: .9
    })
    .to(".nav-wrapper", {
      opacity: 1,
      x: '-50px',
      opacity: 1, 
    }, "-=.5")
  }, [])

  useEffect(() => {
    // navClicked ? console.log('cl'): navTl.current.reverse()
    navClicked ? navTl.current.play() : navTl.current.reverse()
  }, [navClicked])

  useLayoutEffect(() => {
    // let slide = gsap.utils.selector(".slide1");
    // const boxes = gsap.utils.toArray(".box");

      const popEl = gsap.utils.toArray('.popup-anim');
      popEl.forEach((el) => {
        gsap.timeline({ 
          defaults: {
            duration: 1,
            ease: "power1.inout"
            },
            scrollTrigger: {
                trigger: el,
                start: '-10% 100%',
                //end: "+=100"
            }
          })
          .fromTo(el, { y: '120px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3}, );
        });

    const sslide1backgroung = gsap.timeline({ 
        defaults: {
        duration: 1.2,
        ease: "power4.inout"
        } 
    })
    .fromTo('.app_background', { scale: 1.5,  opacity: 0 }, {scale: 1,  opacity: 1 })
    .fromTo('.logo', { y: '60px', scale: .5, opacity: 0, }, { scale: 1, y: '0', opacity: 1}, "<")
    .fromTo(".popup-slide1", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3 });
  }, []);


  useLayoutEffect(() => {
    // gsap.timeline({ 
    //     defaults: {
    //     duration: 1,
    //     ease: "power1.inout"
    //     },
    //     scrollTrigger: {
    //         trigger: document.getElementsByClassName('.slide2'),
    //         start: '30% 50%',
    //         scrub: true,
    //     }
    // })
    // .to('.app_background',
    // { 
    //   backgroundPosition: '15% 20%', 
    //   scale: 1.3,
    //   duration: 1
    // })

    // const ctx2 = gsap.context(() => {
    // gsap.timeline({ 
    //     defaults: {
    //     duration: 1,
    //     ease: "power2.in"
    //     },
    //     scrollTrigger: {
    //         trigger: addressContainerRef.current,
    //         start: '10% 100%',
    //         // markers: true
    //     }
    // })
    // .fromTo(".popup-anim", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .2 })
    // }, addressContainerRef);

    // const ctx3 = gsap.context(() => {
    //   gsap.timeline({ 
    //       defaults: {
    //       duration: 1,
    //       ease: "power2.in"
    //       },
    //       scrollTrigger: {
    //           trigger: hoursRef.current,
    //           start: '50% 100%',
    //           markers: true
    //       }
    //   })
    //   .fromTo(".popup-anim", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .2 })
    //   }, hoursRef);
    // return () => {
    //   ctx2.revert();
    //   ctx3.revert()
    // }; 
  }, []);
}
export default Animations;