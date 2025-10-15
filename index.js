const toggler = document.querySelector('.toggler-navbar');
const navMenu = document.querySelector('.navbar ul');

// buat overlay
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// tombol hamburger diklik
toggler.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  overlay.classList.toggle('active');
});

// klik overlay = tutup menu
overlay.addEventListener('click', () => {
  navMenu.classList.remove('show');
  overlay.classList.remove('active');
});
