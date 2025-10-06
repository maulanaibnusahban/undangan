const openBtn = document.getElementById("openInvitationBtn");
const fadeOverlay = document.getElementById("fadeOverlay");
const coverSection = document.getElementById("coverSection");
const mainSection = document.getElementById("mainSection");
const quoteQuran = document.getElementById("quote_quran");

openBtn.addEventListener("click", function () {
  // Activate fade overlay
  fadeOverlay.classList.add("active");

  // After fade completes, switch sections
  setTimeout(() => {
    coverSection.classList.remove("section-visible");
    coverSection.classList.add("section-hidden");
    mainSection.classList.remove("section-hidden");
    mainSection.classList.add("section-visible");

    // Scroll to top
    window.scrollTo(0, 0);

    // Remove fade overlay
    setTimeout(() => {
      fadeOverlay.classList.remove("active");
    }, 100);
  }, 800);
});

// quoteQuran.addEventListener("scroll", function () {
//   quoteQuran.classList.add("animate-fade-in-up");
// });
