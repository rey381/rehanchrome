// Ambil semua elemen dengan class "card animate"
const cards = document.querySelectorAll('.card.animate');

// Buat observer untuk deteksi ketika elemen masuk ke viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Tambah class .show saat terlihat
      observer.unobserve(entry.target);   // Hanya animasi sekali
    }
  });
}, { threshold: 0.1 });

// Pasang observer ke setiap card
cards.forEach(card => observer.observe(card));