// Glowing text cycle effect
const heroTitle = document.getElementById("hero-title");
const glowColors = ["#e600ff", "#00d4ff", "#ff0077"];
let i = 0;

setInterval(() => {
  heroTitle.style.textShadow = `
    0 0 10px ${glowColors[i]},
    0 0 20px ${glowColors[i]},
    0 0 30px ${glowColors[i]}
  `;
  i = (i + 1) % glowColors.length;
}, 1500);

// Smooth scroll for nav links
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
