// Fungsi untuk hentikan video saat lightbox ditutup
document.querySelectorAll('.lightbox').forEach(lightbox => {
  const iframe = lightbox.querySelector('iframe');
  const closeBtn = lightbox.querySelector('.close-button');
  const overlay = lightbox.querySelector('.lightbox-overlay');

  // Fungsi stop video dan tutup lightbox
  function closeLightbox() {
    const src = iframe.src;
    iframe.src = ''; // stop video
    setTimeout(() => {
      iframe.src = src; // reset src supaya bisa play lagi kalau dibuka
    }, 50);
    window.location.hash = ""; // hilangkan #lightbox-x dari URL
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', closeLightbox);
});

// Toggle Dark Mode
const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Load dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀ Light Mode";
}

// Klik tombol dark mode
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggle.textContent = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});
