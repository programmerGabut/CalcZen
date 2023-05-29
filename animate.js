/* ============== PRE-LOADER ==============  */
window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');
  setTimeout(function () {
    preloader.style.display = 'none'; // Sembunyikan preloader setelah penundaan
    // Arahkan pengguna ke halaman utama
    window.location.href = 'index.html';
  }, 3000); // Ganti 3000 dengan jumlah milidetik penundaan yang diinginkan (misalnya 5000 untuk 5 detik)
});

const load = gsap.timeline({
  paused: 'true',
});
// karena kita sudah defenisikan load seagai objek dari gsap.timeline(), kita dapat memberikan beebrapa metode kepada load
// seperti .to(), .from(), atau .fromTo()

load.to('#percent , #bar', {
  duration: 0.2,
  opacity: 0,
  zIndex: -1,
});
load.to('.progress', {
  duration: 0.8,
  width: '0%',
});

// deklarasi id dan width
var id,
  width = 1;

// dalam funsi 'loading', fungsi setInterval() dipanggil dengan argumen frame dan interval waktu
// Ini berarti setiap 25 milidetik, fungsi frame() akan dipanggil.
function loading() {
  id = setInterval(frame, 25);
}

// PENJELASN DI BAWAH
function frame() {
  if (width >= 100) {
    clearInterval(id);
    load.play();
  } else {
    width++;
    document.getElementById('barconfirm').style.width = width + '%'; //ini yang ngatur #barconfirm
    document.getElementById('percent').innerHTML = width + '%'; //ini yang ngatir percen
  }
}
window.onload = function () {
  loading();
};

/* ============== HERO ==============  */
//   ini cuman ada masi intro dari .content dan h1
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
// gsap.from('.content button', { duration: 1.5, y: 30, ease: 'power4.inOut', opacity: 0 });

gsap.from('.overlay', { y: '100%', ease: 'power4.inOut', duration: 1.2 });
gsap.fromTo('img', { scale: 1.2 }, { scale: 1, duration: 1, ease: 'power4.inOut' }, '-=.5');
gsap.from('.button',{y: 200, autoAlpha: 0, duration: 1.5});


/* ============== HERO ==============  */
gsap.from('.calculator', {
  y: 200,
  autoAlpha: 0,
  duration:1.5,
});



