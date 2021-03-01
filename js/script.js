const tl = gsap.timeline({defualts: {ease: 'power.out'}})

tl.to(".intro-text", { y: "0%", duration: 2.5, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".introduction", {y: "-100%", duration: 1}, "-=1");
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo(".title", {opacity: 0}, {opacity: 1, duration: 5})
