function cursor() {
  var cursor = document.querySelector(".cursor, .inner-circle"); // Updated selector

  document.addEventListener("mousemove", function (event) {
    // Changed "dets" to "event"
    gsap.to(cursor, {
      x: event.clientX,
      y: event.clientY,
      ease: "power3.out",
      duration: 0.7,
    });
  });
}
cursor();

function lenisScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenisScroll();

function homePageAnimation() {
  var tl = gsap.timeline();

  tl.from(".nav-left, .nav-right .menu-item li", {
    // Updated selector
    y: -40,
    opacity: 0,
    delay: 1,
    duration: 0.7,
    stagger: 0.15,
  });
  tl.from(".content-left h3", {
    // Updated selector
    x: -200,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".content-left h1", {
    // Updated selector
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".content-left p", {
    // Updated selector
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".download-btn", {
    // Updated selector
    opacity: 0,
    duration: 1,
  });
  tl.from(
    ".content-right img",
    {
      // Updated selector
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  ); // Added parameter to align with the previous animation
}
homePageAnimation();


// scripts.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
