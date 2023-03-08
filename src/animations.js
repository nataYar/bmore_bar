import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animations = ({ width, navClicked, appRef, slide1Ref, textSlide1Ref, slide2Ref, addressContainerRef , hoursRef}) => {

  const navTl = useRef();
  const backgroundTl = useRef();
  const heroTl = useRef();
  const sslide1backgroung = useRef();
  const aboutSvgTl = useRef();
  // const heroImg = gsap.utils.selector(".hero-container");

// let slide = gsap.utils.selector(".slide1");
    // const boxes = gsap.utils.toArray(".box");
  useLayoutEffect(() => {
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
      opacity: 1, 
    })
    .to(".nav-wrapper", {
      x: '-100%',
    }, "-=.5")
    .to(".nav-wrapper", {
      opacity: 1,
    }, "-=.4")

    // four each line popping from y:120
    const popEl = gsap.utils.toArray('.popup-anim');
      popEl.forEach((el) => {
        gsap.timeline({ 
          defaults: {
            duration: 1,
            ease: "power4.inout"
            },
            scrollTrigger: {
                trigger: el,
                start: 'top 100%',
              //  markers: true
            }
          })
          .fromTo(el, { y: '30px', opacity: 0 }, { y: '0', opacity: 1 }, );
        });

      // OPACITY 0 => 1 
      const opacityEl = gsap.utils.toArray('.opacity-anim');
      opacityEl.forEach((el) => {
          gsap.timeline({ 
            defaults: {
              duration: 1,
              ease: "power1.in"
              },
              scrollTrigger: {
                  trigger: el,
                  start: 'top 100%',
                  
              }
            })
            .fromTo(el, { opacity: 0 }, { opacity: 1 } );
          });

    // ON LOAD animation
    sslide1backgroung.current = gsap.timeline({ 
        defaults: {  
        duration: 1,
        ease: "power4.inout"
        } 
    })
    .fromTo('.app_background', { scale: 2.5,  opacity: 0 }, {scale: 1, opacity: 1 })
    .fromTo('.logo', { y: '60px', scale: .5, opacity: 0, }, { scale: 1, y: '0', opacity: 1}, "<")
    // .fromTo(".popup-slide1", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3 });

    backgroundTl.current = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "power1.inout"
        },
        scrollTrigger: {
          trigger: ".slide-about",
          start: '30% 100%', 
          end: 'bottom',
          scrub: true,
          // markers: true
      }
    })

    backgroundTl.current
    .fromTo('.hero-container',{opacity: 0}, {opacity: 1,  duration: 1,
      ease: "power1.out"})
    .to('.hero-container', {y: '-250px'},"<")

    aboutSvgTl.current = gsap.timeline({
      defaults: {
        duration: 4,
        ease: "power4.inout"
        },
        scrollTrigger: {
          trigger: ".slide-about",
          start: '0% 100%', 
          end: '50% 90%',
          scrub: true,
      }
    })
    aboutSvgTl.current
    .fromTo(".scoop", {opacity: 0},{opacity: 1, rotation: 20})
    .to(".bean1", {opacity: 1, x : "-40px", y: "10px", duration: 4.5})
    .to(".bean2", {opacity: 1, x : "-70px", y: "10px", duration: 4.3}, "<")
    .to(".bean3", {opacity: 1, x : "-60px", y: "20px", duration: 4.6}, "<") //furthest
    .to(".bean4", {opacity: 1, x : "-30px", y: "10px" , duration: 3.9}, "<")
    .to(".bean5", {opacity: 1, x : "-15px", y: "3px", duration: 4.4}, "<")
    // const beanEl = gsap.utils.toArray('.bean');
    //   beanEl.forEach((el) => {
    //       gsap.timeline({ 
    //         defaults: {
    //           duration: 1,
    //           ease: "ease.in"
    //           },
    //           scrollTrigger: {
    //             trigger: el,
    //             start: 'top 100%', 
    //             end: '100% 55%',

    //             // scrub: true,
    //             // markers: true,
                  
    //           }
    //         })
            // .to(".scoop", {rotation: 20})
            // .to(el, {opacity: 1}, "+1.5")
            // .to(".bean1", {x : "-20px", y: "5px"}, "<")
            // .to(".bean2", {x : "-70px", y: "0px"}, "<")
            // .to(".bean3", {opacity: 1, x : "-30px", y: "10px"}, "+=.1")
          // });

    // .fromTo(".scoop", {x: -45, y: '-20%'}, {rotation: -20, transformOrigin: "right"}
  }, [])


  useEffect(() => {
    navClicked && width < 768 ? navTl.current.play() : navTl.current.reverse()
  }, [navClicked])


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