// function hamburger
document.getElementById("menu-button").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });
  

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
  function displayLaptops() {
    const laptopList = document.getElementById('laptopList');
    
    // Membersihkan konten sebelumnya
    laptopList.innerHTML = '';
    
    // Menggunakan forEach untuk mengulangi setiap item laptop
    laptops.forEach((laptop) => {
      const laptopItem = document.createElement('div');
      laptopItem.classList.add('border-2', 'bg-gray-100', 'p-10', 'rounded-lg', 'shadow-lg');
      
      laptopItem.innerHTML = `
        <h3>${laptop.brand} ${laptop.type}</h3>
        <p>Processor: ${laptop.processor}</p>
        <p>RAM: ${laptop.ram}</p>
        <p>ROM: ${laptop.rom}</p>
        <p>Layar: ${laptop.layar}</p>
        <p>Harga: Rp${laptop.harga.toLocaleString('id-ID')}</p>
        <a class="inline-block rounded-md bg-sky-600 mt-4 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-sky-500" href="https://wa.me/62895325199505?text=Hey Cmiw Store saya mau beli laptop ${laptop.brand} ${laptop.type}">Beli</a>
      `;
      
      laptopList.appendChild(laptopItem);
    });
  }

  // Panggil fungsi untuk menampilkan data laptop
  displayLaptops();

// search
function searchLaptop(brand, type, processor, ram, rom, layar, maxPrice) {
  return laptops.filter(laptop => {
    return (
      (!brand || laptop.brand.toLowerCase().includes(brand.toLowerCase())) &&
      (!type || laptop.type.toLowerCase().includes(type.toLowerCase())) &&
      (!processor || laptop.processor.toLowerCase().includes(processor.toLowerCase())) &&
      (!ram || laptop.ram === ram) &&
      (!rom || laptop.rom === rom) &&
      (!layar || laptop.layar === layar) &&
      (!maxPrice || laptop.harga <= maxPrice)
    );
  });
}

// untuk menampilkan hasil search
function displayResults(results) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ""; // Mengosongkan hasil sebelumnya

  if (results.length === 0) {
    resultDiv.innerHTML = "<p>Tidak ada laptop yang cocok dengan pencarian Anda.</p>";
  } else {
    results.forEach(laptop => {
      resultDiv.innerHTML += `
        <div class="laptop-item">
          <h3>${laptop.brand} ${laptop.type}</h3>
          <p>Processor: ${laptop.processor}</p>
          <p>RAM: ${laptop.ram}</p>
          <p>ROM: ${laptop.rom}</p>
          <p>Layar: ${laptop.layar}</p>
          <p>Harga: Rp${laptop.harga.toLocaleString('id-ID')}</p>
        </div>
      `;
    });
  }
}

// Contoh penggunaan:
const hasilPencarian = searchLaptop("AXIOO", "", "", "8GB", "", "", 7000000);
console.log(hasilPencarian);
