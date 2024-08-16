var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "30% 50%",
    //     scrub: 1,
    scrub: true,
    markers: true,
  },
});
tl.to(
  "#fanta",
  {
    top: "130%",
    left: "5%",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "30%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "180%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "125%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    markers: true,
  },
});
tl2.from(
  ".service_card .lemon1",
  {
    rotate: "-90deg",
    left: "-50%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  " #cocacola",
  {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  },
  "ca"
);

tl2.from(
  " .lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  " #pepsi",
  {
    rotate: "90deg",
    top: "110%",
    left: "100%",
  },
  "ca"
);

tl2.to(
  " #orange-cut",
  {
    width: "18%",
    left: "41%",
    top: "220%",
  },
  "ca"
);
tl2.to(
  " #fanta",
  {
    width: "35%",
    top: "235%",
    left: "32%",
  },
  "ca"
);
