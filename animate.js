/* ============== PRE-LOADER ==============  */
window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');
  setTimeout(function () {
    preloader.style.display = 'none'; 
    window.location.href = 'index.html';
  }, 3000); 

const load = gsap.timeline({
  paused: 'true',
});

load.to('#percent , #bar', {
  duration: 0.2,
  opacity: 0,
  zIndex: -1,
});
load.to('.progress', {
  duration: 0.8,
  width: '0%',
});

var id,
  width = 1;

function loading() {
  id = setInterval(frame, 25);
}

function frame() {
  if (width >= 100) {
    clearInterval(id);
    load.play();
  } else {
    width++;
    document.getElementById('barconfirm').style.width = width + '%'; 
    document.getElementById('percent').innerHTML = width + '%'; 
  }
}
window.onload = function () {
  loading();
};

/* ============== HERO ==============  */
gsap.from('.content', {
  duration: 1.5,
  opacity: 0,
  ease: 'myBounce',
});
gsap.from('.content h1', {
  duration: 1.5,
  y: 50,
  skewY: 10,
  opacity: 0,
});

gsap.from('.content p', { duration: 1.5, y: 50, skewY: 10, opacity: 0 });
gsap.from('.content .desc', { duration: 1.5, y: 50, skewY: 10, opacity: 0 });
gsap.from('.overlay', { y: '100%', ease: 'power4.inOut', duration: 1.2 });
gsap.fromTo('img', { scale: 1.2 }, { scale: 1, duration: 1, ease: 'power4.inOut' }, '-=.5');
gsap.from('.button',{y: 200, autoAlpha: 0, duration: 1.5});


/* ============== HERO ==============  */
gsap.from('.calculator', {
  y: 200,
  autoAlpha: 0,
  duration:1.5,
});



