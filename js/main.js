class App {
  constructor() {
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
    // gsap.set(".banner__headline1", {
    //   backgroundPositionY: "50%",
    // });
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
        markers: true,
      },
    });
    tl.to(".news-and-events-cont", {
      ease: "none",
      y: "-500px",
    });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
