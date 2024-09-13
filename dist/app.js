// function hamburger
document.getElementById("menu-button").addEventListener("click", function() {
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
});

  // JavaScript to handle mobile menu toggle

  // menuButton.addEventListener('click', () => {
  //   mobileMenu.classList.toggle('hidden'); // Show/Hide mobile menu
  // });

//   laptop list
const laptops = [
  {
    brand: "AXIOO",
    type: "HYPE 5 AMD JKT48 X3",
    processor: "RYZEN 5 3500",
    ram: "8GB",
    rom: "256GB",
    layar: "14.0FHD IPS",
    harga: 6199000
  },
  {
    brand: "ACER",
    type: "PREDATOR HELIOS 300",
    processor: "Intel i7 10750H",
    ram: "16GB",
    rom: "1TB",
    layar: "15.6FHD IPS",
    harga: 21999000
  },
  {
    brand: "HP",
    type: "Pavilion X360",
    processor: "Intel i5 8250U",
    ram: "8GB",
    rom: "512GB",
    layar: "13.3FHD Touchscreen",
    harga: 13999000
  }
];




// Fungsi untuk menampilkan data laptop
function displayLaptops(filteredLaptops = laptops) {
  const laptopList = document.getElementById('laptopList');
  
  // Membersihkan konten sebelumnya
  laptopList.innerHTML = '';
  
  // Menggunakan forEach untuk mengulangi setiap item laptop
  filteredLaptops.forEach((laptop) => {
    const laptopItem = document.createElement('div');
    laptopItem.classList.add('border-2', 'bg-gray-100', 'p-10', 'rounded-lg', 'shadow-lg');
    
    laptopItem.innerHTML = `
      <h3 class="text-lg font-bold text-gray-700 py-4 border-sky-500 border-2 px-2 rounded-xl">${laptop.brand} ${laptop.type}</h3>
      <p class="text-md text-gray-500 pt-2">Processor: ${laptop.processor}</p>
      <p class="text-md text-gray-500">RAM: ${laptop.ram}</p>
      <p class="text-md text-gray-500">ROM: ${laptop.rom}</p>
      <p class="text-md text-gray-500">Layar: ${laptop.layar}</p>
      <p class="text-lg font-semibold text-gray-900">Harga: Rp ${laptop.harga.toLocaleString('id-ID')}</p>
      <a class="inline-block rounded-md bg-sky-600 mt-4 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-sky-500" target="_blank" href="https://wa.me/62895325199505?text=Hey Cmiw Store saya mau beli laptop ${laptop.brand} ${laptop.type}">Beli</a>
    `;
    
    laptopList.appendChild(laptopItem);
  });

  // Jika tidak ada laptop yang sesuai dengan pencarian
  if (filteredLaptops.length === 0) {
    laptopList.innerHTML = '<p class="text-center text-red-500">Tidak ada laptop yang cocok dengan pencarian Anda.</p>';
  }
}
// Fungsi untuk mencari laptop berdasarkan input pencarian
function searchLaptops(query) {
  // Mengubah input pencarian menjadi huruf kecil untuk membandingkan tanpa case sensitivity
  const filteredLaptops = laptops.filter(laptop => {
    const searchText = query.toLowerCase();
    
    return (
      laptop.brand.toLowerCase().includes(searchText) ||
      laptop.type.toLowerCase().includes(searchText) ||
      laptop.processor.toLowerCase().includes(searchText)
    );
  });

  // Menampilkan laptop yang sesuai dengan hasil pencarian
  displayLaptops(filteredLaptops);

    // Menyembunyikan atau menampilkan bagian Produk Unggulan
    const featuredProducts = document.getElementById('featuredProducts');
    if (query.length > 0) {
      featuredProducts.classList.add('hidden');
    } else {
      featuredProducts.classList.remove('hidden');
    }

}

// Event listener untuk input pencarian
document.getElementById('searchInput').addEventListener('input', function() {
  const query = this.value;
  searchLaptops(query); // Memanggil fungsi pencarian
});

// Panggil fungsi untuk menampilkan semua laptop saat halaman dimuat
displayLaptops();
