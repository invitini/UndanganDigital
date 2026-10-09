(function() {
  const container = document.getElementById('threejs-container-ANIMATION_3');
  const devicePixelRatio = window.devicePixelRatio || 1;
  /* ==========================================================================
   SCRIPT.JS - LOGIKA UNDANGAN DIGITAL PERNIKAHAN (VANILLA JAVASCRIPT)
   ========================================================================== */

/* ==========================================================================
   BAGIAN 15 & 16: DATA UTAMA UNDANGAN (EDIT DI SINI)
   Cukup ubah informasi di dalam object 'dataUndangan' dan 'fotoUndangan' ini
   untuk membuat undangan pernikahan baru tanpa perlu menyentuh kode HTML.
   ========================================================================== */

const dataUndangan = {
  // Nama panggilan / cover
  namaPria: "Tezzar",
  namaWanita: "Leni",
  
  // Tanggal yang ditampilkan di teks
  tanggalAcara: "Sabtu, 24 Oktober 2026",
  
  // Format tanggal ISO untuk Countdown (YYYY-MM-DDTHH:mm:ss)
  tanggalPernikahan: "2026-10-24T08:00:00",

  // Biodata Mempelai Pria
  mempelaiPria: {
    namaLengkap: "Tezzar Helmy Krismanto Adjie",
    namaAyah: "Ir. Budi Arjanto, S.T.",
    namaIbu: "Dyah Nurchayati, S.E.",
    tanggalLahir: "Lahir di Purwokerto",
    alamat: "Tinggal di Purwokerto, Jawa Tengah"
  },

  // Biodata Mempelai Wanita
  mempelaiWanita: {
    namaLengkap: "Leni Agustinah, A.Md.",
    namaAyah: "Sutiyono Misno",
    namaIbu: "Adminah",
    tanggalLahir: "Lahir di Banyumas",
    alamat: "Tinggal di Lumbir, Jawa Tengah"
  },

  // Rincian Waktu Akad Nikah
  akad: {
    tanggal: "Sabtu, 24 Oktober 2026",
    waktu: "Pukul 08:00 - 10:00 WIB",
    tempat: "Masjid Jami' Nurul Huda Cengkudu",
    lokasiSingkat: "RT.04/RW.04, Cengkudu, Cirahab, Kec. Lumbir, Kabupaten Banyumas, Jawa Tengah 53177"
  },

  // Rincian Waktu Resepsi
  resepsi: {
    tanggal: "Minggu, 25 Oktober 2026",
    waktu: "Pukul 08:00 - 16:00 WIB",
    tempat: "Kediaman Mempelai Wanita",
    lokasiSingkat: "RT.04/RW.04, Cengkudu, Cirahab, Kec. Lumbir, Kabupaten Banyumas, Jawa Tengah 53177"
  },

  // Alamat Lengkap & Peta
  alamatAcara: "RT.04/RW.04, Cengkudu, Cirahab, Kec. Lumbir, Kabupaten Banyumas, Jawa Tengah 53177",
  googleMaps: "https://maps.app.goo.gl/SX4V3vKjBaxECfXC7",

  // Nomor WhatsApp untuk RSVP (Gunakan format 62 tanpa spasi atau +)
  whatsapp: "6287837020525",

  // Informasi Rekening Hadiah (Cashless)
  rekening: {
    bank: "BANK CENTRAL ASIA (BCA)",
    nomor: "0461813223",
    atasNama: "a.n. Tezzar Helmy K A"
  },

  // Informasi Pengiriman Kado Fisik
  kado: {
    penerima: "Tezzar & Leni",
    alamat: "RT.04/RW.04, Cengkudu, Cirahab, Kec. Lumbir, Kabupaten Banyumas, Jawa Tengah 53177 (No. HP: 0838-4404-9110)"
  },

  // Konfigurasi Tambah ke Kalender (.ics)
  eventCalendar: {
    title: "The Wedding Celebration of Tezzar & Leni",
    description: "Syukuran Pernikahan Tezzar Helmy Krismanto Adjie & Leni Agustinah",
    location: "Kediaman Mempelai Wanita, RT.04/RW.04, Cengkudu, Cirahab, Kec. Lumbir, Kabupaten Banyumas, Jawa Tengah",
    startDate: "20261024T080000",
    endDate: "20261024T160000"
  }
};

/* DAFTAR FOTO UNDANGAN */
const fotoUndangan = {
  cover: "images/cover.jpg",
  pria: "images/pria.jpg",
  wanita: "images/wanita.jpg",
  galeri: [
    "images/galeri1.jpg",
    "images/galeri2.jpg",
    "images/galeri3.jpg",
    "images/galeri4.jpg",
    "images/galeri5.jpg",
    "images/galeri6.jpg"
  ]
};

/* ==========================================================================
   INITIALISASI HALAMAN SAAT DOM SIAP
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Set body cover-active saat pertama buka agar tidak scroll sebelum dibuka
  document.body.classList.add("cover-active");

  renderDataUndangan();
  initCoverAndMusic();
  initCountdown();
  initCalendarDownload();
  initRSVP();
  initWeddingGift();
  initUcapanDoa();
  initGalleryLightbox();
  initScrollSpyAndAnimation();
});

/* ==========================================================================
   RENDER DATA KE ELEMEN HTML
   ========================================================================== */
function renderDataUndangan() {
  const coupleText = `${dataUndangan.namaPria} & ${dataUndangan.namaWanita}`;
  
  // Cover & Heading
  setText("cover-couple-name", coupleText);
  setText("cover-date-text", dataUndangan.tanggalAcara);
  setText("opening-couple-name", coupleText);
  setText("opening-date-badge", "24 . 10 . 2026");
  setText("footer-couple-name", coupleText);
  setText("desktop-hero-couple", coupleText);

  // Biodata Pria
  setText("nama-lengkap-pria", dataUndangan.mempelaiPria.namaLengkap);
  setText("orangtua-pria", `Putra pertama dari Bapak ${dataUndangan.mempelaiPria.namaAyah} & Ibu ${dataUndangan.mempelaiPria.namaIbu}`);
  setText("info-pria", `${dataUndangan.mempelaiPria.tanggalLahir} • ${dataUndangan.mempelaiPria.alamat}`);

  // Biodata Wanita
  setText("nama-lengkap-wanita", dataUndangan.mempelaiWanita.namaLengkap);
  setText("orangtua-wanita", `Putri kedua dari Bapak ${dataUndangan.mempelaiWanita.namaAyah} & Ibu ${dataUndangan.mempelaiWanita.namaIbu}`);
  setText("info-wanita", `${dataUndangan.mempelaiWanita.tanggalLahir} • ${dataUndangan.mempelaiWanita.alamat}`);

  // Detail Acara
  setText("akad-tanggal", dataUndangan.akad.tanggal);
  setText("akad-waktu", dataUndangan.akad.waktu);
  setText("acara-alamat-1", dataUndangan.akad.lokasiSingkat);

  setText("resepsi-tanggal", dataUndangan.resepsi.tanggal);
  setText("resepsi-waktu", dataUndangan.resepsi.waktu);
  setText("acara-alamat-2", dataUndangan.resepsi.lokasiSingkat);

  setText("alamat-lengkap-acara", dataUndangan.alamatAcara);

  // Hadiah & Kado
  setText("gift-bank", dataUndangan.rekening.bank);
  setText("gift-rekening", dataUndangan.rekening.nomor);
  setText("gift-atasnama", dataUndangan.rekening.atasNama);
  setText("gift-penerima", `Penerima: ${dataUndangan.kado.penerima}`);
  setText("gift-alamat-kado", dataUndangan.kado.alamat);

  // Tombol Google Maps
  const btnMaps = document.getElementById("btn-maps");
  if (btnMaps) {
    btnMaps.onclick = () => window.open(dataUndangan.googleMaps, "_blank");
  }

  // Render Galeri Foto
  const galleryBox = document.getElementById("gallery-container");
  if (galleryBox) {
    galleryBox.innerHTML = fotoUndangan.galeri.map((foto, index) => `
      <div class="gallery-item" data-index="${index}">
        <img src="${foto}" alt="Momen ${index + 1}" loading="lazy">
      </div>
    `).join("");
  }
}

function setText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = text;
}

/* ==========================================================================
   COVER & PEMUTAR MUSIK
   ========================================================================== */
function initCoverAndMusic() {
  const cover = document.getElementById("cover-page");
  const btnOpen = document.getElementById("btn-open-invitation");
  const musicAudio = document.getElementById("musik");
  const btnMusicToggle = document.getElementById("btn-music-toggle");
  let isPlaying = false;

  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      // 1. Geser cover ke atas secara smooth
      if (cover) {
        cover.classList.add("slide-out");
      }
      
      // 2. Buka scroll body
      document.body.classList.remove("cover-active");

      // 3. Putar musik secara otomatis atas izin interaksi klik
      if (musicAudio) {
        musicAudio.play().then(() => {
          isPlaying = true;
          if (btnMusicToggle) btnMusicToggle.classList.add("playing");
        }).catch(err => {
          console.warn("Autoplay audio dicegah oleh browser:", err);
        });
      }
    });
  }

  // Tombol Play / Pause musik di pojok kanan atas
  if (btnMusicToggle && musicAudio) {
    btnMusicToggle.addEventListener("click", () => {
      if (isPlaying) {
        musicAudio.pause();
        isPlaying = false;
        btnMusicToggle.classList.remove("playing");
      } else {
        musicAudio.play().then(() => {
          isPlaying = true;
          btnMusicToggle.classList.add("playing");
        });
      }
    });
  }
}

/* ==========================================================================
   NAMA TAMU OTOMATIS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {

  // Membaca parameter nama dari URL
  const parameterURL = new URLSearchParams(
    window.location.search
  );

  const namaDariURL = parameterURL.get("to");

  // Nama default jika parameter tidak tersedia
  const namaTamu = namaDariURL
    ? namaDariURL.trim().slice(0, 100)
    : "Tamu Undangan";

  // Mencari elemen nama tamu di HTML
  const elemenNama = document.getElementById("namaTamu");

  if (elemenNama) {
    elemenNama.textContent = namaTamu || "Tamu Undangan";
    console.log("Nama tamu berhasil dibaca:", namaTamu);
  } else {
    console.error('Elemen dengan id="namaTamu" tidak ditemukan!');
  }

});

console.log("URL saat ini:", window.location.href);
console.log("Nama dari URL:", new URLSearchParams(window.location.search).get("to"));

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("to") || "Tamu Undangan";

  const elemen = document.getElementById("namaTamu");

  console.log("URL:", window.location.href);
  console.log("Nama dari URL:", nama);
  console.log("Elemen nama ditemukan:", elemen);

  if (elemen) {
    elemen.textContent = nama;
  }
});

/* ==========================================================================
   COUNTDOWN TIMER HITUNG MUNDUR
   ========================================================================== */
function initCountdown() {
  const targetDate = new Date(dataUndangan.tanggalPernikahan).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const elDays = document.getElementById("cd-days");
    const elHours = document.getElementById("cd-hours");
    const elMins = document.getElementById("cd-minutes");
    const elSecs = document.getElementById("cd-seconds");
    const timerBox = document.getElementById("timer-box");

    if (distance < 0) {
      if (timerBox) {
        timerBox.innerHTML = `
          <div style="grid-column: span 4; padding: 18px; font-weight: 700; color: var(--color-primary-dark); font-size: 1.2rem;">
            💍 THE DAY IS HERE • ALHAMDULILLAH
          </div>
        `;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (elDays) elDays.textContent = String(days).padStart(2, "0");
    if (elHours) elHours.textContent = String(hours).padStart(2, "0");
    if (elMins) elMins.textContent = String(minutes).padStart(2, "0");
    if (elSecs) elSecs.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   SIMPAN KE KALENDER (GENERATE FILE .ICS OTOMATIS)
   ========================================================================== */
function initCalendarDownload() {
  const btnCalendar = document.getElementById("btn-add-calendar");
  if (!btnCalendar) return;

  btnCalendar.addEventListener("click", () => {
    const cal = dataUndangan.eventCalendar;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Invitini Undangan Digital//ID",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `SUMMARY:${cal.title}`,
      `DESCRIPTION:${cal.description}`,
      `LOCATION:${cal.location}`,
      `DTSTART:${cal.startDate}`,
      `DTEND:${cal.endDate}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "undangan-pernikahan.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/* ==========================================================================
   RSVP (KONFIRMASI KEHADIRAN KE WHATSAPP)
   ========================================================================== */
function initRSVP() {
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("rsvp-nama").value.trim();
    const kehadiranRadio = document.querySelector('input[name="kehadiran"]:checked');
    const kehadiran = kehadiranRadio ? kehadiranRadio.value : "Hadir";
    const jumlah = document.getElementById("rsvp-jumlah").value;

    if (!nama) {
      alert("Silakan masukkan nama Anda terlebih dahulu.");
      return;
    }

    const couple = `${dataUndangan.namaPria} & ${dataUndangan.namaWanita}`;
    const textPesan = `Halo, saya ${nama}.\n\nSaya mengonfirmasi bahwa saya *${kehadiran}* pada acara pernikahan *${couple}* (Jumlah: ${jumlah}).\n\nTerima kasih atas undangannya!`;

    const waUrl = `https://wa.me/${dataUndangan.whatsapp}?text=${encodeURIComponent(textPesan)}`;
    window.open(waUrl, "_blank");
  });
}

/* ==========================================================================
   WEDDING GIFT (TAB & SALIN REKENING / ALAMAT KE CLIPBOARD)
   ========================================================================== */
function initWeddingGift() {
  const btnTransfer = document.getElementById("btn-open-transfer");
  const btnKado = document.getElementById("btn-open-kado");
  const panelTransfer = document.getElementById("panel-transfer");
  const panelKado = document.getElementById("panel-kado");

  if (btnTransfer && btnKado) {
    btnTransfer.addEventListener("click", () => {
      btnTransfer.classList.add("active");
      btnKado.classList.remove("active");
      panelTransfer.classList.add("active");
      panelKado.classList.remove("active");
    });

    btnKado.addEventListener("click", () => {
      btnKado.classList.add("active");
      btnTransfer.classList.remove("active");
      panelKado.classList.add("active");
      panelTransfer.classList.remove("active");
    });
  }

  // Copy Rekening
  const btnCopyRek = document.getElementById("btn-copy-rek");
  if (btnCopyRek) {
    btnCopyRek.addEventListener("click", () => {
      copyToClipboard(dataUndangan.rekening.nomor, "Nomor rekening berhasil disalin!");
    });
  }

  // Copy Alamat
  const btnCopyAlamat = document.getElementById("btn-copy-alamat");
  if (btnCopyAlamat) {
    btnCopyAlamat.addEventListener("click", () => {
      copyToClipboard(dataUndangan.kado.alamat, "Alamat pengiriman kado berhasil disalin!");
    });
  }
}

function copyToClipboard(text, customMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMessage || "Berhasil disalin ke clipboard!");
  }).catch(() => {
    // Fallback jika browser lawas
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(customMessage || "Berhasil disalin!");
  });
}

function showToast(message) {
  const toast = document.getElementById("copy-toast");
  if (!toast) return;
  toast.textContent = `✓ ${message}`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* ==========================================================================
   KOLOM UCAPAN & DOA (LOCALSTORAGE UNTUK DEMO FRONTEND)
   ========================================================================== */
function initUcapanDoa() {
  const form = document.getElementById("ucapan-form");
  const listContainer = document.getElementById("ucapan-list");
  const countSpan = document.getElementById("ucapan-count");

  // Load awal ucapan dari localStorage atau default contoh
  let daftarUcapan = JSON.parse(localStorage.getItem("undangan_ucapan_data")) || [
  
  ];

  function renderList() {
    if (!listContainer) return;
    if (countSpan) countSpan.textContent = daftarUcapan.length;

    listContainer.innerHTML = daftarUcapan.map(item => `
      <div class="ucapan-item">
        <div class="ucapan-header">
          <span class="ucapan-sender">${escapeHtml(item.nama)}</span>
          <span class="ucapan-time">${item.waktu}</span>
        </div>
        <p class="ucapan-text">${escapeHtml(item.pesan)}</p>
      </div>
    `).join("");
  }

  renderList();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const namaInput = document.getElementById("ucapan-nama");
      const pesanInput = document.getElementById("ucapan-pesan");

      const nama = namaInput.value.trim();
      const pesan = pesanInput.value.trim();

      if (!nama || !pesan) return;

      // Masukkan ke urutan paling atas
      daftarUcapan.unshift({
        nama: nama,
        pesan: pesan,
        waktu: "Baru saja"
      });

      // Simpan di browser
      localStorage.setItem("undangan_ucapan_data", JSON.stringify(daftarUcapan));
      
      // Reset form dan render ulang list
      namaInput.value = "";
      pesanInput.value = "";
      renderList();
      showToast("Doa & ucapan Anda berhasil dikirim!");
    });
  }
}

function escapeHtml(string) {
  const div = document.createElement("div");
  div.innerText = string;
  return div.innerHTML;
}

/* ==========================================================================
   LIGHTBOX / FULLSCREEN MODAL GALERI
   ========================================================================== */
function initGalleryLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const btnClose = document.getElementById("lightbox-close");
  const btnPrev = document.getElementById("lightbox-prev");
  const btnNext = document.getElementById("lightbox-next");

  let currentIndex = 0;
  const total = fotoUndangan.galeri.length;

  function showImage(index) {
    if (index < 0) currentIndex = total - 1;
    else if (index >= total) currentIndex = 0;
    else currentIndex = index;

    if (lightboxImg) lightboxImg.src = fotoUndangan.galeri[currentIndex];
    if (lightboxCounter) lightboxCounter.textContent = `${currentIndex + 1} / ${total}`;
  }

  // Delegasi klik pada item galeri
  document.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item && lightbox) {
      const idx = parseInt(item.getAttribute("data-index"), 10) || 0;
      currentIndex = idx;
      showImage(currentIndex);
      lightbox.classList.add("active");
    }
  });

  if (btnClose) {
    btnClose.addEventListener("click", () => lightbox.classList.remove("active"));
  }
  if (btnPrev) {
    btnPrev.addEventListener("click", () => showImage(currentIndex - 1));
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => showImage(currentIndex + 1));
  }

  // Tutup bila mengklik area gelap di luar gambar
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("active");
    });
  }
}

/* ==========================================================================
   ANIMASI INTERSECTION OBSERVER & SCROLL SPY NAVIGASI
   ========================================================================== */
function initScrollSpyAndAnimation() {
  const sections = document.querySelectorAll(".fade-element");
  const navItems = document.querySelectorAll(".nav-item");

  const observerOptions = {
    root: null,
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        // Perbarui status menu navigasi bawah jika section ber-id cocok
        const currentId = entry.target.id;
        navItems.forEach(item => {
          if (item.getAttribute("data-section") === currentId) {
            item.classList.add("active");
          } else if (currentId) {
            item.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

})();
