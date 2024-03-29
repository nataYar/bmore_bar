import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animations = ({ pictures, menuClicked, width, navClicked }) => {

  const navTl = useRef();
  const backgroundTl = useRef();
  const slide0Tl = useRef();
  const slide1Tl = useRef();
  const aboutSvgTl = useRef();

  const menuTl = useRef();
  const menuTl2 = useRef();
  const galleryTl = useRef();
  const gallery2Tl = useRef();
  const gallery3Tl = useRef();
  const gPicsTl = useRef();
  const opacityTl = useRef(gsap.timeline({ paused: true }));
  const popUpTl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const gPicsTl = gsap.utils.toArray('.g-pic');
      gPicsTl.forEach((el) => {
        gPicsTl.current = gsap.timeline({ 
          defaults: {
            duration: 1,
            ease: "power1.in"
            },
            scrollTrigger: {
                trigger: el,
                start:  () => '0% 90%',
            }
          })
          .fromTo(el, { opacity: 0 }, { opacity: 1 } );
        });
  }, [pictures]);

  useLayoutEffect(() => {
    navTl.current = gsap.timeline({
      defaults: {
        duration: .5,
        ease: "power1.in"
        },
      paused: true })

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
    }, "-=.3")

    slide0Tl.current = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power2.inout"
        },
        scrollTrigger: {
          trigger: ".slide2",
          start: '0% 100%', 
          end: '50% 50%',
          scrub: true
      }
    })
    .to('.app_background', { y: '200px' })

    // ON LOAD animation
    slide1Tl.current = gsap.timeline({ 
        defaults: {  
        duration: 2,
        ease: "power4.inout"
        } 
    })
    .fromTo('.app_background', { scale: 1.5 }, {scale: 1 })
    .fromTo('.logo', { y: '60px', scale: .5, opacity: 0, }, { scale: 1, y: '0', opacity: 1}, "<")

    menuTl.current = gsap.timeline({
      defaults: {
        duration: 4,
        ease: "power4.inout"
        },
        scrollTrigger: {
          trigger: ".slide-menu",
          start: '10% 75%', 
          end: '50% 90%',
          scrub: true,
      }
    })

    menuTl.current
    .to("#tomato", {opacity: .8, rotation: 50, top: '220px', right: '-5px' })

    menuTl2.current = gsap.timeline({
      defaults: {
        duration: 4,
        ease: "power4.inout"
        },
        scrollTrigger: {
          trigger: ".slide-menu",
          start: '30% 75%', 
          end: '60% 90%',
          scrub: true,
      }
    })

    menuTl2.current
    .to("#leak", {opacity: .8 , rotation: -30, top: '620px', left: '-10px' })

    galleryTl.current = gsap.timeline({
      defaults: {
        ease: "power2.inout"
        },
      scrollTrigger: {
        trigger: ".slide-gallery",
        start: '10% 80%',
      }
    })

    galleryTl.current
    .to(".line-1", { opacity: 1, left: "100%", duration: "6"})
  
    gallery2Tl.current = gsap.timeline({
      defaults: {
        ease: "power2.inout"
        },
      scrollTrigger: {
        trigger: ".slide-gallery",
        start: '50% 70%', 
      }
    })
    .to(".line-2", { opacity: 1, left: "-150%", duration: "12"})
  
    gallery3Tl.current = gsap.timeline({
      defaults: {
        ease: "power2.inout"
        },
      scrollTrigger: {
        trigger: ".slide-gallery",
        start: '65% 70%', 
      }
    })
    .to(".line-3", { opacity: 1, left: "100%", duration: "6"}, )

    aboutSvgTl.current = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.inout"
        },
        scrollTrigger: {
          trigger: "footer",
          start: '20% 100%', 
      }
    })
  
    aboutSvgTl.current
    .fromTo(".scoop", { opacity: 0}, { opacity: 1, rotation: 23})
    .to(".bean1", {opacity: 1, x : "-50px", y: "100px"})
    .to(".bean2", {opacity: 1, x : "-40px", y: "120px", duration: 2}, "<")
    .to(".bean3", {opacity: 1, x : "-25px", y: "120px", duration: 2.5}, "<") 
    .to(".bean4", {opacity: 1, x : "-3px", y: "50px" , duration: 1.7}, "<")
    .to(".bean5", {opacity: 1, x : "-40px", y: "60px", duration: 1.9}, "<")
    
    backgroundTl.current = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power1.inout"
        },
        scrollTrigger: {
          trigger: ".hero-img",
          start: '30% 80%', 
          end: 'bottom'
      }
    })

    backgroundTl.current.from(".hero-img", { scale: 1.5 })
       
  const opacityEl = gsap.utils.toArray('.opacity-anim');
  opacityEl.forEach((el) => {
    opacityTl.current = gsap.timeline({ 
        defaults: {
          duration: 1,
          ease: "power1.in"
          },
          scrollTrigger: {
              trigger: el,
              // markers: true,
              start:  () => '0% 90%',
              // end:  () => `+=${el.offsetHeight}`,
          }
        })
        .fromTo(el, { opacity: 0 }, { opacity: 1 } );
      });

    const gPicsTl = gsap.utils.toArray('.g-pic');
    gPicsTl.forEach((el) => {
      gPicsTl.current = gsap.timeline({ 
          defaults: {
            duration: 1,
            ease: "power1.in"
            },
            scrollTrigger: {
                trigger: el,
                start:  () => '0% 90%',
            }
          })
          .fromTo(el, { opacity: 0 }, { opacity: 1 } );
        });

    // four each line popping from y:120
    const popEl = gsap.utils.toArray('.popup-anim');
    popEl.forEach((el) => {
    popUpTl.current = gsap.timeline({ 
        defaults: {
          duration: 1,
          ease: "power4.inout"
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            // markers: true
          }
        })
        .fromTo(el, { y: '30px', opacity: 0 }, { y: '0', opacity: 1 }, );
      });

    return () => {
      gPicsTl.current.kill();
      opacityTl.current.kill(); 
      popUpTl.current.kill()
      navTl.current.kill()
      slide0Tl.current.kill()
      slide1Tl.current.kill();
      backgroundTl.current.kill();
      aboutSvgTl.current.kill();
      galleryTl.current.kill();
      gallery2Tl.current.kill();
      gallery3Tl.current.kill();
      menuTl.current.kill();
      menuTl2.current.kill();
      };
    }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [menuClicked])

  useEffect(() => {
    navClicked && width < 768 ? navTl.current.play() : navTl.current.reverse()
  }, [navClicked])
}
export default Animations;