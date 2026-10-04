// =====================================================
// EDIT BAGIAN INI UNTUK PERSONALISASI WEBSITE
// =====================================================
const CONFIG = {
  friendName: "Sayangku",
  surpriseMessage: "Semoga semua doa baik yang kamu panjatkan hari ini menemukan jalannya. Tetap jadi dirimu yang hebat, ya sayang! Selamat ulang tahun! 🎂💖",
};

// Nama teman
document.getElementById("friendName").textContent = CONFIG.friendName;
document.getElementById("footerName").textContent = CONFIG.friendName;

// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// =====================================================
// MUSIK
// =====================================================
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicIcon.textContent = "❚❚";
      musicBtn.innerHTML = '<span id="musicIcon">❚❚</span> Music';
    } else {
      music.pause();
      musicIcon.textContent = "▶";
      musicBtn.innerHTML = '<span id="musicIcon">▶</span> Music';
    }
  } catch (error) {
    alert("Tambahkan file lagu-ulang-tahun.mpeg ke folder assets terlebih dahulu.");
  }
});

// =====================================================
// MODAL KEJUTAN
// =====================================================
const modal = document.getElementById("surpriseModal");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeModal = document.getElementById("closeModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalMessage = document.getElementById("modalMessage");

modalMessage.textContent = CONFIG.surpriseMessage;

function openModal() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

surpriseBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", hideModal);
modalCloseBtn.addEventListener("click", hideModal);

document.querySelector(".modal-backdrop").addEventListener("click", hideModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});

// =====================================================
// EFEK SCROLL REVEAL
// =====================================================
const revealItems = document.querySelectorAll(".story-grid, .gallery-heading, .photo-card, .wish-card, .final-message");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

// CSS reveal tambahan
const style = document.createElement("style");
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity .7s ease, transform .7s ease;
  }
  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
