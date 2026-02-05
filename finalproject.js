// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// SCROLL BUTTON
document.getElementById("ctaBtn").addEventListener("click", function () {
  document.getElementById("models").scrollIntoView({ behavior: "smooth" });
});

// DARK / LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// COLOR CLICK GLOW
const carCards = document.querySelectorAll(".car-card");

carCards.forEach(card => {
  card.querySelectorAll(".colors span").forEach(color => {
    color.addEventListener("click", function (e) {
      e.stopPropagation();
      card.style.boxShadow = "0 0 15px " + color.style.background;
    });
  });
});

// MODAL
const modal = document.getElementById("carModal");
const closeBtn = document.querySelector(".close-btn");

carCards.forEach(card => {
  card.addEventListener("click", function () {
    modal.style.display = "block";
    document.getElementById("modal-model").textContent = card.dataset.model;
    document.getElementById("modal-hp").textContent = card.dataset.hp;
    document.getElementById("modal-speed").textContent = card.dataset.speed;
    document.getElementById("modal-acc").textContent = card.dataset.acc;
    document.getElementById("modal-weight").textContent = card.dataset.weight;
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});