# Tech & Hardware Builder

A web application for picking electronic parts and laptops, comparing their specifications, and building a project kit that persists in the browser.

**Live Demo:** https://alhusseinaliabdrabbomuhammad-eng.github.io/tech-hardware-builder/

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [Browse & Discover](#browse--discover)
  - [Build Your Kit](#build-your-kit)
  - [Compare Parts](#compare-parts)
  - [Add Custom Products](#add-custom-products)
  - [Export Your Kit](#export-your-kit)
- [Try It Live](#try-it-live)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [How the Add Product Feature Works](#how-the-add-product-feature-works)
- [Notes](#notes)

---

## Overview

**Tech & Hardware Builder** is a responsive React application that enables electronics enthusiasts, students, and hobbyists to explore electronic components and laptops, filter them by category and price, compare up to two parts side-by-side, and build a project kit that persists in the browser using `localStorage`.

The project was built with **React 19**, **Vite**, and CSS custom properties, featuring a mobile-first responsive layout that works seamlessly from desktop to mobile devices.

---

## Features

### Browse & Discover

- **31+ sample parts** across 6 main categories:
  - **Microcontrollers** – Arduino Uno R3, Nano, ESP32 DevKit, NodeMCU, Raspberry Pi Pico, STM32 Blue Pill
  - **Sensors** – DHT22 (temp/humidity), HC-SR04 (ultrasonic), MPU-6050 (accel/gyro), BMP280 (pressure), HC-SR501 (PIR motion), MQ-2 (gas/smoke)
  - **Logic ICs** – 74HC00 (NAND), 74HC04 (inverter), 74HC74 (D flip-flop), 74HC138 (decoder), 74HC595 (shift register), CD4017 (decade counter)
  - **Prototyping** – Breadboard 830 points, Mini breadboard 400 points, Jumper wires kit, Resistor kit (600 pcs), LED kit (200 pcs), MB102 power module, Digital multimeter
  - **Laptops** – Student 15.6", Everyday Coding 15.6", Light Ultrabook 14", Developer 14" OLED, Gaming/CAD 16", Engineering Workstation 16"
- **Category-based filtering** with dynamic category support – new categories added by users appear automatically in the filter dropdown
- **Search by name or chip** – type "ESP32" or "74HC595" to find parts quickly
- **Price range filtering** – set minimum and maximum price to narrow results

### Build Your Kit

- **Add parts to your kit** with one click from any product card
- **Adjust quantities** – increase or decrease, remove individual items, or clear the entire kit
- **Kit persists in `localStorage`** – your selection survives page refreshes and browser sessions
- **Visual summary** in the header showing item count and total price (updates instantly)

### Compare Parts

- **Select up to two parts** from the same category for comparison
- **Comparison modal** displays specifications in a side-by-side table for easy analysis
- **Category validation** prevents comparing parts from different categories
- **Clear comparison** anytime to start fresh with new selections

### Add Custom Products (New Feature)

- **"+ Add product" button** in the filters bar opens a modal form
- **Add any product** not in the default list – including name, category, price, chip/model, description, and optional specifications
- **Unique ID generation** – auto-generated (timestamp-based) or manual entry (minimum 5 characters)
- **Specifications system** – add custom key/value pairs (e.g., RAM: 16 GB, CPU: Ryzen 5)
  - Click "+ Add spec" to add more specification rows
  - Remove individual specifications with the × button
  - Automatically converted to a `specs` object when saved
- **Products saved to `localStorage`** – appear alongside default parts in filters, search, and kit
- **Dynamic categories** – new categories from custom products are automatically added to the filter dropdown
- **Full compatibility** – added products work with filters, price ranges, search, add-to-kit, and comparison exactly like default parts

### Export Your Kit

- **Export as plain text** – copy-paste friendly format suitable for notes or sharing
- **Export as JSON** – machine-readable data for backup, sharing, or integration with other tools
- **Download button** located in the sidebar panel (next to the cart)
- **Exports only the current kit contents** – not including comparison selections

---

## Try It Live

[https://alhusseinaliabdrabbomuhammad-eng.github.io/tech-hardware-builder/](https://alhusseinaliabdrabbomuhammad-eng.github.io/tech-hardware-builder/)

Open the link in your browser to experience the full application immediately – no installation required.

---

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) version 20.19 or newer (or 22.12 or newer)

### Installation & Development

```bash
npm install
npm run dev
```

The development server will start (usually at `http://localhost:5173`). Open that address in your browser to run the app in development mode with hot module reloading.

### Production Build

```bash
npm run build
```

The built files will be generated in the `dist/` directory. Serve the `dist/` folder using any static file server (e.g., `npx serve dist`, `http-server dist`, or deploy to GitHub Pages).

---

## Project Structure

```
tech-hardware-builder/
├── node_modules/       dependencies
├── index.html          HTML entry point
├── package.json        project metadata and scripts
├── vite.config.js      Vite configuration
├── src/
│   ├── main.jsx        React root renderer
│   ├── App.jsx         Main component – holds all state and wires everything together
│   ├── data/
│   │   ├── products.js     Products list, categories, colors, and storage helpers
│   │   └── ... 
│   ├── components/
│   │   ├── ProductCard.jsx          Individual product card with add-to-kit and compare buttons
│   │   ├── Filters.jsx              Filter panel with categories, search, price range, and Add Product button
│   │   ├── Cart.jsx                 Shopping cart with quantity controls and export buttons
│   │   ├── Compare.jsx              Comparison table component
│   │   ├── CompareModal.jsx         Modal for side-by-side comparison
│   │   ├── CompareBar.jsx           Bar showing selected parts for comparison
│   │   ├── ExportButtons.jsx        Buttons to export kit as text or JSON
│   │   ├── Filters.css              Styling for the filters panel
│   │   ├── ProductCard.css          Styling for product cards
│   │   ├── AddProductModal.jsx      Modal form for adding custom products (new)
│   │   ├── AddProductModal.css      Styling for the add product modal (new)
│   │   ├── Cart.css                 Styling for the cart panel
│   │   ├── ExportButtons.css        Styling for export buttons
│   │   ├── Compare.css              Styling for comparison table
│   │   └── CompareModal.css         Styling for comparison modal
│   └── utils/
│       ├── storage.js     localStorage helpers (load/save kit and custom products)
│       ├── format.js      Price formatting utility
│       └── exportKit.js   Export format helpers
├── dist/               Production build output (generated by `npm run build`)
├── .gitignore          Git ignore rules
└── README.md           This file
```

---

## Technologies

- **React 19.3.1** – UI library with functional components, hooks, and modern patterns
- **Vite 8.3.8** – Dev server and production build tool with fast HMR (Hot Module Replacement)
- **CSS Custom Properties** – theming via `:root` variables (`--panel`, `--border`, `--accent`, `--green`, `--muted`, `--text`, `--red`) for consistent theming and dark-mode friendliness
- **localStorage** – client-side persistent storage for kits and custom products (no backend required)
- **GitHub Pages** – deployment target for the live demo URL
- **ES modules** (`"type": "module"` in `package.json`) for modern import/export syntax

---

## How the Add Product Feature Works

1. **Access the feature** – Click the **"+ Add product"** button in the filters bar (appears above the category chips)
2. **Modal form appears** with the following fields:
   - **ID** – unique identifier (auto-generated or manual entry, minimum 5 characters)
   - **Product name** – required field for the product name
   - **Category** – select from the existing list or type a new category name (new categories automatically added to the filter dropdown)
   - **Price** – in USD (required, must be greater than 0)
   - **Chip / Model** – optional field (e.g., "ESP32", "ATmega328P"); defaults to "Custom" if left empty
   - **Description** – optional free‑text field for a brief product description
   - **Specifications** – dynamic section for adding custom key/value pairs:
     - Click **"+ Add spec"** to add a new specification row
     - Enter a **name** (e.g., "RAM") and **value** (e.g., "16 GB")
     - Remove individual rows with the × button (appears when more than one spec exists)
     - Automatically converted to a `specs` object when the form is submitted
3. **Submit** – Click **"Add product"** in the modal
4. **Immediate appearance** – The product is:
   - Saved to `localStorage` under the key `tech-hardware-builder:custom-products`
   - Added to the product grid alongside default parts
   - Included in the dynamic categories list (appears in the filter dropdown)
   - Searchable by name and chip
   - Available for add-to-kit, comparison, and export just like default parts

---

## Notes

- All parts and prices are **sample data** for demonstration purposes. Prices and specs are approximate – always check the datasheet or store before purchasing.
- The kit and custom products are stored per‑browser in `localStorage`. Clearing browser data or using a different browser will reset the kit and custom products.
- Comparison is limited to **two parts from the same category** – the app prevents selecting parts from different categories.
- The export functionality produces plain text or JSON containing only the current kit contents.
- New categories added via the "Add product" feature are persistent across sessions (stored in `localStorage`) but will not persist if the user clears browser data or switches to a different device/browser.

---

Made with ❤️ by ENG ~ Al-Hussein ali