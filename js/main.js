class App {
  constructor() {
    this.cardInners = [...document.querySelectorAll(".news__card-inner")];

    this._initialize();
    this._render();
  }

  _initialize() {
    this._setInitialStates();
    this._createLenis();
    this._createIntro();
    this._animateHeadlines();
    this._animateNewsEvents();
  }

  _setInitialStates() {
    gsap.set(".news__card-inner .small-title, .news__card-inner .mid-text", {
      yPercent: 150,
      opacity: 0,
    });
    gsap.set(".news__card-inner img", {
      xPercent: 80,
      opacity: 0,
    });
  }

  _createLenis() {
    this.lenis = new Lenis();
  }

  _createIntro() {
    // const tl = gsap.timeline();
    // tl.to(
    //   ".banner__headline1",
    //   {
    //     y: 32,
    //     opacity: 1,
    //     ease: "expo.out",
    //     duration: 2,
    //   },
    //   0.5
    // );
  }

  _animateHeadlines() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner__headline1",
        start: "top center",
        end: "bottom center",
        scroll: true,
        scrub: true,
        markers: false,
      },
    });

    tl.to(".banner__headline1", {
      ease: "none",
      backgroundPositionY: "70%",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner__headline1",
        start: "top center",
        end: "bottom center",
        scroll: true,
        scrub: true,
        markers: false,
      },
    });

    tl2.to(".banner__headline2", {
      ease: "none",
      y: "-300px",
    });
  }

  _animateNewsEvents() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner__headline2",
        start: "top center",
        // endTrigger: ".news-and-events-cont",
        end: "bottom top",
        scroll: true,
        scrub: true,
        markers: false,
      },
    });
    tl.to(".news-and-events-cont", {
      ease: "none",
      y: "-500px",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".news",
        start: "top-=250 center",
        markers: true,
      },
    });

    this.cardInners.forEach((cardInner, index) => {
      const smallTitle = cardInner.querySelector(".small-title");
      const midText = cardInner.querySelector(".mid-text");
      const imgbtn = cardInner.querySelector("img");

      tl2
        .to(
          smallTitle,
          {
            ease: "expo.out",
            yPercent: 0,
            delay: 0,
            opacity: 1,
            duration: 1,
          },
          0
        )
        .to(
          midText,
          {
            ease: "expo.out",
            yPercent: 0,
            delay: 0.4,
            opacity: 1,
            duration: 1,
          },
          0
        )
        .to(
          imgbtn,
          {
            ease: "expo.out",
            xPercent: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
          },
          0
        );
    });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
