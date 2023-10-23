class App {
  constructor() {
    this._initialize();
    this._render();
  }

  _initialize() {
    this._setInitialStates();
    this._createLenis();
    this._createIntro();
    this._createHero();
  }

  _setInitialStates() {
    gsap.set(".banner__headline1", {
      y: 0,
      opacity: 0,
    });
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.5,
    });
  }

  _createIntro() {
    const tl = gsap.timeline();

    tl.to(
      ".banner__headline1",
      {
        y: 32,
        opacity: 1,
        ease: "expo.out",
        duration: 2,
      },
      0.5
    );
  }

  _createHero() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner__headline1",
        start: "top top",
        end: "bottom top",
        scroll: true,
        scrub: true,
        markers: true,
      },
    });

    tl.to(".banner__headline2", {
      ease: "none",
      xPercent: 10,
    });
  }

  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
