// ===== Hero Title Glow Animation =====
const heroTitle = document.querySelector(".hero h1");

let glowColors = ["#ff0066", "#00ffcc", "#ffcc00", "#ff33ff", "#00ffff"];
let i = 0;

setInterval(() => {
  heroTitle.style.textShadow = `
    0 0 10px ${glowColors[i]},
    0 0 20px ${glowColors[i]},
    0 0 40px ${glowColors[i]}
  `;
  i = (i + 1) % glowColors.length;
}, 1500);

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Button Pulse Effect =====
const buttons = document.querySelectorAll(".btn");
setInterval(() => {
  buttons.forEach(btn => {
    btn.style.boxShadow = `
      0 0 10px #e600ff,
      0 0 20px #00d4ff,
      0 0 30px #e600ff
    `;
    setTimeout(() => {
      btn.style.boxShadow = "0 0 10px rgba(230,0,255,0.6)";
    }, 1000);
  });
}, 2000);
