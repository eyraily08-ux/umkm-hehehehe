const umkmData = [
  {
    nama: "Keripik Singkong Bu Sari",
    kategori: "Makanan Ringan",
    pemilik: "Ibu Sari",
    alamat: "Dusun 1, Desa Mekarwangi",
    produk: "Keripik singkong original dan pedas",
    jam: "08.00 - 17.00 WIB",
    telepon: "081234567890",
    koordinat: "-7.7956, 110.3695",
    deskripsi:
      "Keripik Singkong Bu Sari merupakan UMKM lokal yang memproduksi makanan ringan berbahan singkong pilihan. Produk ini dibuat secara rumahan dengan cita rasa gurih dan pedas.",
    gambar: "images/umkm-1.jpg",
    whatsapp: "https://wa.me/6281234567890",
    maps: "https://maps.google.com"
  },
  {
    nama: "Kopi Wangi Desa",
    kategori: "Minuman",
    pemilik: "Bapak Jaya",
    alamat: "Dusun 2, Desa Mekarwangi",
    produk: "Kopi lokal kemasan dan minuman siap saji",
    jam: "09.00 - 21.00 WIB",
    telepon: "081234567890",
    koordinat: "-7.7970, 110.3710",
    deskripsi:
      "Kopi Wangi Desa menawarkan produk kopi lokal dengan cita rasa khas. UMKM ini menjadi salah satu contoh potensi desa yang dapat dikembangkan melalui promosi digital.",
    gambar: "images/umkm-2.jpg",
    whatsapp: "https://wa.me/6281234567890",
    maps: "https://maps.google.com"
  },
  {
    nama: "Anyaman Mekar Jaya",
    kategori: "Kerajinan",
    pemilik: "Ibu Rini",
    alamat: "Dusun 3, Desa Mekarwangi",
    produk: "Kerajinan bambu dan rotan",
    jam: "08.00 - 16.00 WIB",
    telepon: "081234567890",
    koordinat: "-7.7938, 110.3678",
    deskripsi:
      "Anyaman Mekar Jaya merupakan UMKM kerajinan tangan yang memanfaatkan bahan bambu dan rotan. Produk yang dihasilkan berupa keranjang, hiasan rumah, dan perlengkapan rumah tangga.",
    gambar: "images/umkm-3.jpg",
    whatsapp: "https://wa.me/6281234567890",
    maps: "https://maps.google.com"
  }
];

const umkmGrid = document.getElementById("umkmGrid");
const detailModal = document.getElementById("detailModal");

function renderUmkmCards() {
  umkmGrid.innerHTML = "";

  umkmData.forEach((umkm, index) => {
    umkmGrid.innerHTML += `
      <div class="umkm-card">
        <div class="umkm-img" style="background-image: url('${umkm.gambar}')"></div>

        <div class="umkm-body">
          <span class="category">${umkm.kategori}</span>
          <h3>${umkm.nama}</h3>
          <p><strong>Alamat:</strong> ${umkm.alamat}</p>
          <p>${umkm.produk}</p>

          <button class="detail-button" onclick="openModal(${index})">
            Lihat Detail
          </button>
        </div>
      </div>
    `;
  });
}

function openModal(index) {
  const umkm = umkmData[index];

  document.getElementById("modalImage").style.backgroundImage =
    `url('${umkm.gambar}')`;

  document.getElementById("modalCategory").textContent = umkm.kategori;
  document.getElementById("modalName").textContent = umkm.nama;
  document.getElementById("modalDescription").textContent = umkm.deskripsi;
  document.getElementById("modalOwner").textContent = umkm.pemilik;
  document.getElementById("modalAddress").textContent = umkm.alamat;
  document.getElementById("modalProduct").textContent = umkm.produk;
  document.getElementById("modalHours").textContent = umkm.jam;
  document.getElementById("modalPhone").textContent = umkm.telepon;
  document.getElementById("modalCoordinate").textContent = umkm.koordinat;

  document.getElementById("modalWhatsapp").href = umkm.whatsapp;
  document.getElementById("modalMaps").href = umkm.maps;

  detailModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  detailModal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target === detailModal) {
    closeModal();
  }
};

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

renderUmkmCards();
