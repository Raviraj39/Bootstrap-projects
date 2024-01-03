  AOS.init();
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
    .deleteAll()
    .typeString('Java Developer')
    .pauseFor(2000)
    .start();

anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 1000 * i
  })
  ;

