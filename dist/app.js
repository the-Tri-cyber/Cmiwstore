
    // Fungsi hamburger menu
    document.getElementById("menu-button").addEventListener("click", function() {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hidden");
    });


    // Data laptop
const laptops = [
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD JKT48 X3",
      processor: "RYZEN 5 3500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6099000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD JKT48 X3",
      processor: "RYZEN 5 3500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6099000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD JKT48 X3",
      processor: "RYZEN 5 3500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6399000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD JKT48 X3",
      processor: "RYZEN 5 3500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6399000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD X5",
      processor: "RYZEN 5 5500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6799000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD X5",
      processor: "RYZEN 5 5500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6799000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD X5",
      processor: "RYZEN 5 5500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 7049000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5 AMD X5",
      processor: "RYZEN 5 5500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 7049000
    },
    {
      brand: "AXIOO",
      type: "HYPE 7 AMD X7",
      processor: "RYZEN 7 5700",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: 7799000
    },
    {
      brand: "AXIOO",
      type: "HYPE 7 AMD X7",
      processor: "RYZEN 7 5700",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: 8049000
    },
    {
      brand: "AXIOO",
      type: "HYPE 7 AMD X7",
      processor: "RYZEN 7 5700",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: 8099000
    },
    {
      brand: "AXIOO",
      type: "HYPE 7 AMD X7",
      processor: "RYZEN 7 5700",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: 8349000
    },
    {
      brand: "AXIOO",
      type: "HYPE 1",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "128GB",
      layar: "14.0",
      harga: 3899000
    },
    {
      brand: "AXIOO",
      type: "HYPE 1",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "128GB",
      layar: "14.0",
      harga: 3899000
    },
    {
      brand: "AXIOO",
      type: "HYPE 1",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "128GB",
      layar: "14.0",
      harga: 4099000
    },
    {
      brand: "AXIOO",
      type: "HYPE 1",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "128GB",
      layar: "14.0",
      harga: 4099000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK 14F",
      processor: "Intel Celeron",
      ram: "4GB",
      rom: "256GB",
      layar: "13.3WQXGA IPS 2.5K",
      harga: 4149000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK 14F",
      processor: "Intel Celeron",
      ram: "4GB",
      rom: "256GB",
      layar: "13.3WQXGA IPS 2.5K",
      harga: 4149000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK 14F",
      processor: "Intel Celeron",
      ram: "4GB",
      rom: "256GB",
      layar: "13.3WQXGA IPS 2.5K",
      harga: 4149000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK 14F",
      processor: "Intel Celeron",
      ram: "4GB",
      rom: "256GB",
      layar: "13.3WQXGA IPS 2.5K",
      harga: 4149000
    },
    {
      brand: "AXIOO",
      type: "HYPE X",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 4149000
    },
    {
      brand: "AXIOO",
      type: "HYPE X",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 4149000
    },
    {
      brand: "AXIOO",
      type: "HYPE 10",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 4179000
    },
    {
      brand: "AXIOO",
      type: "HYPE 10",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 4179000
    },
    {
      brand: "AXIOO",
      type: "HYPE 3",
      processor: "Intel Core i3 1005G1",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS HDMI",
      harga: 5649000
    },
    {
      brand: "AXIOO",
      type: "HYPE 3",
      processor: "Intel Core i3 1005G1",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS HDMI",
      harga: 6049000
    },
    {
      brand: "AXIOO",
      type: "HYPE 3",
      processor: "Intel Core i3 1005G1",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD IPS HDMI",
      harga: 6049000
    },
    {
      brand: "AXIOO",
      type: "HYPE 5",
      processor: "Intel Core i5 1035G4",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0FHD IPS HDMI",
      harga: 7849000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK PRO C2",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 8059000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK PRO C1",
      processor: "Intel N4020",
      ram: "6GB",
      rom: "256GB",
      layar: "14.0",
      harga: 8099000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK PRO C2",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 8359000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK PRO 103",
      processor: "Intel Core i3 1005G1",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD",
      harga: 11629000
    },
    {
      brand: "AXIOO",
      type: "MYBOOK Z6",
      processor: "Intel Core i3 1215",
      ram: "4GB",
      rom: "256GB",
      layar: "14.0FHD IPS",
      harga: 6099000
    },
    {
      brand: "AXIOO",
      type: "PONGO 725",
      processor: "Intel Core i7 12650H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6FHD 144HZ IPS",
      harga: 11449000
    },
    {
      brand: "AXIOO",
      type: "PONGO 960",
      processor: "Intel Core i9 13900H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6FHD 144HZ IPS",
      harga: 20899000
    },
    {
      brand: "AXIOO",
      type: "PONGO MONSTER",
      processor: "Intel Core i9 14900H",
      ram: "32GB",
      rom: "2TB",
      layar: "16.0QHD+ 240HZ IPS",
      harga: 61399000
    },
    {
      brand: "APPLE",
      type: "MACBOOK AIR 13 M1",
      processor: "Apple M1 7C GPU",
      ram: "8GB",
      rom: "256GB",
      layar: "13.3",
      harga: 12799000
    },
    {
      brand: "APPLE",
      type: "MACBOOK AIR 13 M1",
      processor: "Apple M1 7C GPU",
      ram: "8GB",
      rom: "256GB",
      layar: "13.3",
      harga: 13099000
    },
    {
      brand: "APPLE",
      type: "MACBOOK AIR 13 M2",
      processor: "Apple M2 8C GPU",
      ram: "8GB",
      rom: "256GB",
      layar: "13.6",
      harga: 15849000
    },
    {
      brand: "APPLE",
      type: "MACBOOK AIR 13 M2",
      processor: "Apple M2 8C GPU",
      ram: "8GB",
      rom: "256GB",
      layar: "13.6",
      harga: 15849000
    },
    {
      brand: "APPLE",
      type: "MACBOOK AIR 13 M3",
      processor: "Apple M3 8C GPU",
      ram: "8GB",
      rom: "256GB",
      layar: "13.0",
      harga: 18499000
    },
    {
      brand: "APPLE",
      type: "MACBOOK AIR 15 M3",
      processor: "Apple M3 10C GPU",
      ram: "8GB",
      rom: "256GB",
      layar: "15.0",
      harga: 22899000
    },
    {
      brand: "APPLE",
      type: "MACBOOK PRO 14 M3",
      processor: "Apple M3 10C GPU",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 27399000
    },
    {
      brand: "APPLE",
      type: "MACBOOK PRO 16 M3 MAX",
      processor: "Apple M3 Max 40C GPU",
      ram: "48GB",
      rom: "1TB",
      layar: "16.0",
      harga: 65699000
    },
    {
      brand: "ZYREX",
      type: "BUNAKEN N4020",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "256GB+64GB",
      layar: "14.0",
      harga: 3979000
    },
    {
      brand: "RAZER",
      type: "BLADE 18 I9 13950HX RTX4090",
      processor: "Intel i9 13950HX",
      ram: "16GB",
      rom: "2TB",
      layar: "18.0",
      harga: 50499000
    },
    {
      brand: "RAZER",
      type: "BLADE 18 I9 13950HX RTX4090",
      processor: "Intel i9 13950HX",
      ram: "16GB",
      rom: "2TB",
      layar: "18.0",
      harga: 50499000
    },
    {
      brand: "ADVAN",
      type: "SOULMATE N4020",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "128GB",
      layar: "14.0",
      harga: 3749000
    },
    {
      brand: "ADVAN",
      type: "SOULMATE N4020",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "128GB",
      layar: "14.0",
      harga: 3749000
    },
    {
      brand: "ADVAN",
      type: "SOULMATE N4020",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "128GB",
      layar: "14.0",
      harga: 3749000
    },
    {
      brand: "MSI",
      type: "COMMERCIAL 14 I5 13420H",
      processor: "Intel i5 13420H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 13499000
    },
    {
      brand: "MSI",
      type: "MODERN 14 RYZEN 5 7530",
      processor: "AMD Ryzen 5 7530",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9199000
    },
    {
      brand: "MSI",
      type: "MODERN 14 RYZEN 5 7530",
      processor: "AMD Ryzen 5 7530",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9799000
    },
    {
      brand: "MSI",
      type: "MODERN 14 RYZEN 7 7730",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 11049000
    },
    // MSI Modern 14 I3 1215 8GB 256GB
    {
      brand: "MSI",
      type: "MODERN 14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 7229000
    },
    {
      brand: "MSI",
      type: "MODERN 14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0",
      harga: 7229000
    },
    
    // MSI Modern 14 I3 1215 8GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 7739000
    },
    {
      brand: "MSI",
      type: "MODERN 14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 7739000
    },
    {
      brand: "MSI",
      type: "MODERN 14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 7739000
    },
    
    // MSI Modern 14 I5 1235 8GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14 I5 1235",
      processor: "Intel i5 1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9299000
    },
    {
      brand: "MSI",
      type: "MODERN 14 I5 1235",
      processor: "Intel i5 1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9299000
    },
    {
      brand: "MSI",
      type: "MODERN 14 I5 1235",
      processor: "Intel i5 1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9299000
    },
    
    // MSI Modern 14 I5 1235 16GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14 I5 1235",
      processor: "Intel i5 1235",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9799000
    },
    {
      brand: "MSI",
      type: "MODERN 14 I5 1235",
      processor: "Intel i5 1235",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 9799000
    },
    
    // MSI Modern 14 I5 1335 16GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14 I5 1335",
      processor: "Intel i5 1335",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 10799000
    },
    
    // MSI Modern 14H I5 13420H 8GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14H I5 13420H",
      processor: "Intel i5 13420H",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 10899000
    },
    
    // MSI Modern 14 I7 1255 16GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14 I7 1255",
      processor: "Intel i7 1255",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 10899000
    },
    
    // MSI Modern 14H I7 13620H 16GB 512GB
    {
      brand: "MSI",
      type: "MODERN 14H I7 13620H",
      processor: "Intel i7 13620H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 12349000
    },
    
    // MSI Modern 15H AI ULTRA 5 125H 16GB 512GB
    {
      brand: "MSI",
      type: "MODERN 15H AI ULTRA 5 125H",
      processor: "Intel i5 125H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6",
      harga: 13599000
    },
    
    // MSI Modern 15H AI ULTRA 7 155H 16GB 512GB
    {
      brand: "MSI",
      type: "MODERN 15H AI ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6",
      harga: 15199000
    },
    
    // MSI Prestige 14 AI EVO ULTRA 5 125H RTX3050
    {
      brand: "MSI",
      type: "PRESTIGE 14 AI EVO ULTRA 5 125H",
      processor: "Intel i5 125H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      kartu_grafis: "RTX3050 6GB",
      harga: 19499000
    },
    
    // MSI Prestige 13 OLED ULTRA 5 125H
    {
      brand: "MSI",
      type: "PRESTIGE 13 OLED ULTRA 5 125H",
      processor: "Intel i5 125H",
      ram: "16GB",
      rom: "1TB",
      layar: "13.3",
      harga: 19699000
    },
    
    // MSI Prestige 14 AI ULTRA 7 155H
    {
      brand: "MSI",
      type: "PRESTIGE 14 AI ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0",
      harga: 20099000
    },
    
    // MSI Prestige 13 AI OLED ULTRA 7 155H
    {
      brand: "MSI",
      type: "PRESTIGE 13 AI OLED ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "13.3",
      harga: 21449000
    },
    
    // MSI Prestige 14 AI STUDIO OLED ULTRA 7 155H RTX4050
    {
      brand: "MSI",
      type: "PRESTIGE 14 AI STUDIO OLED ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0",
      kartu_grafis: "RTX4050 6GB",
      harga: 23499000
    },
    
    // MSI Prestige 16 AI STUDIO ULTRA 7 155H RTX3050
    {
      brand: "MSI",
      type: "PRESTIGE 16 AI STUDIO ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0",
      kartu_grafis: "RTX3050 6GB",
      harga: 23699000
    },
    
    // MSI Prestige 16 AI STUDIO ULTRA 7 155H RTX4050
    {
      brand: "MSI",
      type: "PRESTIGE 16 AI STUDIO ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "32GB",
      rom: "1TB",
      layar: "16.0",
      kartu_grafis: "RTX4050 6GB",
      harga: 25299000
    },
    
    // MSI Summit E13 AI TOUCH ULTRA 7 155H
    {
      brand: "MSI",
      type: "SUMMIT E13 AI TOUCH ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "13.3",
      harga: 25099000
    },
    
    // MSI Summit E16 AI STUDIO TOUCH ULTRA 7 155H RTX4050
    {
      brand: "MSI",
      type: "SUMMIT E16 AI STUDIO TOUCH ULTRA 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0",
      kartu_grafis: "RTX4050 6GB",
      harga: 28899000
    },
    // MSI Bravo 15
    {
      brand: "MSI",
      type: "BRAVO 15 RYZEN 5 7535HS AMD RX6550",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 10899000
    },
    {
      brand: "MSI",
      type: "BRAVO 15 RYZEN 5 7535HS AMD RX6550",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11449000
    },
    {
      brand: "MSI",
      type: "BRAVO 15 RYZEN 5 7535HS AMD RX6550",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/32GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 12499000
    },
    
    // MSI Crosshair 16
    {
      brand: "MSI",
      type: "CROSSHAIR 16 MONSTER HUNTER",
      processor: "Intel i7 14700HX",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.0 QHD+ IPS 240Hz",
      harga: 29899000
    },
    
    // MSI Pulse 16
    {
      brand: "MSI",
      type: "PULSE 16 AI ULTRA 9 185H",
      processor: "Intel i9 185H",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.0 QHD+ 240Hz",
      harga: 29699000
    },
    
    // MSI Sword 16
    {
      brand: "MSI",
      type: "SWORD 16 HX I7 14700HX",
      processor: "Intel i7 14700HX",
      ram: "6GB/16GB",
      rom: "1TB",
      layar: "16.0 QHD+ 240Hz",
      harga: 22699000
    },
    {
      brand: "MSI",
      type: "SWORD 16 HX I7 14650HX",
      processor: "Intel i7 14650HX",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.0 QHD+ 240Hz",
      harga: 25099000
    },
    
    // MSI Katana A15
    {
      brand: "MSI",
      type: "KATANA A15 AI RYZEN 7 8845HS",
      processor: "AMD Ryzen 7 8845HS",
      ram: "6GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 17699000
    },
    {
      brand: "MSI",
      type: "KATANA A15 AI RYZEN 7 8845HS",
      processor: "AMD Ryzen 7 8845HS",
      ram: "8GB/16GB",
      rom: "512GB",
      layar: "15.6 QHD 165Hz",
      harga: 20399000
    },
    
    // MSI Katana 15
    {
      brand: "MSI",
      type: "KATANA 15 I7 13620H",
      processor: "Intel i7 13620H",
      ram: "6GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 18249000
    },
    {
      brand: "MSI",
      type: "KATANA 17 I7 13620H",
      processor: "Intel i7 13620H",
      ram: "6GB/16GB",
      rom: "1TB",
      layar: "17.3 FHD 144Hz",
      harga: 18499000
    },
    
    // MSI Creator Z16HX
    {
      brand: "MSI",
      type: "CREATOR Z16HX STUDIO TOUCH",
      processor: "Intel i7 13700HX",
      ram: "8GB/32GB",
      rom: "2TB",
      layar: "16.0 QHD+ 165Hz",
      harga: 38499000
    },
    
    // MSI Thin A15
    {
      brand: "MSI",
      type: "THIN A15 RYZEN 5 7535HS",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 11499000
    },
    {
      brand: "MSI",
      type: "THIN A15 RYZEN 5 7535HS",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12999000
    },
    {
      brand: "MSI",
      type: "THIN A15 RYZEN 5 7535HS",
      processor: "AMD Ryzen 5 7535HS",
      ram: "6GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 13599000
    },
    {
      brand: "MSI",
      type: "THIN A15 RYZEN 7 7735HS",
      processor: "AMD Ryzen 7 7735HS",
      ram: "8GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 17899000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 10849000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 10849000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 10849000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 10849000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 10849000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 11400H",
      processor: "Intel Core i5 11400H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11249000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 11400H",
      processor: "Intel Core i5 11400H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11249000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11349000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11349000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 13420H",
      processor: "Intel Core i5 13420H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 11449000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 13420H",
      processor: "Intel Core i5 13420H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 11449000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 11400H",
      processor: "Intel Core i5 11400H",
      ram: "4GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11749000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 12049000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12049000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12049000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 13420H",
      processor: "Intel Core i5 13420H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12249000
    },
    {
      brand: "MSI",
      type: "THIN GF63 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 12449000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 13420H",
      processor: "Intel Core i5 13420H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12649000
    },
    {
      brand: "MSI",
      type: "THIN 15 I5 12450H",
      processor: "Intel Core i5 12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12649000
    },
    {
      brand: "MSI",
      type: "RAIDER GE78HX I9 14900HX",
      processor: "Intel Core i9 14900HX",
      ram: "12GB/32GB",
      rom: "2TB",
      layar: "17.0 QHD+ 240Hz",
      harga: 53399000
    },
    {
      brand: "MSI",
      type: "TITAN 18HX 19 I9 14900HX",
      processor: "Intel Core i9 14900HX",
      ram: "12GB/64GB",
      rom: "2TB",
      layar: "18.0 UHD+ 120Hz",
      harga: 69499000
    },
    {
      brand: "ACER",
      type: "CHROMEBOOK 311 C733 N4020",
      processor: "Intel N4020",
      ram: "4GB",
      rom: "32GB",
      layar: "11.6",
      harga: 4999000
    },
    {
      brand: "ACER",
      type: "TRAVELMATE P214 I5 1135G7",
      processor: "Intel i5-1135G7",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 13399000
    },
    {
      brand: "ACER",
      type: "TRAVELMATE P40 I7 1165G7",
      processor: "Intel i7-1165G7",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 11499000
    },
    {
      brand: "ACER",
      type: "TRAVELMATE P214 I7 1165G7",
      processor: "Intel i7-1165G7",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 15399000
    },
    {
      brand: "ACER",
      type: "TRAVELMATE P414 I7 1260P",
      processor: "Intel i7-1260P",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0",
      harga: 22999000
    },
    {
      brand: "ACER",
      type: "ASPIRE 3 SLIM A314 RYZEN 7 5700",
      processor: "AMD Ryzen 7 5700",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 IPS",
      harga: 10199000
    },
    {
      brand: "ACER",
      type: "ASPIRE LITE AL14 INTEL N100",
      processor: "Intel N100",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 WUXGA",
      harga: 6249000
    },
    {
      brand: "ACER",
      type: "ASPIRE LITE AL14 INTEL N100",
      processor: "Intel N100",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 6449000
    },
    {
      brand: "ACER",
      type: "ASPIRE 3 SLIM A314 I3 N305 8CORE",
      processor: "Intel i3 N305 8CORE",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7199000
    },
    {
      brand: "ACER",
      type: "ASPIRE LITE AL14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 WUXGA IPS",
      harga: 7499000
    },
    {
      brand: "ACER",
      type: "ASPIRE 3 SLIM A314 I3 N305 8CORE",
      processor: "Intel i3 N305 8CORE",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7649000
    },
    {
      brand: "ACER",
      type: "ASPIRE GO 14 AG14 I3 N305",
      processor: "Intel i3 N305",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 7799000
    },
    {
      brand: "ACER",
      type: "ASPIRE LITE AL14 I3 1215",
      processor: "Intel i3 1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS",
      harga: 7949000
    },
    {
      brand: "ACER",
      type: "ASPIRE LITE AL14 I5 1235",
      processor: "Intel i5 1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS",
      harga: 9799000
    },
    {
      brand: "ACER",
      type: "ASPIRE LITE AL14 I5 1235",
      processor: "Intel i5 1235",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS",
      harga: 10159000
    },
    {
      brand: "ACER",
      type: "ASPIRE 14 CORE 5 120U",
      processor: "Intel Core 5 120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS",
      harga: 11249000
    },
    {
      brand: "ACER",
      type: "ASPIRE 14 A14 I5 13420H",
      processor: "Intel i5 13420H",
      ram: "4GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 11499000
    },
    {
      brand: "ACER",
      type: "ASPIRE 14 CORE 7 150U",
      processor: "Intel Core 7 150U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS",
      harga: 13999000
    },
    {
      brand: "ACER",
      type: "ASPIRE 5 SLIM A514 I5 1335",
      processor: "Intel i5 1335",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 10199000
    },
    {
      brand: "ACER",
      type: "ASPIRE 5 SLIM A514 I7 1355",
      processor: "Intel i7 1355",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 13599000
    },
    {
      brand: "ACER",
      type: "ASPIRE 5 SLIM A515 I9 13900H",
      processor: "Intel i9 13900H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD",
      harga: 13499000
    },
    {
      brand: "ACER",
      type: "ASPIRE VERO AV16 ULTRA 7",
      processor: "Intel Ultra 7 155U",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 WUXGA 100% sRGB",
      harga: 15599000
    },
    {
      brand: "Acer",
      type: "Aspire 3 Spin A3SP14 TOUCH",
      processor: "Intel Core i3 N305 8Core",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS 2in1",
      harga: 9399000
    },
    {
      brand: "Acer",
      type: "Aspire Spin ASP14 TOUCH",
      processor: "Intel Core 3 100U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN 2in1",
      harga: 11599000
    },
    {
      brand: "Acer",
      type: "Aspire 5 Spin A5SP14 TOUCH",
      processor: "Intel Core i5 1335",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA FP PEN 2in1",
      harga: 12549000
    },
    {
      brand: "Acer",
      type: "Aspire Spin 14 ASP14 TOUCH",
      processor: "Intel Core 5 120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN 2in1",
      harga: 13499000
    },
    {
      brand: "Acer",
      type: "Aspire 5 Spin A5SP14 TOUCH",
      processor: "Intel Core i7 1355",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA FP PEN 2in1",
      harga: 14599000
    },
    {
      brand: "Acer",
      type: "Aspire Spin ASP14 TOUCH",
      processor: "Intel Core 7 150U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN 2in1",
      harga: 15179000
    },
    {
      brand: "Acer",
      type: "Swift Edge SFA16 OLED",
      processor: "AMD Ryzen 5 6600",
      ram: "16GB",
      rom: "512GB",
      layar: "16.0 4K FP",
      harga: 12599000
    },
    {
      brand: "Acer",
      type: "Swift Go SFG14",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS 100% sRGB",
      harga: 12399000
    },
    {
      brand: "Acer",
      type: "Swift 3 OLED SF314",
      processor: "Intel Core i5 12500H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2.8K 90Hz",
      harga: 12649000
    },
    {
      brand: "Acer",
      type: "Swift Go SFG14 OLED",
      processor: "Intel Core i5 13500H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2.8K 90Hz FP EVO",
      harga: 13399000
    },
    {
      brand: "Acer",
      type: "Swift 5 SF514 Aerospace TOUCH",
      processor: "Intel Core i5 1240P",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 QHD IPS 100% sRGB",
      harga: 14199000
    },
    {
      brand: "Acer",
      type: "Swift 14 SF14 TOUCH",
      processor: "Intel Core i5 13500H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WQXGA 100% sRGB",
      harga: 17999000
    },
    {
      brand: "Acer",
      type: "Swift Go SFG14 TOUCH",
      processor: "Intel Core i7 13700H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 WUXGA FP",
      harga: 15349000
    },
    {
      brand: "Acer",
      type: "Swift Go SFG14 ULTRA 5",
      processor: "Intel Core i5 125H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2.8K 100% sRGB",
      harga: 13149000
    },
    {
      brand: "Acer",
      type: "Swift Go OLED SFG14 ULTRA 5",
      processor: "Intel Core i5 125H",
      ram: "32GB",
      rom: "512GB",
      layar: "14.0 2.8K 90Hz",
      harga: 15449000
    },
    {
      brand: "Acer",
      type: "Swift X 14 OLED SFX14 ULTRA 7",
      processor: "Intel Core i7 155H RTX4050",
      ram: "32GB",
      rom: "1TB",
      layar: "14.5 2.8K 120Hz",
      harga: 25899000
    },
    {
      brand: "Acer",
      type: "Swift X 14 OLED SFX14 ULTRA 7",
      processor: "Intel Core i7 155H RTX4060",
      ram: "32GB",
      rom: "1TB",
      layar: "14.5 2.8K 120Hz",
      harga: 27999000
    },
    {
      brand: "Acer",
      type: "Swift Go TOUCH SFG14 ULTRA 9",
      processor: "Intel Core i7 185H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 WUXGA 100% sRGB",
      harga: 19049000
    },
    {
      brand: "Acer",
      type: "Swift Go OLED SFG14 ULTRA 9",
      processor: "Intel Core i7 185H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K 90Hz",
      harga: 19699000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "AMD Ryzen 5 7535HS",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12299000
    },
    {
      brand: "Acer",
      type: "Nitro V 16",
      processor: "AMD Ryzen 7 8845HS",
      ram: "16GB",
      rom: "512GB",
      layar: "16.0 WUXGA 165Hz IPS",
      harga: 18099000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "Intel Core i5 13420H",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 12099000
    },
    {
      brand: "Acer",
      type: "Nitro 5 15 AN515",
      processor: "Intel Core i5 11400H",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 13499000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "Intel Core i5 13420H",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 13999000
    },
    {
      brand: "Acer",
      type: "Nitro 5 15 AN515",
      processor: "Intel Core i5 12500H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 14149000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "Intel Core i5 13420H",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 15649000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "Intel Core i7 13620H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 15199000
    },
    {
      brand: "Acer",
      type: "Nitro 5 15 AN515",
      processor: "Intel Core i7 12650H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 WUXGA 165Hz 100% sRGB",
      harga: 18699000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "Intel Core i9 13900H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 19799000
    },
    {
      brand: "Acer",
      type: "Nitro V 15",
      processor: "Intel Core i9 13900H",
      ram: "32GB",
      rom: "1TB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 20899000
    },
    {
      brand: "Acer",
      type: "Predator Triton 16 Ultra 9",
      processor: "Intel Core i9 185H RTX4060",
      ram: "32GB",
      rom: "1TB",
      layar: "16.0 WQXGA 240Hz 100% DCI-P3",
      harga: 31299000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 16",
      processor: "Intel Core i5 14500HX RTX4050",
      ram: "8GB",
      rom: "512GB",
      layar: "16.0 WUXGA 180Hz sRGB100",
      harga: 19199000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 16",
      processor: "Intel Core i5 14500HX RTX4060",
      ram: "8GB",
      rom: "512GB",
      layar: "16.0 WQXGA 165Hz sRGB100",
      harga: 21399000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 16",
      processor: "Intel Core i7 14700HX RTX4050",
      ram: "16GB",
      rom: "512GB",
      layar: "16.0 WUXGA 165Hz sRGB100",
      harga: 22599000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 16",
      processor: "Intel Core i7 13700HX RTX4060",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 WQXGA 165Hz sRGB100",
      harga: 23249000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 16",
      processor: "Intel Core i9 13900HX RTX4060",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 WQXGA 165Hz sRGB100",
      harga: 25199000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 16",
      processor: "Intel Core i9 14900HX RTX4060",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 WQXGA 165Hz sRGB100",
      harga: 28349000
    },
    {
      brand: "Acer",
      type: "Predator Helios 16",
      processor: "Intel Core i9 14900HX RTX4080",
      ram: "32GB",
      rom: "1TB",
      layar: "16.0 WQXGA MiniLED 250Hz 100% DCI-P3",
      harga: 49099000
    },
    {
      brand: "Acer",
      type: "Predator Helios Neo 14 Ultra 9",
      processor: "Intel Core i9 185H RTX4060",
      ram: "32GB",
      rom: "1TB",
      layar: "14.5 WQXGA 165Hz",
      harga: 28599000
    },
    {
      brand: "HP",
      type: "245 G10",
      processor: "Ryzen 3 7320",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 Slim Bezel",
      harga: 6699000
    },
    {
      brand: "HP",
      type: "245 G8",
      processor: "Ryzen 5 5500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 Slim Bezel",
      harga: 7999000
    },
    {
      brand: "HP",
      type: "245 G9",
      processor: "Ryzen 5 5625",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 Slim Bezel",
      harga: 8099000
    },
    {
      brand: "HP",
      type: "ProBook 440 G10",
      processor: "Intel Core i7 1355",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 19999000
    },
    {
      brand: "HP",
      type: "EliteBook 845 G9",
      processor: "Ryzen 9 6950HS",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 WUXGA",
      harga: 18299000
    },
    {
      brand: "HP",
      type: "14 Athlon Silver 3050",
      processor: "Athlon Silver 3050",
      ram: "4GB",
      rom: "512GB",
      layar: "14.0",
      harga: 6149000
    },
    {
      brand: "HP",
      type: "14 Athlon Silver 3050",
      processor: "Athlon Silver 3050",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0",
      harga: 6349000
    },
    {
      brand: "HP",
      type: "14 Athlon 7120",
      processor: "Athlon 7120",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 6399000
    },
    {
      brand: "HP",
      type: "14 Ryzen 3 5300",
      processor: "Ryzen 3 5300",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 7079000
    },
    {
      brand: "HP",
      type: "14 Ryzen 3 5300",
      processor: "Ryzen 3 5300",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 7499000
    },
    {
      brand: "HP",
      type: "14 Ryzen 5 5500",
      processor: "Ryzen 5 5500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 8138000
    },
    {
      brand: "HP",
      type: "14 Ryzen 5 5500",
      processor: "Ryzen 5 5500",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 8599000
    },
    {
      brand: "HP",
      type: "14 N4500",
      processor: "Intel Celeron N4500",
      ram: "4GB",
      rom: "256GB",
      layar: "14.0 BLIT",
      harga: 5679000
    },
    {
      brand: "HP",
      type: "14 N4500",
      processor: "Intel Celeron N4500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 BLIT",
      harga: 5849000
    },
    {
      brand: "HP",
      type: "14 N4500",
      processor: "Intel Celeron N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 BLIT",
      harga: 6149000
    },
    {
      brand: "HP",
      type: "14 I3 1215",
      processor: "Intel Core i3-1215",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD BLIT",
      harga: 7299000
    },
    {
      brand: "HP",
      type: "14 I3 1215",
      processor: "Intel Core i3-1215",
      ram: "4GB",
      rom: "512GB",
      layar: "14.0 FHD BLIT",
      harga: 7399000
    },
    {
      brand: "HP",
      type: "14 I3 1215",
      processor: "Intel Core i3-1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD BLIT",
      harga: 7599000
    },
    {
      brand: "HP",
      type: "14 I3 1215",
      processor: "Intel Core i3-1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD BLIT (Box MOU Z3700)",
      harga: 8499000
    },
    {
      brand: "HP",
      type: "14 I5 1155G7",
      processor: "Intel Core i5-1155G7",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS BLIT",
      harga: 9299000
    },
    {
      brand: "HP",
      type: "14 I5 1235",
      processor: "Intel Core i5-1235",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD IPS BLIT",
      harga: 9649000
    },
    {
      brand: "HP",
      type: "14 I5 1155G7",
      processor: "Intel Core i5-1155G7",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS BLIT",
      harga: 9749000
    },
    {
      brand: "HP",
      type: "14 I5 1235",
      processor: "Intel Core i5-1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS BLIT",
      harga: 10049900
    },
    {
      brand: "HP",
      type: "14 I5 1335",
      processor: "Intel Core i5-1335",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS BLIT",
      harga: 10599000
    },
    {
      brand: "HP",
      type: "14 I7 1255",
      processor: "Intel Core i7-1255",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS BLIT",
      harga: 12399000
    },
    {
      brand: "HP",
      type: "14 I7 1355",
      processor: "Intel Core i7-1355",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS BLIT FP",
      harga: 14099000
    },
    {
      brand: "HP",
      type: "15 I7 1355 MX570A",
      processor: "Intel Core i7-1355 MX570A",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS BLIT",
      harga: 15499000
    },
    {
      brand: "HP",
      type: "15 ULTRA 5 125H",
      processor: "Intel Core i5-125H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS BLIT",
      harga: 12199000
    },
    {
      brand: "HP",
      type: "15 ULTRA 5 125H",
      processor: "Intel Core i5-125H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS BLIT",
      harga: 12199000
    },
    {
      brand: "HP",
      type: "15 ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS BLIT",
      harga: 14399000
    },
    {
      brand: "HP",
      type: "15 ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS BLIT",
      harga: 14399000
    },
    // HP Pavilion Plus type
    {
      brand: "HP",
      type: "PAVILION PLUS 14 RYZEN 5 7540",
      processor: "AMD Ryzen 5 7540",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA BLIT",
      harga: 12349000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 RYZEN 5 7540",
      processor: "AMD Ryzen 5 7540",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA BLIT",
      harga: 12349000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 RYZEN 5 7540",
      processor: "AMD Ryzen 5 7540",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA BLIT",
      harga: 12349000
    },
    {
      brand: "HP",
      type: "PAVILION AERO 13 RYZEN 5 8640",
      processor: "AMD Ryzen 5 8640",
      ram: "16GB",
      rom: "512GB",
      layar: "13.3 WUXGA IPS",
      harga: 15099000
    },
    {
      brand: "HP",
      type: "PAVILION AERO 13 RYZEN 5 8640",
      processor: "AMD Ryzen 5 8640",
      ram: "16GB",
      rom: "512GB",
      layar: "13.3 WUXGA IPS",
      harga: 15099000
    },
    {
      brand: "HP",
      type: "PAVILION AERO 13 RYZEN 7 8840",
      processor: "AMD Ryzen 7 8840",
      ram: "16GB",
      rom: "1TB",
      layar: "13.3 WUXGA IPS",
      harga: 16499000
    },
    {
      brand: "HP",
      type: "PAVILION AERO 13 RYZEN 7 8840",
      processor: "AMD Ryzen 7 8840",
      ram: "16GB",
      rom: "1TB",
      layar: "13.3 WUXGA IPS",
      harga: 16499000
    },
    // HP Pavilion Plus I5 type
    {
      brand: "HP",
      type: "PAVILION PLUS 14 I5 1335",
      processor: "Intel Core i5-1335",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA IPS BLIT",
      harga: 12699000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 I5 1335",
      processor: "Intel Core i5-1335",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WQXGA VRR 120HZ",
      harga: 15999000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 I5 1335",
      processor: "Intel Core i5-1335",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WQXGA VRR 120HZ",
      harga: 15999000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED I7 1355",
      processor: "Intel Core i7-1355",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K 120HZ",
      harga: 17699000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED I7 1355",
      processor: "Intel Core i7-1355",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 18899000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED I7 1355",
      processor: "Intel Core i7-1355",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 18899000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED I7 1355",
      processor: "Intel Core i7-1355",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 18899000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED ULTRA 5 125H",
      processor: "Intel Core i5-125H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 17199000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED ULTRA 5 125H",
      processor: "Intel Core i5-125H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 17199000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 21399000
    },
    {
      brand: "HP",
      type: "PAVILION PLUS 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120HZ",
      harga: 21399000
    },
    // HP Pavilion 16 type
    {
      brand: "HP",
      type: "PAVILION 16 TOUCH ULTRA 5 125U",
      processor: "Intel Core i5-125U",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 WUXGA BLIT",
      harga: 14849000
    },
    {
      brand: "HP",
      type: "PAVILION 16 TOUCH ULTRA 7 155U",
      processor: "Intel Core i7-155U MX570A",
      ram: "32GB",
      rom: "1TB",
      layar: "16.0 WUXGA BLIT",
      harga: 19299000
    },
    // HP Pavilion X360 type
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH I3 1315",
      processor: "Intel Core i3-1315",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 11399000
    },
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH CORE 3 100U",
      processor: "Intel Core i3-100U",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 11599000
    },
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH CORE 5 120U",
      processor: "Intel Core i5-120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS FP PEN 720P CAM",
      harga: 15099000
    },
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH CORE 5 120U",
      processor: "Intel Core i5-120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS FP PEN",
      harga: 15299000
    },
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH CORE 5 120U",
      processor: "Intel Core i5-120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS FP PEN",
      harga: 15299000
    },
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH CORE 7 150U",
      processor: "Intel Core i7-150U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS FP PEN 720P CAM",
      harga: 16499000
    },
    {
      brand: "HP",
      type: "PAVILION X360 14 TOUCH CORE 7 150U",
      processor: "Intel Core i7-150U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS FP PEN 720P CAM",
      harga: 16699000
    },
    // HP Envy X360 type
    {
      brand: "HP",
      type: "ENVY X360 14 OLED RYZEN 7 8840HS",
      processor: "AMD Ryzen 7 8840HS",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K 120HZ",
      harga: 22399000
    },
    {
      brand: "HP",
      type: "ENVY X360 14 OLED ULTRA 5 125U",
      processor: "Intel Core i5-125U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2.8K 120HZ",
      harga: 18699000
    },
    {
      brand: "HP",
      type: "ENVY X360 14 OLED ULTRA 5 125U",
      processor: "Intel Core i5-125U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2.8K 120HZ",
      harga: 18699000
    },
    {
      brand: "HP",
      type: "ENVY X360 14 OLED ULTRA 7 155U",
      processor: "Intel Core i7-155U",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K 120HZ",
      harga: 21299000
    },
    {
      brand: "HP",
      type: "ENVY X360 14 OLED ULTRA 7 155U",
      processor: "Intel Core i7-155U",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K 120HZ",
      harga: 21299000
    },
    {
      brand: "HP",
      type: "SPECTRE X360 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K 120Hz",
      harga: 28499000
    },
    {
      brand: "HP",
      type: "SPECTRE X360 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K 120Hz",
      harga: 28499000
    },
    {
      brand: "HP",
      type: "SPECTRE X360 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K 120Hz",
      harga: 28499000
    },
    {
      brand: "HP",
      type: "SPECTRE X360 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "2TB",
      layar: "14.0 2.8K 120Hz",
      harga: 30499000
    },
    {
      brand: "HP",
      type: "SPECTRE X360 14 OLED ULTRA 7 155H",
      processor: "Intel Core i7-155H",
      ram: "32GB",
      rom: "2TB",
      layar: "14.0 2.8K 120Hz",
      harga: 30499000
    },
    {
      brand: "HP",
      type: "SPECTRE X360 17 FOLD TOUCH OLED",
      processor: "Intel Core i7-1250",
      ram: "16GB",
      rom: "1TB",
      layar: "17.0 2.5K",
      harga: 42899000
    },
    {
      brand: "HP",
      type: "VICTUS 15 RYZEN 5 7535HS",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 11449000
    },
    {
      brand: "HP",
      type: "VICTUS 15 RYZEN 5 7535HS",
      processor: "AMD Ryzen 5 7535HS",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 11449000
    },
    {
      brand: "HP",
      type: "VICTUS 15 RYZEN 5 8645HS",
      processor: "AMD Ryzen 5 8645HS",
      ram: "6GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 13499000
    },
    {
      brand: "HP",
      type: "VICTUS 15 RYZEN 5 8645HS",
      processor: "AMD Ryzen 5 8645HS",
      ram: "6GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 15799000
    },
    {
      brand: "HP",
      type: "VICTUS 15 RYZEN 5 8645HS",
      processor: "AMD Ryzen 5 8645HS",
      ram: "8GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 17299000
    },
    {
      brand: "HP",
      type: "VICTUS 16 RYZEN 5 8645HS",
      processor: "AMD Ryzen 5 8645HS",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.1 FHD 144Hz",
      harga: 18099000
    },
    {
      brand: "HP",
      type: "VICTUS 16 RYZEN 7 8845HS",
      processor: "AMD Ryzen 7 8845HS",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.1 FHD 165Hz 100% sRGB",
      harga: 23599000
    },
    {
      brand: "HP",
      type: "OMEN 16 RYZEN 7 7745HS",
      processor: "AMD Ryzen 7 7745HS",
      ram: "8GB/16GB",
      rom: "512GB",
      layar: "16.1 FHD 144Hz",
      harga: 18899000
    },
    {
      brand: "HP",
      type: "OMEN 16 RYZEN 7 7745HS",
      processor: "AMD Ryzen 7 7745HS",
      ram: "12GB/32GB",
      rom: "1TB",
      layar: "16.1 FHD 165Hz 100% sRGB",
      harga: 28299000
    },
    {
      brand: "HP",
      type: "OMEN 17 RYZEN 7 7745HS",
      processor: "AMD Ryzen 7 7745HS",
      ram: "12GB/32GB",
      rom: "1TB",
      layar: "17.3 FHD 144Hz 100% sRGB",
      harga: 30399000
    },
    {
      brand: "HP",
      type: "OMEN 17 RYZEN 9 7945HX",
      processor: "AMD Ryzen 9 7945HX",
      ram: "16GB/32GB",
      rom: "1TB",
      layar: "17.3 FHD 165Hz 100% sRGB",
      harga: 38899000
    },
    {
      brand: "HP",
      type: "VICTUS 15 I5 12450H RTX2050",
      processor: "Intel Core i5-12450H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 11739000
    },
    {
      brand: "HP",
      type: "VICTUS 15 I5 12450H RTX2050",
      processor: "Intel Core i5-12450H",
      ram: "4GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD IPS 144Hz",
      harga: 12239000
    },
    {
      brand: "HP",
      type: "VICTUS 15 I5 13420H RTX3050",
      processor: "Intel Core i5-13420H",
      ram: "6GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 13899000
    },
    {
      brand: "HP",
      type: "VICTUS 15 I5 13500H RTX4050",
      processor: "Intel Core i5-13500H",
      ram: "6GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 15699000
    },
    {
      brand: "HP",
      type: "VICTUS 16 I5 13500HX RTX4050",
      processor: "Intel Core i5-13500HX",
      ram: "6GB/16GB",
      rom: "512GB",
      layar: "16.1 FHD 144Hz 100% sRGB",
      harga: 16699000
    },
    {
      brand: "HP",
      type: "VICTUS 16 I5 14450HX RTX4060",
      processor: "Intel Core i5-14450HX",
      ram: "8GB/16GB",
      rom: "512GB",
      layar: "16.1 FHD 144Hz 100% sRGB",
      harga: 20099000
    },
    {
      brand: "HP",
      type: "VICTUS 16 I7 14650HX RTX4060",
      processor: "Intel Core i7-14650HX",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.1 FHD 144Hz 100% sRGB",
      harga: 23499000
    },
    {
      brand: "HP",
      type: "VICTUS 16 I7 14650HX RTX4070",
      processor: "Intel Core i7-14650HX",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.1 FHD 165Hz 100% sRGB",
      harga: 26699000
    },
    // HP OMEN
    {
      brand: "HP",
      type: "OMEN 14 OLED ULTRA 7 155H RTX4060",
      processor: "Intel Core i7-155H",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120Hz 4ZRGB",
      harga: 31299000
    },
    {
      brand: "HP",
      type: "OMEN 14 OLED ULTRA 7 155H RTX4060",
      processor: "Intel Core i7-155H",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120Hz 4ZRGB",
      harga: 31299000
    },
    {
      brand: "HP",
      type: "OMEN TRANSCEND 14 OLED ULTRA 9 185H RTX4060",
      processor: "Intel Core i9-185H",
      ram: "6GB/32GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120Hz 4ZRGB",
      harga: 35499000
    },
    {
      brand: "HP",
      type: "OMEN TRANSCEND 14 OLED ULTRA 9 185H RTX4060",
      processor: "Intel Core i9-185H",
      ram: "6GB/32GB",
      rom: "1TB",
      layar: "14.0 2.8K VRR 120Hz 4ZRGB",
      harga: 35499000
    },
    {
      brand: "HP",
      type: "OMEN TRANSCEND 14 OLED ULTRA 9 185H RTX4070",
      processor: "Intel Core i9-185H",
      ram: "8GB/32GB",
      rom: "2TB",
      layar: "14.0 2.8K VRR 120Hz 4ZRGB",
      harga: 39799000
    },
    {
      brand: "HP",
      type: "OMEN TRANSCEND 14 OLED ULTRA 9 185H RTX4070",
      processor: "Intel Core i9-185H",
      ram: "8GB/32GB",
      rom: "2TB",
      layar: "14.0 2.8K VRR 120Hz 4ZRGB",
      harga: 39799000
    },
    {
      brand: "HP",
      type: "OMEN 16 RYZEN 7 7840HS RTX4070",
      processor: "AMD Ryzen 7 7840HS",
      ram: "8GB/32GB",
      rom: "1TB",
      layar: "16.1 QHD 240Hz",
      harga: 26199000
    },
    // ASUS
    {
      brand: "ASUS",
      type: "FLIP C214MA CHROMEBOOK 2IN1 TOUCH N4020",
      processor: "Intel Celeron N4020",
      ram: "4GB",
      rom: "32GB",
      layar: "11.6 HD",
      harga: 4499000
    },
    {
      brand: "ASUS",
      type: "EXPERTBOOK B1402CBA I3 1215",
      processor: "Intel Core i3-1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7799000
    },
    {
      brand: "ASUS",
      type: "EXPERTBOOK B1402CBA I5 1235",
      processor: "Intel Core i5-1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 10899000
    },
    {
      brand: "ASUS",
      type: "EXPERTBOOK B1400CBA I7 1255",
      processor: "Intel Core i7-1255",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 13099000
    },
    {
      brand: "ASUS",
      type: "EXPERTBOOK B5 FLIP B5302FEA OLED TOUCH I7 1165G7",
      processor: "Intel Core i7-1165G7",
      ram: "8GB",
      rom: "512GB",
      layar: "13.3 FHD OLED",
      harga: 16399000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404FA RYZEN 3 7320",
      processor: "AMD Ryzen 3 7320",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7249000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404FA RYZEN 3 7320",
      processor: "AMD Ryzen 3 7320",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7869000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404FA RYZEN 3 7320",
      processor: "AMD Ryzen 3 7320",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7869000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404FA RYZEN 5 7520",
      processor: "AMD Ryzen 5 7520",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 8999000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404FA RYZEN 5 7520",
      processor: "AMD Ryzen 5 7520",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 9919000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 M1405YA RYZEN 5 7430",
      processor: "AMD Ryzen 5 7430",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 10459000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK S 14 OLED M5406NA RYZEN 5 7535HS",
      processor: "AMD Ryzen 5 7535HS",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2K OLED",
      harga: 14399000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 OLED M1405YA RYZEN 7 7730",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K OLED",
      harga: 13299000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 OLED M1405YA RYZEN 7 7730",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K OLED",
      harga: 13299000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 OLED M5406UA RYZEN 7 8845HS",
      processor: "AMD Ryzen 7 8845HS",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA OLED",
      harga: 15969000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E410KA N4500",
      processor: "Intel N4500",
      ram: "4GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 6149000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1400KA N4500",
      processor: "Intel N4500",
      ram: "4GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 6179000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1400KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 6329000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1400KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 6359000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1400KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 6359000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 15 X515EA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "256GB",
      layar: "15.6 FHD",
      harga: 6999000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 15 X515EA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD",
      harga: 7399000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 15 X515EA N4500",
      processor: "Intel N4500",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD",
      harga: 7799000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 15 X515EA N4500",
      processor: "Intel N4500",
      ram: "16GB",
      rom: "1TB",
      layar: "15.6 FHD",
      harga: 8499000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1400KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6689000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1400KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6689000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E410KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6779000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E410KA N4500",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6779000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404GA I3 N305",
      processor: "Intel I3 N305",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7499000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404GA I3 N305",
      processor: "Intel I3 N305",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7499000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK GO 14 E1404GA I3 N305",
      processor: "Intel I3 N305",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7749000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1404ZA I3 1215",
      processor: "Intel I3 1215",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD IPS 100% sRGB",
      harga: 7779000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1404ZA I3 1215",
      processor: "Intel I3 1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD VIPS",
      harga: 8429000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1404VA I5 1335",
      processor: "Intel I5 1335",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD VIPS",
      harga: 11259000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 14 A1405VA I7 1355",
      processor: "Intel I7 1355",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA VIPS",
      harga: 14599000
    },
    {
      brand: "ASUS",
      type: "VivoBook 14 A1400KA N4500 8GB 512GB",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6689000
    },
    {
      brand: "ASUS",
      type: "VivoBook 14 A1400KA N4500 8GB 512GB",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6689000
    },
    {
      brand: "ASUS",
      type: "VivoBook GO 14 E410KA N4500 8GB 512GB",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6779000
    },
    {
      brand: "ASUS",
      type: "VivoBook GO 14 E410KA N4500 8GB 512GB",
      processor: "Intel N4500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6779000
    },
    {
      brand: "ASUS",
      type: "VivoBook GO 14 E1404GA I3 N305 8GB 256GB",
      processor: "Intel I3 N305",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7499000
    },
    {
      brand: "ASUS",
      type: "VivoBook GO 14 E1404GA I3 N305 8GB 512GB",
      processor: "Intel I3 N305",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7749000
    },
    {
      brand: "ASUS",
      type: "VivoBook 14 A1404ZA I3 1215 8GB 512GB",
      processor: "Intel I3 1215",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 8429000
    },
    {
      brand: "ASUS",
      type: "VivoBook 14 A1404ZA I5 1235 8GB 512GB",
      processor: "Intel I5 1235",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 10349000
    },
    {
      brand: "ASUS",
      type: "VivoBook S 15 OLED S5507QA Snapdragon X Elite X1E",
      processor: "Snapdragon X Elite X1E",
      ram: "32GB",
      rom: "1TB",
      layar: "15.6 3K 120Hz",
      harga: 25499000
    },
    {
      brand: "ASUS",
      type: "VivoBook GO 15 OLED E1504FA Ryzen 3 7320 8GB 256GB",
      processor: "Ryzen 3 7320",
      ram: "8GB",
      rom: "256GB",
      layar: "15.6 FHD",
      harga: 8399000
    },
    {
      brand: "ASUS",
      type: "VivoBook GO 15 OLED E1504FA Ryzen 5 7520 16GB 512GB",
      processor: "Ryzen 5 7520",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD",
      harga: 10849000
    },
    {
      brand: "ASUS",
      type: "VivoBook Pro 15 OLED M6500QC Ryzen 5 5600H RTX3050 4GB/16GB 512GB",
      processor: "Ryzen 5 5600H",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 2.8K 120Hz",
      harga: 13799000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK 15 OLED K513EA",
      processor: "Intel Core i7 1165G7",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD OLED 100% DCI-P3",
      harga: 12399000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK PRO 16 OLED K6602VU",
      processor: "Intel Core i9 13900H",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 3.2K OLED 120Hz",
      harga: 25199000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK PRO 16X OLED K6604JV",
      processor: "Intel Core i9 13980HX",
      ram: "16GB",
      rom: "1TB",
      layar: "16.0 3.2K OLED 120Hz",
      harga: 29299000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK PRO 16X OLED K6604JV",
      processor: "Intel Core i9 13980HX",
      ram: "32GB",
      rom: "1TB",
      layar: "16.0 3.2K OLED 120Hz",
      harga: 30729000
    },
    {
      brand: "ASUS",
      type: "VIVOBOOK PRO 15 OLED N6506MU ULTRA 7",
      processor: "Intel Core i7 155H",
      ram: "24GB",
      rom: "1TB",
      layar: "15.6 3K OLED 120Hz",
      harga: 27399000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK 14 UM425UAZ",
      processor: "AMD Ryzen 5 5500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: 11380000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK 14 OLED UM3406HA",
      processor: "AMD Ryzen 7 8840HS",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA OLED",
      harga: 15999000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK 14 OLED UX3402ZA TOUCH",
      processor: "Intel Core i5 1240P",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 2.8K OLED 90Hz",
      harga: 15399000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK 14 OLED UX3405MA ULTRA 5",
      processor: "Intel Core i5 125H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 3K OLED",
      harga: 18499000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK 14 OLED UX3405MA ULTRA 7",
      processor: "Intel Core i7 155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 3K OLED 120Hz",
      harga: 21499000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK 14 OLED TOUCH UX3405MA ULTRA 7",
      processor: "Intel Core i7 155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 3K OLED 120Hz",
      harga: 23799000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK S13 OLED UX5304MA ULTRA 7",
      processor: "Intel Core i7 155U",
      ram: "32GB",
      rom: "1TB",
      layar: "13.3 3K OLED",
      harga: 26349000
    },
    {
      brand: "ASUS",
      type: "ZENBOOK DUO UX8406MA OLED TOUCH ULTRA 7",
      processor: "Intel Core i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 3K+FHD OLED 120Hz",
      harga: 34249000
    },
    {
      brand: "ASUS",
      type: "TUF A14 FA401UU",
      processor: "AMD Ryzen 7 8845HS",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 QHD 165Hz",
      harga: 23299000
    },
    {
      brand: "ASUS",
      type: "TUF A15 FA506NF",
      processor: "AMD Ryzen 5 7535HS",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 11449000
    },
    {
      brand: "ASUS",
      type: "TUF A15 FA506NC",
      processor: "AMD Ryzen 5 7535HS",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz IPS",
      harga: 12649000
    },
    {
      brand: "ASUS",
      type: "TUF A15 FA507NU",
      processor: "AMD Ryzen 5 7535HS",
      ram: "16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 16349000
    },
    {
      brand: "ASUS",
      type: "TUF A16 FA617NSR",
      processor: "AMD Ryzen 7 7435HS",
      ram: "16GB",
      rom: "512GB",
      layar: "16.0 FHD 165Hz",
      harga: 18699000
    },
    {
      brand: "ASUS",
      type: "TUF A15 FA507UV",
      processor: "AMD Ryzen 9 8945H",
      ram: "16GB",
      rom: "1TB",
      layar: "15.6 FHD 144Hz",
      harga: 24499000
    },
    {
      brand: "ASUS",
      type: "TUF A15 FA507UI",
      processor: "AMD Ryzen 9 8945H",
      ram: "16GB",
      rom: "1TB",
      layar: "15.6 FHD 144Hz",
      harga: 26599000
    },
    {
      brand: "ASUS",
      type: "TUF F15 FX506LH",
      processor: "Intel Core i5 10300H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12099000
    },
    {
      brand: "ASUS",
      type: "TUF F15 FX507ZC4",
      processor: "Intel Core i5 12500H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 13749000
    },
    {
      brand: "ASUS",
      type: "TUF F15 FX507ZC4",
      processor: "Intel Core i5 12500H",
      ram: "4GB/16GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 14199000
    },
    {
      brand: "ASUS",
      type: "TUF F15 FX506HF",
      processor: "Intel Core i7 11800H",
      ram: "4GB/8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12099000
    },
    {
      brand: "ASUS",
      type: "ROG STRIX G16 G614JU",
      processor: "Intel Core i7 13650HX",
      ram: "6GB/16GB",
      rom: "512GB",
      layar: "16.0 FHD 165Hz",
      harga: 24249000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G14 GA402NJ",
      processor: "AMD Ryzen 7 7735HS",
      ram: "6GB/16GB",
      rom: "512GB",
      layar: "14.0 QHD 120Hz",
      harga: 21999000
    },
    {
      brand: "ASUS",
      type: "ROG FLOW X13 GV302XU",
      processor: "AMD Ryzen 9 7940HS",
      ram: "6GB/16GB",
      rom: "1TB",
      layar: "13.4 QHD 165Hz",
      harga: 29899000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 GU603VV I9 13900H",
      processor: "Intel Core i9 13900H",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.0 QHD+ NEBULA 240Hz",
      harga: 32399000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 OLED GU605MU ULTRA 7 155H",
      processor: "AMD Ryzen 7 155H",
      ram: "6GB/16GB",
      rom: "1TB",
      layar: "16.0 NEBULA 2.5K 240Hz",
      harga: 33999000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 OLED GU605MI ULTRA 9 185H",
      processor: "AMD Ryzen 9 185H",
      ram: "8GB/32GB",
      rom: "1TB",
      layar: "16.0 NEBULA 2.5K 240Hz",
      harga: 44999000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS M16 GU604VI I9 13900H",
      processor: "Intel Core i9 13900H",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.0 QHD+ NEBULA 240Hz",
      harga: 39499000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS DUO 16 GX650PI RYZEN 9 7945HX",
      processor: "AMD Ryzen 9 7945HX",
      ram: "8GB/32GB",
      rom: "1TB",
      layar: "16.0 QHD+ NEBULA MINILED 240Hz",
      harga: 57999000
    },
    {
      brand: "Lenovo",
      type: "IDEAPAD SLIM 1 14 RYZEN 3 7320",
      processor: "AMD Ryzen 3 7320",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7049000
    },
    {
      brand: "Lenovo",
      type: "IDEAPAD SLIM 1 14 RYZEN 3 7320",
      processor: "AMD Ryzen 3 7320",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 7440000
    },
    {
      brand: "Lenovo",
      type: "IDEAPAD SLIM 1 14 N4020",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 5749000
    },
    {
      brand: "Lenovo",
      type: "IDEAPAD SLIM 1 14 N4020",
      processor: "Intel N4020",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 6099000
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 GU603VV",
      processor: "I9 13900H",
      ram: "8GB",
      rom: "1TB",
      layar: "16.0QHD+ NEBULA 240HZ",
      harga: "32.299"
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 OLED GU605MU",
      processor: "ULTRA 7 155H",
      ram: "6GB",
      rom: "1TB",
      layar: "16.0+ NEBULA 2.5K 240HZ",
      harga: "33.999"
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 OLED GU605MI",
      processor: "ULTRA 9 185H",
      ram: "8GB",
      rom: "1TB",
      layar: "16.0 NEBULA 2.5K 240HZ",
      harga: "44.999"
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 OLED GU605MV",
      processor: "ULTRA 9 185H",
      ram: "8GB",
      rom: "1TB",
      layar: "16.0+ NEBULA 2.5K 240HZ",
      harga: "37.299"
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS G16 OLED GU605MV",
      processor: "ULTRA 9 185H",
      ram: "8GB",
      rom: "1TB",
      layar: "16.0+ NEBULA 2.5K 240HZ",
      harga: "40.299"
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS M16 GU604VI",
      processor: "I9 13900H",
      ram: "8GB",
      rom: "1TB",
      layar: "16.0 NEBULA QHD+ 240HZ",
      harga: "39.499"
    },
    {
      brand: "ASUS",
      type: "ROG ZEPHYRUS DUO 16 GX650PI",
      processor: "RYZEN 9 7945HX",
      ram: "8GB",
      rom: "1TB",
      layar: "16.0QHD+ NEBULA MINILED 240HZ",
      harga: "57.999"
    },
  
    // LENOVO IDEAPAD SLIM
    {
      brand: "LENOVO",
      type: "IDEAPAD SLIM 1 14",
      processor: "RYZEN 3 7320",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0FHD",
      harga: "7.049"
    },
    {
      brand: "LENOVO",
      type: "IDEAPAD SLIM 1 14",
      processor: "RYZEN 3 7320",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD",
      harga: "7.440"
    },
    {
      brand: "LENOVO",
      type: "IDEAPAD SLIM 3 14",
      processor: "RYZEN 5 7530",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: "9.549"
    },
    {
      brand: "LENOVO",
      type: "IDEAPAD SLIM 3 14",
      processor: "RYZEN 7 7730",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: "10.799"
    },
    {
      brand: "LENOVO",
      type: "IDEAPAD SLIM 3 14",
      processor: "I5 12450H",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0FHD IPS",
      harga: "9.799"
    },
    {
      brand: "LENOVO",
      type: "IDEAPAD SLIM 3 14",
      processor: "I7 13620H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD IPS",
      harga: "12.649"
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 Light 14",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD 100% sRGB",
      harga: 12449000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 12699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED",
      processor: "AMD Ryzen 7 7730",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 12699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Pro 5 14 OLED",
      processor: "AMD Ryzen 7 8845HS",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 2.8K 120Hz",
      harga: 20799000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED",
      processor: "Intel i5 13420H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 12699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED",
      processor: "Intel i5 13420H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 12699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED",
      processor: "Intel i7 13620H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 14699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED",
      processor: "Intel i7 13620H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 14699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED Ultra 5 125H",
      processor: "Intel i5 125H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 13849000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED Ultra 5 125H",
      processor: "Intel i5 125H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 13849000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED Ultra 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 15349000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Slim 5 14 OLED Ultra 7 155H",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 15349000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Pro 5 14 OLED Ultra 7 155H",
      processor: "AMD Ryzen 7 8845HS",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 2.8K 120Hz",
      harga: 19699000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Duet 3 11 Touch",
      processor: "Intel N200",
      ram: "8GB",
      rom: "256GB",
      layar: "11.5 2K",
      harga: 10299000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Duet 5 12 Touch",
      processor: "Intel i5 1335",
      ram: "16GB",
      rom: "512GB",
      layar: "12.4 2.5K PEN",
      harga: 16949000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Duet 5 12 Touch",
      processor: "Intel i7 1355",
      ram: "16GB",
      rom: "512GB",
      layar: "12.4 2.5K PEN",
      harga: 18749000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Flex 5 14 Touch",
      processor: "AMD Ryzen 5 5500",
      ram: "8GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 11499000
    },
    {
      brand: "Lenovo",
      type: "Ideapad Flex 5 14 Touch",
      processor: "AMD Ryzen 7 5700",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 13299000
    },
    {
      brand: "Lenovo",
      type: "Ideapad 5 2-in-1 14",
      processor: "Intel i5 13420H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN",
      harga: 13749000
    },
    {
      brand: "Lenovo",
      type: "Ideapad 5 2-in-1 14",
      processor: "Intel Core i5 120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN",
      harga: 14199000
    },
    {
      brand: "Lenovo",
      type: "Ideapad 5 2-in-1 14 OLED",
      processor: "Intel Core i5 120U",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN",
      harga: 14649000
    },
    {
      brand: "Lenovo",
      type: "Yoga Slim 6 14 OLED",
      processor: "Intel i7 13700H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 15749000
    },
    {
      brand: "Lenovo",
      type: "Yoga Slim 7X 14 Touch OLED",
      processor: "Snapdragon X Elite",
      ram: "32GB",
      rom: "1TB",
      layar: "14.5 3K 90Hz",
      harga: 25699000
    },
    {
      brand: "Lenovo",
      type: "Yoga Pro 7 14 Touch",
      processor: "AMD Ryzen 7 8845HS",
      ram: "16GB",
      rom: "1TB",
      layar: "14.5 2.5K 90Hz 100% sRGB",
      harga: 20269000
    },
    {
      brand: "Lenovo",
      type: "Yoga Pro 7 14",
      processor: "Intel i5 13500H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.5 WQXGA 90Hz",
      harga: 15899000
    },
    {
      brand: "Lenovo",
      type: "Yoga Pro 7 14 OLED Ultra",
      processor: "Intel i7 155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.5 2.8K 120Hz",
      harga: 25769000
    },
    {
      brand: "Lenovo",
      type: "Yoga Pro 7 14 Touch Ultra",
      processor: "Intel i9 185H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.5 3K 120Hz 100% DCI-P3",
      harga: 30099000
    },
    // Lenovo Yoga Slim 7 14
    {
      brand: "Lenovo",
      type: "Yoga Slim 7 14 Touch OLED Ultra",
      processor: "Intel i5 125H",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA",
      harga: 16399000
    },
    {
      brand: "Lenovo",
      type: "Yoga Slim 7 14 Touch OLED Ultra",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 WUXGA",
      harga: 19299000
    },
    {
      brand: "Lenovo",
      type: "Yoga Slim 7 14 Touch OLED Ultra",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 WUXGA",
      harga: 23700000
    },
    // Lenovo Yoga 7 2-in-1 14
    {
      brand: "Lenovo",
      type: "Yoga 7 2-in-1 14 OLED",
      processor: "AMD Ryzen 5 8640HS",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 WUXGA PEN",
      harga: 16299000
    },
    {
      brand: "Lenovo",
      type: "Yoga 7 2-in-1 14 OLED",
      processor: "AMD Ryzen 7 8840HS",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 WUXGA PEN",
      harga: 18699000
    },
    // Lenovo Yoga Book 9
    {
      brand: "Lenovo",
      type: "Yoga Book 9 OLED Touch Ultra",
      processor: "Intel i7 155U",
      ram: "32GB",
      rom: "1TB",
      layar: "2x13.3 2.8K",
      harga: 34999000
    },
    // Lenovo Yoga 9 2-in-1 14
    {
      brand: "Lenovo",
      type: "Yoga 9 2-in-1 14 OLED Ultra",
      processor: "Intel i7 155H",
      ram: "16GB",
      rom: "1TB",
      layar: "14.0 4K PEN",
      harga: 27499000
    },
    {
      brand: "Lenovo",
      type: "Yoga 9 2-in-1 14 OLED Ultra",
      processor: "Intel i7 155H",
      ram: "32GB",
      rom: "1TB",
      layar: "14.0 4K PEN",
      harga: 28499000
    },
    // Lenovo Ideapad Gaming 3 15
    {
      brand: "Lenovo",
      type: "Ideapad Gaming 3 15",
      processor: "AMD Ryzen 5 5500H",
      ram: "8GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 11499000
    },
    // Lenovo LOQ 15
    {
      brand: "Lenovo",
      type: "LOQ 15",
      processor: "AMD Ryzen 7 7435HS",
      ram: "12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 18099000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15",
      processor: "Intel i5 12450HX",
      ram: "12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 12249000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15",
      processor: "Intel i5 13450HX",
      ram: "12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 15349000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15",
      processor: "Intel i5 13450HX",
      ram: "12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz",
      harga: 17049000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15 I5 13450HX RTX4050",
      processor: "Intel Core i5 13450HX",
      ram: "6GB/20GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz 100% sRGB",
      harga: 17549000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15 I7 13650HX RTX3050",
      processor: "Intel Core i7 13650HX",
      ram: "6GB/12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz 100% sRGB",
      harga: 17149000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15 I7 13650HX RTX4050",
      processor: "Intel Core i7 13650HX",
      ram: "6GB/12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz 100% sRGB",
      harga: 18749000
    },
    {
      brand: "Lenovo",
      type: "LOQ 15 I7 13650HX RTX4060",
      processor: "Intel Core i7 13650HX",
      ram: "8GB/12GB",
      rom: "512GB",
      layar: "15.6 FHD 144Hz 100% sRGB",
      harga: 21199000
    },
    {
      brand: "Lenovo",
      type: "LEGION SLIM 5 16 RYZEN 7 7840HS RTX4050",
      processor: "AMD Ryzen 7 7840HS",
      ram: "16GB",
      rom: "512GB",
      layar: "16.0 WQXGA 165Hz",
      harga: 21499000
    },
    {
      brand: "Lenovo",
      type: "LEGION PRO 5 16 I7 14650HX RTX4060",
      processor: "Intel Core i7 14650HX",
      ram: "8GB/16GB",
      rom: "1TB",
      layar: "16.0 WQXGA 240Hz",
      harga: 26499000
    },
    {
      brand: "Lenovo",
      type: "LEGION PRO 7 16 I9 14900HX RTX4090",
      processor: "Intel Core i9 14900HX",
      ram: "16GB/32GB",
      rom: "2TB",
      layar: "16.0 WQXGA 240Hz",
      harga: 61399000
    },
    {
      brand: "Lenovo",
      type: "V14 G4 RYZEN 3 7320",
      processor: "AMD Ryzen 3 7320",
      ram: "8GB",
      rom: "256GB",
      layar: "14.0 FHD",
      harga: 7299000
    },
    {
      brand: "Lenovo",
      type: "V14 G4 RYZEN 5 5500",
      processor: "AMD Ryzen 5 5500",
      ram: "16GB",
      rom: "512GB",
      layar: "14.0 FHD",
      harga: 8899000
    }
  ];


  // Fungsi untuk mengacak array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


// Fungsi untuk menampilkan data laptop
function displayLaptops(filteredLaptops = laptops) 
{
  const laptopList = document.getElementById('laptopList');
  laptopList.innerHTML = ''

  // Mengacak data sebelum ditampilkan
  const shuffledLaptops = shuffleArray(filteredLaptops);

  shuffledLaptops.forEach((laptop) => {
    const laptopItem = document.createElement('div');
    laptopItem.classList.add('border-2', 'bg-gray-100', 'p-10', 'rounded-lg', 'shadow-lg');
    
    laptopItem.innerHTML = `
      <h3 class="text-lg font-bold text-gray-700 py-4 border-sky-500 border-2 rounded-xl px-2">${laptop.brand} ${laptop.type}</h3>
      <p class="text-md text-gray-500 pt-2">Processor: ${laptop.processor}</p>
      <p class="text-md text-gray-500">RAM: ${laptop.ram}</p>
      <p class="text-md text-gray-500">ROM: ${laptop.rom}</p>
      <p class="text-md text-gray-500">Layar: ${laptop.layar}</p>
      <p class="text-lg font-semibold text-gray-900">Harga: Rp ${laptop.harga.toLocaleString('id-ID')}</p>
      <a class="inline-block rounded-md bg-sky-600 mt-4 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-sky-500" target="_blank" href="https://wa.me/62895325199505?text=Hey Cmiw Store saya mau beli laptop ${laptop.brand} ${laptop.type}">Beli</a>
    `;
    
    laptopList.appendChild(laptopItem);
  })
  if (filteredLaptops.length === 0) {
    laptopList.innerHTML = '<p class="text-center text-red-500">Tidak ada laptop yang cocok dengan pencarian Anda. Silahkan cari berdasarkan Brand, Type, atau Processor.</p>';
  }
}


// Fungsi untuk mencari laptop berdasarkan input pencarian
function searchLaptops(query) 
{
  const searchText = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchTerms = searchText.split(' '); // Pecah input menjadi kata-kata terpisah

  const filteredLaptops = laptops.filter(laptop => {
    // Gabungkan semua informasi yang bisa dicari ke dalam satu string
    const laptopInfo = `${laptop.brand.toLowerCase()} ${laptop.type.toLowerCase()} ${laptop.processor.toLowerCase()}`;

    // Cek apakah setiap kata dalam searchTerms ada di laptopInfo
    return searchTerms.every(term => laptopInfo.includes(term));

  })
  displayLaptops(filteredLaptops)
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
  searchLaptops(query);
})
// Panggil fungsi untuk menampilkan semua laptop saat halaman dimuat
displayLaptops();
