import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animations = ({slide1Ref, textSlide1Ref, slide2Ref, addressContainerRef }) => {
 
  useLayoutEffect(() => {
    let slide = gsap.utils.selector(slide1Ref);
    gsap.timeline({ 
        defaults: {
        duration: 1.2,
        ease: "power4.inout"
        } 
    })
    .fromTo('.app_background', { scale: 1.5,  opacity: 0 }, {scale: 1,  opacity: 1 })
    .fromTo('.logo', { y: '60px', scale: .5, opacity: 0, }, { scale: 1, y: '0', opacity: 1}, "<")
    .fromTo(slide(".popup-text"), { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3 }, "<");
    
    // let ctx = gsap.context(() => {
    //   gsap.timeline({ 
    //     defaults: {
    //     duration: 1.2,
    //     ease: "power4.inout"
    //     }
    //   })
    //   .fromTo(".popup-text", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3 }, "+=.5");
    // }, textSlide1Ref); // <- IMPORTANT! Scopes selector text
    // return () => ctx.revert(); // cleanup
  }, []);


  useLayoutEffect(() => {
    gsap.timeline({ 
        defaults: {
        duration: 1,
        ease: "power1.inout"
        },
        scrollTrigger: {
            trigger: document.getElementsByClassName('.slide2'),
            start: '30% 50%',
            scrub: true,
        }
    })
    .to('.app_background',
    { 
      backgroundPosition: '15% 20%', 
      scale: 1.3,
      duration: 1
    })

    const ctx2 = gsap.context(() => {
    gsap.timeline({ 
        defaults: {
        duration: 1,
        ease: "power2.in"
        },
        scrollTrigger: {
            trigger: addressContainerRef.current,
            start: '-15% 100%',
            // markers: true
        }
    })
    .fromTo(".popup-text", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .2 })
    }, addressContainerRef);
    return () => ctx2.revert(); 
  }, []);
}
export default Animations;