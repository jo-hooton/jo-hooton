const nameReveal = () => {
  anime({
    targets: ".letter-o",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: function (el, i) {
      return i * 150;
    },
    direction: "alternate",
    loop: false,
  });
  anime({
    targets: ".letter-not-o",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuad",
    duration: 1500,
    delay: function (el, i) {
      return 1500 + i * 150;
    },
    direction: "alternate",
    loop: false,
  });
};

nameReveal();
