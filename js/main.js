class App {
  constructor() {
    this.cardInners = [...document.querySelectorAll(".news__card-inner")];
    this.imageStack = [...document.querySelectorAll(".fifty-fifty__left__img")];

    this._initialize();
    this._render();
  }

  _initialize() {
    this._setInitialStates();
    this._createLenis();
    this._animateHeadlines();
    this._animateNewsEvents();
    this._animateImageStack();
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

  //lenis set up
  _createLenis() {
    this.lenis = new Lenis();
  }

  _animateHeadlines() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner__headline1",
        start: "top bottom",
        end: "bottom top",
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
      y: "400px",
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
        markers: false,
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

  _animateImageStack() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-us",
        start: "center center",
        endTrigger: ".fifty-fifty",
        end: "bottom center",
        scroll: true,
        scrub: true,
        markers: true,
      },
    });

    this.imageStack.forEach((img, index) => {
      const multi = 150 + 50 * index;
      tl.to(
        img,
        {
          y: "-=" + multi,
          delay: 0,
        },
        0
      );
    });
  }

  //Additional set up for lenis
  _render(time) {
    this.lenis.raf(time);

    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
