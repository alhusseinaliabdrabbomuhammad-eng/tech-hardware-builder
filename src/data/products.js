// كل بيانات القطع في الملف ده
// لو عايز تضيف قطعة جديدة انسخ أي قطعة وغيّر بياناتها
// الأسعار والمواصفات تقريبية وبيانات تجريبية للعرض بس

// الفئات اللي بتظهر في الفلتر وأول واحدة معناها كل القطع
export const categories = [
  "All",
  "Microcontrollers",
  "Sensors",
  "Logic ICs",
  "Prototyping",
  "Laptops",
];

// لون كل فئة، بنستخدمه في شكل الكارت
export const categoryColors = {
  Microcontrollers: "#2ec4b6",
  Sensors: "#f4a261",
  "Logic ICs": "#e76f51",
  Prototyping: "#e9c46a",
  Laptops: "#4ea8de",
};

export const products = [
  {
    id: "arduino-uno-r3",
    name: "Arduino Uno R3",
    category: "Microcontrollers",
    price: 27.6,
    chip: "ATmega328P",
    description: "The classic board for learning embedded programming.",
    specs: {
      CPU: "ATmega328P (8-bit AVR)",
      "Clock speed": "16 MHz",
      Flash: "32 KB",
      RAM: "2 KB SRAM",
      "Logic level": "5 V",
      Wireless: "None",
      GPIO: "14 digital (6 PWM) + 6 analog",
    },
  },
  {
    id: "arduino-nano",
    name: "Arduino Nano",
    category: "Microcontrollers",
    price: 24.9,
    chip: "ATmega328P",
    description: "Same brain as the Uno in a tiny, breadboard-friendly size.",
    specs: {
      CPU: "ATmega328P (8-bit AVR)",
      "Clock speed": "16 MHz",
      Flash: "32 KB",
      RAM: "2 KB SRAM",
      "Logic level": "5 V",
      Wireless: "None",
      GPIO: "14 digital (6 PWM) + 8 analog",
    },
  },
  {
    id: "esp32-devkit",
    name: "ESP32 DevKit V1",
    category: "Microcontrollers",
    price: 9.5,
    chip: "ESP32",
    description:
      "Wi-Fi and Bluetooth on one cheap board, great for IoT projects.",
    specs: {
      CPU: "Xtensa LX6 dual-core (32-bit)",
      "Clock speed": "Up to 240 MHz",
      Flash: "4 MB (typical)",
      RAM: "520 KB SRAM",
      "Logic level": "3.3 V",
      Wireless: "Wi-Fi + Bluetooth (Classic & BLE)",
      GPIO: "25+ usable",
    },
  },
  {
    id: "nodemcu-esp8266",
    name: "NodeMCU ESP8266",
    category: "Microcontrollers",
    price: 5.5,
    chip: "ESP8266",
    description: "The board that made cheap Wi-Fi projects popular.",
    specs: {
      CPU: "Tensilica L106 (32-bit)",
      "Clock speed": "80 MHz (up to 160 MHz)",
      Flash: "4 MB",
      RAM: "~80 KB",
      "Logic level": "3.3 V",
      Wireless: "Wi-Fi only",
      GPIO: "~11 usable + 1 analog",
    },
  },
  {
    id: "raspberry-pi-pico",
    name: "Raspberry Pi Pico",
    category: "Microcontrollers",
    price: 4,
    chip: "RP2040",
    description: "Fast and cheap, programmable in C or MicroPython.",
    specs: {
      CPU: "RP2040 dual-core Arm Cortex-M0+",
      "Clock speed": "Up to 133 MHz",
      Flash: "2 MB",
      RAM: "264 KB SRAM",
      "Logic level": "3.3 V",
      Wireless: "None",
      GPIO: "26 (3 analog)",
    },
  },
  {
    id: "stm32-blue-pill",
    name: "STM32 Blue Pill",
    category: "Microcontrollers",
    price: 5,
    chip: "STM32F103",
    description: "A step up toward professional ARM microcontroller work.",
    specs: {
      CPU: "STM32F103C8T6 Arm Cortex-M3",
      "Clock speed": "72 MHz",
      Flash: "64 KB (often 128 KB)",
      RAM: "20 KB SRAM",
      "Logic level": "3.3 V",
      Wireless: "None",
      GPIO: "Up to 37",
    },
  },

  // الحساسات
  {
    id: "dht22",
    name: "DHT22 Temperature & Humidity",
    category: "Sensors",
    price: 6.5,
    chip: "DHT22",
    description:
      "Digital temperature and humidity sensor, one reading every 2 seconds.",
    specs: {
      Measures: "Temperature + humidity",
      Interface: "Single-wire digital",
      "Supply voltage": "3.3 to 5 V",
      Range: "-40 to 80 °C, 0 to 100 % RH",
      "Best for": "Weather stations, greenhouses",
    },
  },
  {
    id: "hc-sr04",
    name: "HC-SR04 Ultrasonic Sensor",
    category: "Sensors",
    price: 2.5,
    chip: "HC-SR04",
    description:
      "Measures distance with sound, perfect for obstacle-avoiding robots.",
    specs: {
      Measures: "Distance (ultrasonic)",
      Interface: "Trigger + Echo pins",
      "Supply voltage": "5 V",
      Range: "2 to 400 cm",
      "Best for": "Robots, parking sensors, level measuring",
    },
  },
  {
    id: "mpu-6050",
    name: "MPU-6050 Accelerometer & Gyro",
    category: "Sensors",
    price: 3.8,
    chip: "MPU-6050",
    description: "Accelerometer and gyroscope in one tiny module.",
    specs: {
      Measures: "Acceleration + rotation (6-axis)",
      Interface: "I2C",
      "Supply voltage": "3.3 to 5 V (on module)",
      Range: "±2 to ±16 g, ±250 to ±2000 °/s",
      "Best for": "Self-balancing robots, drones, motion tracking",
    },
  },
  {
    id: "bmp280",
    name: "BMP280 Pressure Sensor",
    category: "Sensors",
    price: 2.9,
    chip: "BMP280",
    description: "Barometric pressure sensor that also reads temperature.",
    specs: {
      Measures: "Pressure + temperature",
      Interface: "I2C / SPI",
      "Supply voltage": "3.3 V (most modules)",
      Range: "300 to 1100 hPa, -40 to 85 °C",
      "Best for": "Weather stations, altitude estimation",
    },
  },
  {
    id: "hc-sr501",
    name: "HC-SR501 PIR Motion Sensor",
    category: "Sensors",
    price: 2.2,
    chip: "HC-SR501",
    description: "Passive infrared sensor that detects moving people.",
    specs: {
      Measures: "Motion (infrared)",
      Interface: "Digital output",
      "Supply voltage": "5 to 20 V",
      Range: "About 3 to 7 m",
      "Best for": "Alarms, automatic lights",
    },
  },
  {
    id: "mq-2",
    name: "MQ-2 Gas & Smoke Sensor",
    category: "Sensors",
    price: 3.4,
    chip: "MQ-2",
    description: "Detects smoke and flammable gases like LPG and methane.",
    specs: {
      Measures: "Smoke + flammable gas",
      Interface: "Analog + digital",
      "Supply voltage": "5 V",
      Range: "300 to 10000 ppm",
      "Best for": "Gas leak alarms (needs warm-up time)",
    },
  },

  // الدوائر المنطقية
  {
    id: "74hc00",
    name: "74HC00 Quad NAND Gate",
    category: "Logic ICs",
    price: 0.6,
    chip: "74HC00",
    description: "Four NAND gates. A NAND gate can build any other logic gate.",
    specs: {
      Function: "Quad 2-input NAND gate",
      Family: "74HC (CMOS)",
      "Supply voltage": "2 to 6 V",
      Package: "DIP-14",
      "Best for": "Learning digital logic",
    },
  },
  {
    id: "74hc04",
    name: "74HC04 Hex Inverter",
    category: "Logic ICs",
    price: 0.55,
    chip: "74HC04",
    description: "Six inverters (NOT gates) in one chip.",
    specs: {
      Function: "Hex inverter (NOT gate)",
      Family: "74HC (CMOS)",
      "Supply voltage": "2 to 6 V",
      Package: "DIP-14",
      "Best for": "Inverting signals, simple oscillators",
    },
  },
  {
    id: "74hc74",
    name: "74HC74 Dual D Flip-Flop",
    category: "Logic ICs",
    price: 0.7,
    chip: "74HC74",
    description: "Two D flip-flops, the building block of memory.",
    specs: {
      Function: "Dual D-type flip-flop",
      Family: "74HC (CMOS)",
      "Supply voltage": "2 to 6 V",
      Package: "DIP-14",
      "Best for": "Storing a bit, dividing frequency by 2",
    },
  },
  {
    id: "74hc138",
    name: "74HC138 3-to-8 Decoder",
    category: "Logic ICs",
    price: 0.8,
    chip: "74HC138",
    description: "Picks one of 8 outputs using 3 input lines.",
    specs: {
      Function: "3-to-8 line decoder",
      Family: "74HC (CMOS)",
      "Supply voltage": "2 to 6 V",
      Package: "DIP-16",
      "Best for": "Address decoding, selecting devices",
    },
  },
  {
    id: "74hc595",
    name: "74HC595 Shift Register",
    category: "Logic ICs",
    price: 0.9,
    chip: "74HC595",
    description: "Turns 3 microcontroller pins into 8 output pins.",
    specs: {
      Function: "8-bit shift register with latch",
      Family: "74HC (CMOS)",
      "Supply voltage": "2 to 6 V",
      Package: "DIP-16",
      "Best for": "More LED outputs, 7-segment displays",
    },
  },
  {
    id: "cd4017",
    name: "CD4017 Decade Counter",
    category: "Logic ICs",
    price: 0.85,
    chip: "CD4017",
    description: "Counts clock pulses and turns on one of 10 outputs.",
    specs: {
      Function: "Decade counter, 10 outputs",
      Family: "CD4000 (CMOS)",
      "Supply voltage": "3 to 18 V",
      Package: "DIP-16",
      "Best for": "LED chasers, sequencers",
    },
  },

  // قطع التجارب والتوصيل
  {
    id: "breadboard-830",
    name: "Breadboard 830 Points",
    category: "Prototyping",
    price: 5.5,
    chip: "830 pts",
    description:
      "Full-size solderless breadboard for building circuits without soldering.",
    specs: {
      Type: "Solderless breadboard",
      Contents: "830 tie points + power rails",
      "Best for": "Full projects with several ICs",
    },
  },
  {
    id: "breadboard-400",
    name: "Mini Breadboard 400 Points",
    category: "Prototyping",
    price: 3,
    chip: "400 pts",
    description: "Half-size breadboard that fits on small robots.",
    specs: {
      Type: "Solderless breadboard",
      Contents: "400 tie points",
      "Best for": "Small circuits and quick tests",
    },
  },
  {
    id: "jumper-wires-120",
    name: "Jumper Wires Kit",
    category: "Prototyping",
    price: 5,
    chip: "120 pcs",
    description:
      "Colored Dupont wires to connect boards, modules and breadboards.",
    specs: {
      Type: "Dupont jumper wires",
      Contents: "120 wires (M-M, M-F, F-F)",
      "Best for": "Connecting boards and modules",
    },
  },
  {
    id: "resistor-kit-600",
    name: "Resistor Kit",
    category: "Prototyping",
    price: 9,
    chip: "600 pcs",
    description:
      "A box with the common resistor values you will need all the time.",
    specs: {
      Type: "Through-hole resistors",
      Contents: "600 pcs, 1/4 W, 30 values",
      "Best for": "LED limiting, pull-ups, voltage dividers",
    },
  },
  {
    id: "led-kit-200",
    name: "LED Kit",
    category: "Prototyping",
    price: 6.5,
    chip: "200 pcs",
    description: "Assorted 5 mm LEDs for indicators and first circuits.",
    specs: {
      Type: "5 mm LEDs",
      Contents: "200 pcs in 5 colors",
      "Best for": "Indicators and first circuits",
    },
  },
  {
    id: "mb102-power",
    name: "MB102 Breadboard Power Module",
    category: "Prototyping",
    price: 2.5,
    chip: "MB102",
    description: "Plugs onto a breadboard and gives clean 3.3 V and 5 V rails.",
    specs: {
      Type: "Breadboard power module",
      Contents: "3.3 V / 5 V output, USB or 6.5-12 V input",
      "Best for": "Powering breadboard circuits",
    },
  },
  {
    id: "multimeter-basic",
    name: "Digital Multimeter (basic)",
    category: "Prototyping",
    price: 12,
    chip: "DMM",
    description:
      "Basic multimeter for checking voltage, current and resistance.",
    specs: {
      Type: "Digital multimeter",
      Contents: "Voltage, current, resistance, diode test",
      "Best for": "Debugging circuits",
    },
  },

  // اللابتوبات
  {
    id: "laptop-student-15",
    name: 'Student Laptop 15.6"',
    category: "Laptops",
    price: 399,
    chip: "Core i3",
    description:
      "Simple and affordable, enough for coding basics, web and documents.",
    specs: {
      CPU: "Intel Core i3",
      RAM: "8 GB DDR4",
      Storage: "256 GB SSD",
      Display: '15.6" Full HD IPS',
      GPU: "Integrated",
      Weight: "1.7 kg",
      Battery: "About 7 hours",
    },
  },
  {
    id: "laptop-coding-15",
    name: 'Everyday Coding Laptop 15.6"',
    category: "Laptops",
    price: 579,
    chip: "Ryzen 5",
    description:
      "Enough RAM to run an IDE, a browser and a simulator together.",
    specs: {
      CPU: "AMD Ryzen 5",
      RAM: "16 GB DDR4",
      Storage: "512 GB NVMe SSD",
      Display: '15.6" Full HD IPS',
      GPU: "Integrated Radeon",
      Weight: "1.7 kg",
      Battery: "About 9 hours",
    },
  },
  {
    id: "laptop-ultrabook-14",
    name: 'Light Ultrabook 14"',
    category: "Laptops",
    price: 849,
    chip: "Core i5",
    description: "Light and long-lasting, easy to carry to lectures every day.",
    specs: {
      CPU: "Intel Core i5",
      RAM: "16 GB LPDDR5",
      Storage: "512 GB NVMe SSD",
      Display: '14" 2K IPS',
      GPU: "Integrated Iris Xe",
      Weight: "1.3 kg",
      Battery: "About 12 hours",
    },
  },
  {
    id: "laptop-dev-14-oled",
    name: 'Developer Laptop 14" OLED',
    category: "Laptops",
    price: 1199,
    chip: "Ryzen 7",
    description:
      "Plenty of memory for virtual machines and Docker, with a sharp OLED screen.",
    specs: {
      CPU: "AMD Ryzen 7",
      RAM: "32 GB LPDDR5",
      Storage: "1 TB NVMe SSD",
      Display: '14" 2.8K OLED',
      GPU: "Integrated Radeon",
      Weight: "1.4 kg",
      Battery: "About 11 hours",
    },
  },
  {
    id: "laptop-gaming-16",
    name: 'Gaming / CAD Laptop 16"',
    category: "Laptops",
    price: 1299,
    chip: "Core i7",
    description:
      "Dedicated GPU for CAD, 3D simulation and machine learning basics.",
    specs: {
      CPU: "Intel Core i7",
      RAM: "16 GB DDR5",
      Storage: "1 TB NVMe SSD",
      Display: '16" QHD 165 Hz',
      GPU: "NVIDIA RTX 4060 (8 GB)",
      Weight: "2.3 kg",
      Battery: "About 6 hours",
    },
  },
  {
    id: "laptop-workstation-16",
    name: 'Engineering Workstation 16"',
    category: "Laptops",
    price: 1899,
    chip: "Core i9",
    description:
      "Top performance for heavy simulation, PCB design and rendering.",
    specs: {
      CPU: "Intel Core i9",
      RAM: "32 GB DDR5",
      Storage: "2 TB NVMe SSD",
      Display: '16" QHD+ 165 Hz',
      GPU: "NVIDIA RTX 4070 (8 GB)",
      Weight: "2.4 kg",
      Battery: "About 6 hours",
    },
  },
];

export function loadCustomProducts() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("tech-hardware-builder:custom-products")
    );
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function saveCustomProducts(products) {
  try {
    localStorage.setItem(
      "tech-hardware-builder:custom-products",
      JSON.stringify(products)
    );
  } catch {
    // لو التخزين مش متاح
  }
}

export function getCombinedProducts() {
  const customProducts = loadCustomProducts();
  return customProducts.length === 0 ? products : [...products, ...customProducts];
}