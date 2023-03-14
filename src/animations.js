import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Animations = ({ menuClicked, width, navClicked, scoopRef, appRef, slide1Ref, textSlide1Ref, slide2Ref, addressContainerRef , hoursRef}) => {

  const navTl = useRef();
  const backgroundTl = useRef();
  const heroTl = useRef();
  const slide0Tl = useRef();
  const sslide1backgroung = useRef();
  const aboutSvgTl = useRef();

  const menuTl = useRef();
  const galleryTl = useRef();
  const gallery2Tl = useRef();
  const gallery3Tl = useRef();
  // const heroImg = gsap.utils.selector(".hero-container");

  // let slide = gsap.utils.selector(".slide1");
  // const boxes = gsap.utils.toArray(".box");
  useLayoutEffect(() => {
    navTl.current = gsap.timeline({
      defaults: {
        duration: .5,
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
    }, "-=.3")

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
                start: 'top 90%',
            }
          })
          .fromTo(el, { y: '30px', opacity: 0 }, { y: '0', opacity: 1 }, );
        });

        slide0Tl.current = gsap.timeline({
          defaults: {
            duration: 3,
            ease: "power1.inout"
            },
            scrollTrigger: {
              trigger: ".slide2",
              start: '0% 100%', 
              // end: 'bottom',
              scrub: true,
          }
        })
    
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
                  start: 'top 90%',
                  
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
    .fromTo(".popup-slide1", { y: '20px', opacity: 0 }, { y: '0', opacity: 1, stagger: .3 });

    backgroundTl.current = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power1.inout"
        },
        scrollTrigger: {
          trigger: ".hero-img",
          start: '30% 90%', 
          end: 'bottom',
      }
    })

    backgroundTl.current
    .from(".hero-img", {scale: 1.5})

    menuTl.current = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "power4.inout"
        },
        scrollTrigger: {
          trigger: ".slide-menu",
          start: '10% 90%', 
          end: '50% 90%',
          scrub: true,
      }
    })

    menuTl.current
    .to("#tomato", {opacity: 1, rotation: 50, top: '150px', right: '5px' })
    .to("#leak", {opacity: 1 , rotation: -30, top: '320px', left: '10px' }, "<")

    galleryTl.current = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power4.inout"
        },
      scrollTrigger: {
        trigger: ".slide-gallery",
        start: '20% 80%', 
        scrub: true
      }
    })

    galleryTl.current
    .to(".line-1", { opacity: 1, left: "100%", duration: "15"})
    .fromTo(".g-pic-1", { opacity: 0, top: '90px'},  { opacity: 1, top: '0px' }, "<")
    .fromTo(".g-pic-2", { opacity: 0, top: '85px'},  { opacity: 1, top: '0px'}, "-=13.5")
 
    gallery2Tl.current = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power2.inout"
        },
      scrollTrigger: {
        trigger: ".slide-gallery",
        start: '30% 80%', 
        scrub: true,
      }
    })

    gallery2Tl.current
    .to(".line-2", { opacity: 1, left: "-250%", duration: "15"}, "+=1")
    .from(".g-pic-3", { opacity: 0, y: '90px'},"-=14")
    .from(".g-pic-4", { opacity: 0, y: '65px'}, "-=12.5")

    gallery3Tl.current = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "power2.inout"
        },
      scrollTrigger: {
        trigger: ".slide-gallery",
        start: '45% 80%', 
        scrub: true
      }
    })

    gallery3Tl.current
    .to(".line-3", { opacity: 1, left: "100%", duration: "15"},"+=1")
    .from(".g-pic-5", { opacity: 0, y: '55px'}, "-=14" )
    .from(".g-pic-6", { opacity: 0, y: '65px'}, "-=13.5")
  }, [])

  useEffect(() => {
    navClicked && width < 768 ? navTl.current.play() : navTl.current.reverse()
  }, [navClicked])

  // useEffect(() => {
  //   !menuClicked ? aboutSvgTl.current.play() : aboutSvgTl.current.play()
  // }, [menuClicked])

  // useEffect(() => {
  //   aboutSvgTl.current.play();
  // })

  useLayoutEffect(() => {
    aboutSvgTl.current = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.inout"
        },
        scrollTrigger: {
          trigger: "footer",
          start: '0% 100%', 
          end: '50% 90%',
      }
    })

    aboutSvgTl.current
    .fromTo(".scoop", { opacity: 0}, { opacity: 1, rotation: 23})
    .to(".bean1", {opacity: 1, x : "-50px", y: "100px"})
    .to(".bean2", {opacity: 1, x : "-40px", y: "120px", duration: 2}, "<")
    .to(".bean3", {opacity: 1, x : "-25px", y: "120px", duration: 2.5}, "<") //furthest
    .to(".bean4", {opacity: 1, x : "-3px", y: "50px" , duration: 1.7}, "<")
    .to(".bean5", {opacity: 1, x : "-40px", y: "60px", duration: 1.9}, "<")

    return () => {
      aboutSvgTl.current.kill();
    };
  }, [menuClicked]);

}
export default Animations;