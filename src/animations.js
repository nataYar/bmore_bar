import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animations = ({ width, navClicked, appRef, slide1Ref, textSlide1Ref, slide2Ref, addressContainerRef , hoursRef}) => {

  const navTl = useRef();
  const backgroundTl = useRef();
  const background2Tl = useRef();

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
    const sslide1backgroung = gsap.timeline({ 
        defaults: {  
        duration: 1.2,
        ease: "power4.inout"
        } 
    })
    .fromTo('.app_background', { scale: 2.5,  opacity: 0 }, {scale: 1.2, opacity: 1 })
    .fromTo('.logo', { y: '60px', scale: .5, opacity: 0, }, { scale: 1, y: '0', opacity: 1}, "<")
    .fromTo(".popup-slide1", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3 });

    backgroundTl.current = gsap.timeline({
      defaults: {
        duration: 2,
        // ease: "power1"
        },
        scrollTrigger: {
          trigger: ".slide2",
          start: 'top 100%', 
          end: '30%',
          scrub: true,
          // markers: true
      }
    })

    backgroundTl.current
    .to(
      '.app_background', { scale: 1}
      )

    // background2Tl.current = gsap.timeline({
    //   defaults: {
    //     duration: 2.5,
    //     ease: "power1"
    //     },
    //     scrollTrigger: {
    //       trigger: ".slide-about",
    //       start: 'top 100%', 
    //       // end: '150%',
    //       scrub: true,
    //   }
    // })
    // background2Tl.current
    // .to('.app_background', {scale: 2, x: '-600'})
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