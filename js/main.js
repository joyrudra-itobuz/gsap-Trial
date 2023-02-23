console.log("Starts!");

// gsap.from(".card-1", { duration: 2, y: "-700", ease: "power3" });

const animateFxn = () => {
  let animateBtn = document.querySelector(".animate-btn");
  console.log(animateBtn.textContent);

  let gsapTimeline = gsap.timeline({
    // delay: 0.5,
    // paused: true, // default is false
    repeat: 2, // number of repeats (-1 for infinite)
    // repeatDelay: 1, // seconds between repeatss
    repeatRefresh: true, // invalidates on each repeat
    yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
    defaults: {
      // children inherit these defaults
      duration: 1,
      ease: "back",
    },
    smoothChildTiming: true,
    autoRemoveChildren: true,
    // other callbacks:
    // onStart, onUpdate, onRepeat, onReverseComplete
    // Each callback has a params property as well
    // i.e. onUpdateParams (Array)
  });

  gsapTimeline
    .fromTo(".card-1", { x: 100, y: 100 }, { x: 490, y: 200 })
    .to(".card-4", { x: -490, y: 160 })
    .to(".card-2", { x: -490, y: -160 })
    .to(".card-3", { x: 490, y: -200 });

  gsap.timeline().reverse(gsapTimeline);

  // if (animateBtn.textContent == "Animate") {
  //   console.log("If Block Called!");
  //   animateBtn.textContent = "Reverse";
  //   gsapTimeline.resume();
  // } else if (animateBtn.textContent == "Reverse") {
  //   console.log("Else block called!");
  //   animateBtn.textContent = "Animate";
  //   gsapTimeline.reverse();
  // }

  // gsapTimeline.reverse();
};

// V3
//Comment added by Rahul
//2nd Comment!

//Long Comment asdjasdkjashdjhajkdsahl
