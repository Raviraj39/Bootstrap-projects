
var app = document.getElementById('typewritter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(' Frontend Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Web Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('React Developer')
    .pauseFor(2000)
    .start();

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 1000 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });