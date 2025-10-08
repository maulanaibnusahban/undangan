const openBtn = document.getElementById("openInvitationBtn");
const fadeOverlay = document.getElementById("fadeOverlay");
const coverSection = document.getElementById("coverSection");
const mainSection = document.getElementById("mainSection");
const quoteQuran = document.getElementById("quote_quran");

openBtn.addEventListener("click", function () {
  // Activate fade overlay
  fadeOverlay.classList.add("active");
  music.play();
  setTimeout(() => {
    AOS.refresh();
  }, 100);

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
      AOS.init();
    }, 100);
  }, 800);
});

const openInvitationBtn = document.getElementById("openInvitationBtn");
const music = document.getElementById("music");

const targetDate = new Date("2025-10-19 08:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    // Jika acara sudah dimulai, tampilkan 00 semua
    document.getElementById("days").innerText = "00";
    document.getElementById("jam").innerText = "00";
    document.getElementById("menit").innerText = "00";
    document.getElementById("detik").innerText = "00";
    clearInterval(countdown);
    return;
  }

  // Hitung waktu tersisa
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("jam").innerText = jam.toString().padStart(2, "0");
  document.getElementById("menit").innerText = menit.toString().padStart(2, "0");
  document.getElementById("detik").innerText = detik.toString().padStart(2, "0");
}, 1000);

const copyButton1 = document.getElementById("copyButton1");
const rekeningText1 = document.getElementById("rekening1").innerText;
const copyButton2 = document.getElementById("copyButton2");
const rekeningText2 = document.getElementById("rekening2").innerText;

copyButton1.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(rekeningText1);
    copyButton1.querySelector("p").innerText = "Disalin!";
    copyButton1.style.backgroundColor = "#e0468e";

    // Kembalikan teks setelah 2 detik
    setTimeout(() => {
      copyButton1.querySelector("p").innerText = "Salin";
      copyButton1.style.backgroundColor = "#f6519e";
    }, 2000);
  } catch (err) {
    alert("Gagal menyalin nomor rekening 😢");
  }
});

copyButton2.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(rekeningText2);
    copyButton2.querySelector("p").innerText = "Disalin!";
    copyButton2.style.backgroundColor = "#e0468e";

    // Kembalikan teks setelah 2 detik
    setTimeout(() => {
      copyButton2.querySelector("p").innerText = "Salin";
      copyButton2.style.backgroundColor = "#f6519e";
    }, 2000);
  } catch (err) {
    alert("Gagal menyalin nomor rekening 😢");
  }
});
