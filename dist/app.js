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
      laptopItem.classList.add('laptop-item');
      
      laptopItem.innerHTML = `
        <h3>${laptop.brand} ${laptop.type}</h3>
        <p>Processor: ${laptop.processor}</p>
        <p>RAM: ${laptop.ram}</p>
        <p>ROM: ${laptop.rom}</p>
        <p>Layar: ${laptop.layar}</p>
        <p>Harga: Rp${laptop.harga.toLocaleString('id-ID')}</p>
      `;
      
      laptopList.appendChild(laptopItem);
    });
  }

  // Panggil fungsi untuk menampilkan data laptop
  displayLaptops();