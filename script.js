// Fungsi untuk membuka modal dan menampilkan isi berdasarkan fitur yang diklik
function showFeature(type) {
  const titles = {
    tech: "Berita Teknologi",
    tutorial: "Tutorial Pemrograman",
    community: "Komunitas Diskusi",
  };

  const texts = {
    tech: "📱 Berita teknologi terbaru akan membantumu tetap update dengan dunia digital!",
    tutorial: "📚 Tutorial dari dasar hingga expert, cocok untuk semua level.",
    community: "💬 Komunitas aktif untuk tanya jawab dan berbagi solusi.",
  };

  document.getElementById("modal-title").innerText = titles[type] || "Fitur";
  document.getElementById("modal-text").innerText =
    texts[type] || "Konten tidak ditemukan.";
  document.getElementById("modal").classList.remove("hidden");
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Smooth scroll ke section saat tombol Explore Now diklik
document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("exploreBtn");
  const featuresSection = document.getElementById("features");

  if (exploreBtn && featuresSection) {
    exploreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      featuresSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Tutup modal saat klik di luar kontennya
  document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target.id === "modal") {
      closeModal();
    }
  });

  // Tutup modal pakai tombol ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
