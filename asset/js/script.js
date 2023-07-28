gsap.registerPlugin(ScrollTrigger, Observer);
const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".vid_bar",
      start: "50% 70%",
      end: "100% 0%",
      toggleActions: "play reverse play reverse",
    },
  })
  .from(
    ".bar_wrap .bar1",
    {
      duration: 2,
      xPercent: -100,
    },
    0
  )
  .from(
    ".bar_wrap .bar2",
    {
      duration: 2,
      xPercent: 100,

      onComplete: () => {
        const bars = document.querySelectorAll(".bar_wrap");
        bars.forEach((bar) => {
          bar.children[0].classList.add("active");
        });
      },
    },
    0
  )
  .to(
    {},
    {
      onReverseComplete: () => {
        const bars = document.querySelectorAll(".bar_wrap");
        bars.forEach((bar) => {
          bar.children[0].classList.remove("active");
        });
      },
    }
  );

const texts = document.querySelectorAll(".text-line span:not(:first-child)");
texts.forEach((text, idx) => {
  const tl2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: text,
        scrub: 1,
        markers: true,
        start: "0% 70%",
      },
    })
    .to(text, {
      yPercent: (idx + 1) * 5,
    });
});
