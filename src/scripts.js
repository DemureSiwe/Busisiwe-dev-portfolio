document.addEventListener("DOMContentLoaded", () => {
  const glow = document.querySelector(".bgGlow");
  document.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(() => {
      glow.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`;
    });
  });
});
