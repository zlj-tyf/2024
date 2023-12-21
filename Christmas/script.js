MorphSVGPlugin.convertToPath("circle, rect, polygon, ellipse");

TweenMax.set("svg", { visibility: "visible" });

var snowBody = $("#bottom"),
  buttons = $("#bottom_buttons path"),
  arms = $("#right_arm, #left_arm "),
  face = $("#face path"),
  nose = $("#nose"),
  ears = $("#ears"),
  moon = $("#moon"),
  stars = $("#stars path"),
  snow = $("#snow path"),
  snow2 = $("#snow2 path"),
  snow3 = $("#snow3 path"),
  text = $("#test path"),
  sceneryFront = $("#GroundFront"),
  sceneryBack = $("#GroundBack");

TweenMax.set(sceneryBack, { visibility: "hidden" });
TweenMax.set(sceneryFront, { visibility: "hidden" });

var masterTl = new TimelineMax({ paused: true });
  // Scenery
var tl = new TimelineMax({ paused: true });
  tl
    .fromTo(
      sceneryFront,
      1.5,
      { y: 500 },
      { y: 0, visibility: "visible" },
      "scenestart"
    )
    .fromTo(
      sceneryBack,
      1,
      { y: 500 },
      { y: 0, visibility: "visible" },
      "scenestart+=0.5"
    )
    //Trees
    .staggerFromTo(
      "#TreeGroup1 path",
      0.2,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1) },
      0.15
    )
    .staggerFromTo(
      "#TreeGroup2 path",
      0.2,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1) },
      0.15
    )
    // moon and the stars
    .fromTo(
      moon,
      3,
      { opacity: 0, y: 750 },
      { opacity: 1, y: 0, ease: Back.easeInOut },
      "scenestart-=1"
    )
    .staggerFromTo(
      stars,
      2.5,
      { opacity: 0, y: 600 },
      { opacity: 1, y: 0, ease: Back.easeInOut },
      0,
      "scenestart+=0.35"
    );
// Snowman
var snowManDropTl = new TimelineMax({ paused: true });
snowManDropTl.fromTo(
  snowBody,
  0.6,
  { opacity: 0, y: -500 },
  { opacity: 1, y: 0, ease: Power4.easeIn },
  "drop"
)
  .staggerFromTo(
    buttons,
    0.6,
    { opacity: 0, y: -500 },
    { opacity: 1, y: 0, ease: Power4.easeIn },
    0.1,
    "drop+=0.3"
  )
  .staggerFromTo(
    arms,
    0.6,
    { opacity: 0, y: -500 },
    { opacity: 1, y: 0, ease: Power4.easeIn },
    0.3,
    "drop+=0.4"
  )
  .fromTo(
    scarf,
    0.6,
    { opacity: 0, y: -500 },
    { opacity: 1, y: 0, ease: Power4.easeIn },
    "drop+=0.4"
  )
  .staggerFromTo(
    face,
    0.6,
    { opacity: 0, y: -500 },
    { opacity: 1, y: 0, ease: Power4.easeIn },
    0.1,
    "drop+=0.6"
  )
  .fromTo(
    nose,
    0.6,
    { opacity: 0, y: -500 },
    { opacity: 1, y: 0, ease: Power4.easeIn },
    "drop+=1"
  )
  .fromTo(
    ears,
    0.6,
    { opacity: 0, y: -500 },
    { opacity: 1, y: 0, ease: Power4.easeIn },
    "drop+=1.2"
  );
// Snow
var snowTl = new TimelineMax({ repeat: -1, paused: true });
  // Snow Path 1
  snowTl.staggerFromTo(
    snow,
    5,
    {
      opacity: 0,
      bezier: {
        type: "soft",
        values: [
          { x: 0, y: -600 },
          { x: -10, y: -400 }
        ]
      }
    },
    {
      opacity: 1,
      bezier: {
        type: "soft",
        values: [
          { x: -30, y: 0 },
          { x: -40, y: 100 },
          { x: 30, y: 200 },
          { x: 40, y: 300 },
          { x: -30, y: 400 },
          { x: -40, y: 500 },
          { x: 30, y: 600 },
          { x: 40, y: 700 },
          { x: 40, y: 800 }
        ]
      },
      ease: Linear.easeNone,
      repeat: -1
    },
    0.2,
    "snowIn"
  )
    // Snow Path 2
    .staggerFromTo(
      snow2,
      5,
      {
        opacity: 0,
        bezier: {
          type: "soft",
          values: [
            { x: 10, y: -600 },
            { x: -10, y: -400 },
            { x: -50, y: -300 },
            { x: -30, y: -200 },
            { x: 15, y: -100 },
            { x: 0, y: 0 }
          ]
        }
      },
      {
        opacity: 1,
        bezier: {
          type: "soft",
          values: [
            { x: 33, y: 100 },
            { x: 14, y: 200 },
            { x: -22, y: 300 },
            { x: 5, y: 400 },
            { x: 17, y: 500 },
            { x: 15, y: 600 },
            { x: 23, y: 700 },
            { x: 45, y: 800 }
          ]
        },
        ease: Linear.easeNone,
        repeat: -1
      },
      0.2,
      "snowIn"
    )
    // Snow Path 2
    .staggerFromTo(
      snow3,
      5,
      {
        opacity: 0,
        bezier: {
          type: "soft",
          values: [
            { x: 15, y: -600 },
            { x: -25, y: -400 },
            { x: -50, y: -300 },
            { x: -30, y: -200 },
            { x: 8, y: -100 },
            { x: 0, y: 0 }
          ]
        },
        ease: Linear.easeNone,
        repeat: -1
      },
      {
        opacity: 1,
        bezier: {
          type: "soft",
          values: [
            { x: 23, y: 100 },
            { x: 15, y: 200 },
            { x: -3, y: 300 },
            { x: 5, y: 400 },
            { x: 12, y: 500 },
            { x: -15, y: 600 },
            { x: 23, y: 700 },
            { x: 22, y: 800 }
          ]
        },
        ease: Linear.easeNone,
        repeat: -1
      },
      0.2,
      "snowIn"
    );
// Text
textTl = new TimelineMax({ paused: false });
textTl
  .fromTo(
    "#LetterM",
    0.75,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut },
    "DrawText"
  )
  .staggerFromTo(
    "#err path",
    0.25,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut },
    0.25,
    "DrawText+=0.70"
  )
  .staggerFromTo(
    "#ych path",
    0.5,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut },
    0.25
  )
  .fromTo(
    "#LetterR",
    0.25,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut }
  )
  .staggerFromTo(
    "#I path",
    0.1,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut },
    0.1
  )
  .staggerFromTo(
    "#stmas path",
    0.5,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut },
    0.25
  )
  .staggerFromTo(
    "#year path",
    0.5,
    { drawSVG: "0%" },
    { drawSVG: "100%", opacity: 1, ease: Linear.easeInOut },
    0.25
  );

masterTl
  .add(tl.play(), "animationStart")
  .add(snowManDropTl.play(), "animationStart+=2.4")
  .add(snowTl.play(), "startSnow")
  .add(textTl.timeScale(1), "startSnow+=0.5");
masterTl.play();
masterTl.timeScale(1);