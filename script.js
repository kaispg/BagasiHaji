// script.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website HajjEasy sedang berjalan.");

  // Smooth Scroll untuk pautan dalam halaman
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

  // Popup Notifikasi bila klik WhatsApp
  const buttons = document.querySelectorAll("#whatsappBtn, #whatsappFooterBtn");
  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Elakkan multiple popup
      if (document.getElementById("notification-popup")) return;

      const popup = document.createElement("div");
      popup.id = "notification-popup";
      popup.textContent = "🔧 Mengalihkan ke WhatsApp...";
      popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #006633;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: opacity 0.3s;
        opacity: 0;
      `;

      document.body.appendChild(popup);

      // Fade in
      setTimeout(() => {
        popup.style.opacity = "1";
      }, 100);

      // Fade out & redirect
      setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => {
          popup.remove();
          window.open("https://wa.me/60197979546", "_blank");
        }, 300);
      }, 2000);
    });
  });

  // Borang Pertanyaan
  const form = document.getElementById("inquiryForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Terima kasih, ${name}! Pertanyaan anda telah dihantar. Kami akan balas secepat mungkin.`);
      form.reset();
    });
  }
});