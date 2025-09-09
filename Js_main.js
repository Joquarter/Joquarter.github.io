// Musician site JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("Musician website loaded!");

  // Example: Alert on button click
  const heroBtn = document.querySelector(".btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      alert("Thanks for streaming my music!");
    });
  }
});
