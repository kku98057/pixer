gsap.registerPlugin(ScrollTrigger);
Splitting();
const tabs = document.querySelectorAll(".tab_btn");
const contents = document.querySelectorAll(".sports_tab_content");
const sport_texts = document.querySelectorAll(".sport_text");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    contents.forEach((content) => {
      const contentTarget = content.dataset.content;
      if (target === contentTarget) {
        tab.classList.add("active");
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
    sport_texts.forEach((text) => {
      const textTarget = text.dataset.text;
      if (target === textTarget) {
        tab.classList.add("active");
        text.classList.add("active");
      } else {
        text.classList.remove("active");
      }
    });
  });
});

// 스크롤 이동 함수
function scrollToSection(event, sectionId) {
  event.preventDefault(); // 기본 앵커 동작 중지
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); // 해당 섹션으로 스크롤
  }
}

const aboutTabs = document.querySelectorAll(".about_tab_btn");
const aboutContents = document.querySelectorAll(".about_tab_content");

aboutTabs.forEach((aboutTab) => {
  aboutTab.addEventListener("click", () => {
    const target = aboutTab.dataset.contentsTab;

    aboutTabs.forEach((item) => {
      item.classList.remove("active");
    });
    aboutContents.forEach((content) => {
      const contentTarget = content.dataset.contentInner;

      if (target === contentTarget) {
        aboutTab.classList.add("active");
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});
const loopSports = () => {
  let activeFound = false;

  for (let btn of aboutTabs) {
    if (btn.classList.contains("active")) {
      activeFound = true;
      const nextBtn = btn.nextElementSibling;
      btn.classList.remove("active");

      if (nextBtn) {
        nextBtn.classList.add("active");
      } else {
        aboutTabs[0].classList.add("active");
      }

      break; // active 클래스를 찾은 경우 반복문 종료
    }
  }

  // 모든 버튼을 검사한 후에도 active 클래스를 찾지 못한 경우, 첫 번째 버튼에 추가
  if (!activeFound) {
    aboutTabs[0].classList.add("active");
  }
};
const loopSportsContents = () => {
  let activeFound = false;

  for (let btn of aboutContents) {
    if (btn.classList.contains("active")) {
      activeFound = true;
      const nextBtn = btn.nextElementSibling;
      btn.classList.remove("active");

      if (nextBtn) {
        nextBtn.classList.add("active");
      } else {
        aboutContents[0].classList.add("active");
      }

      break; // active 클래스를 찾은 경우 반복문 종료
    }
  }

  // 모든 버튼을 검사한 후에도 active 클래스를 찾지 못한 경우, 첫 번째 버튼에 추가
  if (!activeFound) {
    aboutContents[0].classList.add("active");
  }
};

const loop = setInterval(loopSports, 3000);
const loopContents = setInterval(loopSportsContents, 3000);
const nftTabSwiper = new Swiper(".nft_tab", {
  slidesPerView: "auto",

  slidesOffsetAfter: 64,
  breakpoints: {
    1280: {
      slidesOffsetAfter: 0,
    },
  },
});

const teamSlider = new Swiper(".team_slider", {
  slidesPerView: "auto",
  slidesOffsetAfter: 24,
  slidesOffsetBefore: 24,
  spaceBetween: 22,
  navigation: {
    prevEl: `.team_prev`,
    nextEl: `.team_next`,
  },
  breakpoints: {
    769: {
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },
  },
});

const roadmapSlider = new Swiper(".roadmap_contents", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 40,
  initialSlide: 2,
  loop: true,
  pagination: {
    el: ".roadmap_pagination",
    bulletActiveClass: "active",
    bulletClass: "bullet",
    clickable: true,
    renderBullet: (cur, total) => {
      return `<div class='bullet'><div><span>${cur + 1}</span></div></div>`;
    },
  },
  breakpoints: {
    769: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    1281: {
      slidesPerView: 1.4,
      spaceBetween: 80,
    },
  },
});

window.addEventListener("load", () => {
  const marquees = document.querySelectorAll(".partners_line_wrap");
  marquees.forEach((marquee) => {
    let acc = 1;
    let acc2 = 1;
    let initialX = 0;
    let initialX2 = 0;
    let width = marquee.getBoundingClientRect().width + 80;
    let enter = false;
    let enter2 = false;
    window.addEventListener("resize", () => {
      if (window.matchMedia("(max-width:768px)").matches) {
        width = marquee.getBoundingClientRect().width + 20;
      }
    });

    const move = () => {
      marquees[0].style.transform = `translate(-${(initialX += acc)}px,0)`;
      marquees[1].style.transform = `translate(${(initialX2 += acc2)}px,0)`;
      if (initialX >= width / 4) {
        initialX = 0;
      }
      if (initialX2 >= width / 4) {
        initialX2 = 0;
      }
      requestAnimationFrame(move);
    };

    marquees[0].addEventListener("mouseenter", () => {
      if (!enter) {
        acc = 0.5;
        enter = true;
      }
      console.log(acc, acc2);
    });
    marquees[0].addEventListener("mouseleave", () => {
      if (enter) {
        acc = 1;
        enter = false;
      }
      console.log(acc, acc2);
    });
    marquees[1].addEventListener("mouseenter", () => {
      if (!enter2) {
        acc2 = 0.5;
        enter2 = true;
      }
      console.log(acc, acc2);
    });
    marquees[1].addEventListener("mouseleave", () => {
      if (enter2) {
        acc2 = 1;
        enter2 = false;
      }
      console.log(acc, acc2);
    });
    move();
  });
  loadingAni();
  sportsAni();
  vidAni();
  characterAni();
  tokensAni();
  teamAni();
  roadmapAni();
  partnerAni();
  exchangeAni();
  bannerAni();
  commonTitleAni();
});

const pixerVid = document.querySelector(".vid_video video");

const menuBtn = document.querySelector(".header_mob");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const menuBars = document.querySelectorAll(".header_mob div");
const mobList = document.querySelectorAll(".mob_nav li, .mob_app_btn");
let MENU_TOGGLE = false;
const menuTl = gsap.timeline({ paused: true });

menuTl
  .to(
    "header",
    {
      background: "transparent",
    },
    0
  )
  .to(
    menuBtn,
    {
      display: "flex",
    },
    0
  )
  .to(
    menuBars[0],
    {
      rotate: 405,
      translateY: 8,
      ease: "power4.inout",
    },
    0
  )
  .to(
    menuBars[1],
    {
      opacity: 0,
      ease: "power4.inout",
    },
    0
  )
  .to(menuBars[2], { rotate: -45, ease: "power4.inout", translateY: -8 }, 0)
  .to(
    ".menu, .menu_overlay",
    {
      yPercent: 100,
      ease: "power4.out",
      duration: 1,
      stagger: 0.1,
    },
    0
  )
  .to(
    ".mob_nav li a",
    {
      yPercent: -100,
      stagger: 0.05,
    },
    ">-0.5"
  )
  .to(".mob_bt", {
    opacity: 1,
  });

menuBtn.addEventListener("click", () => {
  if (!MENU_TOGGLE) {
    menuTl.timeScale(1);
    menuTl.play();
    body.classList.add("hidden");
    MENU_TOGGLE = true;
  } else {
    menuTl.reverse();
    body.classList.remove("hidden");
    MENU_TOGGLE = false;
  }
});
mobList.forEach((list) => {
  list.addEventListener("click", () => {
    if (!MENU_TOGGLE) {
      menuTl.timeScale(1);
      menuTl.play();
      body.classList.add("hidden");
      MENU_TOGGLE = true;
    } else {
      menuTl.reverse();
      body.classList.remove("hidden");
      MENU_TOGGLE = false;
    }
  });
});

const loading = document.querySelector(".loading");

const loadingAni = () => {
  ScrollTrigger.matchMedia({
    "(min-width:1101px)": () => {
      const tl = gsap.timeline();
      tl.to(".loading", {
        delay: 1,
      })
        .to(".loading", {
          opacity: 0,
        })
        .to(
          "html",
          {
            overflow: "visible",
            onComplete: aboutAni(),
          },
          ">-0.5"
        )
        .from(
          ".logo",
          {
            scale: 0,
            ease: "power4.out",
          },
          ">-0.25"
        )
        .from(
          ".hero h2 .char",
          {
            rotateY: 360,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
            stagger: {
              from: "center",
              amount: 0.5,
            },
          },
          ">-0.25"
        )
        .from(
          " .hero_sub .char",
          {
            rotateY: 360,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
            stagger: {
              from: "center",
              amount: 0.5,
            },
          },
          ">-0.5"
        )
        .from(
          ".header_rt .nav li a",
          {
            yPercent: 100,
          },
          ">-1.5"
        )
        .from(
          ".login_btn",
          {
            yPercent: 105,
          },
          ">-0.25"
        )
        .from(
          ".header_rt .app_btn",
          {
            yPercent: 100,
            opacity: 0,
          },
          ">-0.25"
        );
    },
    "(max-width:1100px)": () => {
      const tl = gsap.timeline();
      tl.to(".loading", {
        delay: 1,
      })
        .to(".loading", {
          opacity: 0,
        })
        .to(
          "html",
          {
            overflow: "visible",
            onComplete: aboutAni(),
          },
          ">-0.5"
        )
        .from(
          ".logo",
          {
            scale: 0,
            ease: "power4.out",
          },
          ">-0.25"
        )
        .from(
          ".hero h2 .char",
          {
            rotateY: 360,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
            stagger: {
              from: "center",
              amount: 0.5,
            },
          },
          ">-0.25"
        )
        .from(
          " .hero_sub .char",
          {
            rotateY: 360,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
            stagger: {
              from: "center",
              amount: 0.5,
            },
          },
          ">-0.5"
        )
        .from(
          ".header_mob div",
          {
            xPercent: 100,
            stagger: {
              amount: 0.25,
            },
          },
          ">-1.5"
        );
    },
  });
};
const sportsAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    "(min-width:1281px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sports_contents",
            start: "0 70%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(".sports_contents", {
          yPercent: 10,
          opacity: 0,
          duration: 1,
          ease: "power4.inout",
        });
    },
    "(max-width:1280px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".sport_content",
            start: "0 70%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(".sport_content", {
          yPercent: 10,
          opacity: 0,
        });
      const sportsTexts = gsap.utils.toArray(".sport_text p");
      sportsTexts.forEach((text) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: text,
              start: "0 70%",
              toggleActions: "play reverse play reverse",
            },
          })
          .from(text, {
            yPercent: 10,
            opacity: 0,
            duration: 1,
            ease: "power4.inout",
          });
      });
    },
  });
};
const vidAni = () => {
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".vid_video",
        start: "50% 70%",
        end: "100% 0%",
        toggleActions: "play reverse play reverse",
      },
    })
    .from(
      ".vid_video",
      {
        opacity: 0,
      },
      0
    )
    .from(
      ".bar_inner1",
      {
        duration: 2,
        xPercent: -100,
      },
      0
    )
    .from(
      ".bar_inner2",
      {
        duration: 2,
        xPercent: 100,
        onComplete: () => {
          const bars = document.querySelectorAll(".bar_wrap");
          bars.forEach((bar) => {
            bar.querySelector(".bar_inner").classList.add("active");
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
            bar.querySelector(".bar_inner").classList.remove("active");
          });
        },
      }
    );
};
const aboutAni = () => {
  ScrollTrigger.saveStyles(
    ".about_text p, .about_title h3, .about_title .text-line"
  );
  ScrollTrigger.matchMedia({
    "(min-width:769px)": () => {
      const tlitle = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about_title",
            start: "0 70%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(
          ".about_title h3",
          {
            yPercent: 30,
            opacity: 0,
            stagger: 0.25,
          },
          0
        )
        .from(
          ".about_title .text-line",
          {
            opacity: 0,
          },
          0.25
        );

      const aboutText = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about_text",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".about_text p", {
          delay: 0.25,
          yPercent: 10,
          opacity: 0,
        });

      const aboutContents = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about_tab",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".about_tab_btn", {
          opacity: 0,
          stagger: 0.25,
          ease: "power4.inout",
        })
        .from(
          ".about_tab_contents",
          {
            opacity: 0,
            duration: 1,
            ease: "power4.inout",
          },
          ">-0.25"
        );
    },
    "(max-width:768px)": () => {
      const title = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about_title",
            start: "0 70%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(
          ".about_title h3",
          {
            yPercent: 30,
            opacity: 0,
            stagger: 0.25,
          },
          0
        )
        .from(
          ".about_title .text-line",
          {
            opacity: 0,
          },
          0.25
        );
      const aboutText = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about_text",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".about_text p", {
          delay: 0.25,
          yPercent: 10,
          opacity: 0,
        });
      gsap.set(".about_content2-list .about_tab_text h3", {
        opacity: 0,
        yPercent: 50,
      });
      gsap.set(".about_content2-list .about_tab_text p", {
        opacity: 0,
        yPercent: 10,
      });
      gsap.set(".about_content2-list .about_tab_img", {
        opacity: 0,
        yPercent: 5,
      });

      const imgs = gsap.utils.toArray(".about_content2-list .about_tab_img");

      const h3s = gsap.utils.toArray(".about_content2-list .about_tab_text h3");
      const ps = gsap.utils.toArray(".about_content2-list .about_tab_text p");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          scrub: 0.5,
          pin: true,
          end: "+=8000",
        },
      });

      const fisrt = tl
        .to(
          imgs[0],
          {
            opacity: 1,
            yPercent: 0,
          },
          "+=1.5"
        )
        .to(
          h3s[0],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to(
          ps[0],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to({ duration: 1 }, {})
        .to(imgs[0], {
          opacity: 0,
          yPercent: -10,
        })
        .to(
          h3s[0],
          {
            opacity: 0,
            yPercent: -10,
          },
          ">-0.5"
        )
        .to(
          ps[0],
          {
            opacity: 0,
            yPercent: -10,
          },
          ">-0.5"
        );
      const second = tl
        .to(
          imgs[1],
          {
            opacity: 1,
            yPercent: 0,
          },
          "+=0.5"
        )
        .to(
          h3s[1],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to(
          ps[1],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to({ duration: 1 }, {})
        .to(imgs[1], {
          opacity: 0,
          yPercent: -10,
        })
        .to(
          h3s[1],
          {
            opacity: 0,
            yPercent: -10,
          },
          ">-0.5"
        )
        .to(
          ps[1],
          {
            opacity: 0,
            yPercent: -10,
          },
          ">-0.5"
        );

      const third = tl
        .to(
          imgs[2],
          {
            opacity: 1,
            yPercent: 0,
          },
          "+=0.5"
        )
        .to(
          h3s[2],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to(
          ps[2],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to({ duration: 1 }, {})
        .to(imgs[2], {
          opacity: 0,
          yPercent: -10,
        })
        .to(
          h3s[2],
          {
            opacity: 0,
            yPercent: -10,
          },
          ">-0.5"
        )
        .to(
          ps[2],
          {
            opacity: 0,
            yPercent: -10,
          },
          ">-0.5"
        );
      const fourth = tl
        .to(imgs[3], {
          opacity: 1,
          yPercent: 0,
        })
        .to(
          h3s[3],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to(
          ps[3],
          {
            opacity: 1,
            yPercent: 0,
          },
          ">-0.5"
        )
        .to({ duration: 1 }, {});

      tl.addLabel("first");
      tl.addLabel("second");
      tl.addLabel("third");
      tl.addLabel("fourth");
      fisrt.add(fisrt, "fisrt");
      second.add(second, "second");
      third.add(third, "third");
      fourth.add(fourth, "fourth");
    },
  });
};
const characterAni = () => {
  ScrollTrigger.saveStyles(".nft_tab, .nft_cotents");
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".nft_tab",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".nft_tab", {
          opacity: 0,
          yPercent: 20,
        })
        .from(
          ".nft_cotents",
          {
            opacity: 0,
            yPercent: 20,
          },
          ">-0.25"
        );
    },
  });
};
const tokensAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    "(min-width:769px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tokens_contents",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".tokens_contents", {
          opacity: 0,
          yPercent: 20,
        });
    },
    "(max-width:768px)": () => {
      const tokens = gsap.utils.toArray(".tokens_content");
      tokens.forEach((token) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: token,
              toggleActions: "play reverse play reverse",
              start: "0 70%",
            },
          })
          .from(token, {
            opacity: 0,
            yPercent: 20,
          });
      });
    },
  });
};
const teamAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".team_slider",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".team_slider", {
          opacity: 0,
        });
    },
  });
};
const roadmapAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".roadmap_contents",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".roadmap_contents", {
          opacity: 0,
        });
    },
  });
};
const partnerAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".partners_contents",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".partners_line_wrap", {
          stagger: 0.25,
          opacity: 0,
        });
    },
  });
};
const exchangeAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".exchanges_contents",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".exchanges_line_wrap", {
          opacity: 0,
        });
    },
  });
};
const bannerAni = () => {
  ScrollTrigger.saveStyles();
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".banner_wrap",
            toggleActions: "play reverse play reverse",
            start: "0 70%",
          },
        })
        .from(".banner_bg", {
          opacity: 0,
        })
        .to(
          ".banner_wrap",
          {
            clipPath: "inset(0 0% 0 0)",
          },
          ">-0.25"
        )
        .from(
          ".banner_wrap h3",
          {
            yPercent: 30,
            opacity: 0,
          },
          ">-0.25"
        )
        .from(
          ".banner_wrap p",
          {
            yPercent: 10,
            opacity: 0,
          },
          ">-0.25"
        )
        .from(
          ".banner_wrap a",
          {
            yPercent: 30,
            opacity: 0,
          },
          ">-0.25"
        );
    },
  });
};
const commonTitleAni = () => {
  ScrollTrigger.saveStyles(".common_title h3, .title-animation .text-line");
  ScrollTrigger.matchMedia({
    all: () => {
      const textlines = gsap.utils.toArray(".text-line");
      textlines.forEach((text) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: text,
              scrub: 1,
              start: "0% 70%",
            },
          })
          .to(
            text,
            {
              xPercent: -75,
            },
            0
          );
        const texts = text.querySelectorAll("span:not(:first-child)");
        texts.forEach((tt, idx) => {
          const tl2 = gsap
            .timeline({
              scrollTrigger: {
                trigger: tt,
                scrub: 1,
                start: "0% 60%",
              },
            })
            .to(
              tt,
              {
                yPercent: (idx + 1) * 10,
              },
              0
            );
        });
      });
      const titles = gsap.utils.toArray(".title-animation");

      titles.forEach((title) => {
        const h3 = title.querySelectorAll("h3");
        const text = title.querySelector(".text-line");

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: title,

              toggleActions: "play reverse play reverse",
            },
          })
          .from(
            h3,
            {
              yPercent: 30,
              opacity: 0,
              stagger: 0.25,
            },
            0
          )
          .from(
            text,
            {
              opacity: 0,
            },
            0.25
          );
      });
    },
  });
};

const imgs = document.querySelectorAll(".nft_contents_slider img");
let totalImg = 0;

function checkAllImagesLoaded() {
  if (imgs.length === totalImg) {
    const sliders = document.querySelectorAll(".nft_contents_slider");
    sliders.forEach((slide) => {
      slide.style.display = "none";
    });
  }
}

imgs.forEach((img) => {
  if (img.complete) {
    totalImg++;
    checkAllImagesLoaded();
  } else {
    img.addEventListener("load", () => {
      totalImg++;
      checkAllImagesLoaded();
    });
  }
});

let hasRefreshed = false;
let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  if (
    ((windowWidth > 768 && lastWidth <= 768) ||
      (windowWidth <= 768 && lastWidth > 768) ||
      (windowWidth > 1280 && lastWidth <= 1280) ||
      (windowWidth <= 1280 && lastWidth > 1280)) &&
    !hasRefreshed
  ) {
    hasRefreshed = true; // 새로고침 상태를 업데이트합니다.
    location.reload(); // 페이지를 새로고침합니다.
  }

  lastWidth = windowWidth;
});
