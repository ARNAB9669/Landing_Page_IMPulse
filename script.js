document.title="Get ready to explore"
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fly-in, .fly-in-left, .fly-in-right");

  const appearOptions = {
    threshold: 0.1,  // 20% of element must be visible
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});