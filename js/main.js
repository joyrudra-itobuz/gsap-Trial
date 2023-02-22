console.log("Starts!");

// gsap.from(".card-1", { duration: 2, y: "-700", ease: "power3" });

const animateFxn = () => {
  //   console.log("Running for " + i + " Time.");s

  //   for (let i = 0; i < ; i++) {
  //     const element = array[i];
  //   }
  gsap.fromTo(
    ".card-1",
    { duration: 2, x: 100, y: 100 },
    { duration: 2, x: 490, y: 210, ease: "back", repeat: 2, yoyo: true }
  );

  gsap.fromTo(
    ".card-4",
    { duration: 2, x: 100, y: 100 },
    { duration: 2, x: -490, y: 160, ease: "back", repeat: 2, yoyo: true }
  );

  gsap.fromTo(
    ".card-2",
    { duration: 2, x: 100, y: 100 },
    { duration: 2, x: -490, y: -160, ease: "back", repeat: 2, yoyo: true }
  );

  gsap.fromTo(
    ".card-3",
    { duration: 2, x: 100, y: 100 },
    { duration: 2, x: 490, y: -200, ease: "back", repeat: 2, yoyo: true }
  );
};

// for (let i = 0; i < 11; i++) {
//   gsap.fromTo(
//     ".card-1",
//     { duration: 2, x: 100, y: 100 },
//     { duration: 2, x: 490, y: 210, ease: "power3" }
//   );

//   gsap.fromTo(
//     ".card-4",
//     { duration: 2, x: 100, y: 100 },
//     { duration: 2, x: -490, y: 160, ease: "power3" }
//   );

//   gsap.fromTo(
//     ".card-2",
//     { duration: 2, x: 100, y: 100 },
//     { duration: 2, x: -490, y: -160, ease: "power3" }
//   );

//   gsap.fromTo(
//     ".card-3",
//     { duration: 2, x: 100, y: 100 },
//     { duration: 2, x: 490, y: -200, ease: "power3" }
//   );
// }

// gsap.fromTo(
//   ".card-1",
//   { duration: 2, x: 100, y: 100 },
//   { duration: 2, x: 490, y: 210, ease: "power3" }
// );

// gsap.fromTo(
//   ".card-4",
//   { duration: 2, x: 100, y: 100 },
//   { duration: 2, x: -490, y: 160, ease: "power3" }
// );

// gsap.fromTo(
//   ".card-2",
//   { duration: 2, x: 100, y: 100 },
//   { duration: 2, x: -490, y: -160, ease: "power3" }
// );

// gsap.fromTo(
//   ".card-3",
//   { duration: 2, x: 100, y: 100 },
//   { duration: 2, x: 490, y: -200, ease: "power3" }
// );
