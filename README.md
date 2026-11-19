# Tech & Hardware Builder

A small tool for picking electronic parts and laptops, comparing their specs, and putting together a shopping list for your next project.

**Live demo:** https://alhusseinaliabdrabbomuhammad-eng.github.io/tech-hardware-builder/
## What it does

- Browse 31 sample parts: microcontrollers, sensors, logic ICs, prototyping gear and laptops
- Filter by category, search by name, and set a minimum and maximum price
- Build a project kit: add parts, change quantities, remove them, and see the total update
- Compare two parts from the same category side by side in a table
- Your kit is saved in the browser, so it is still there after a refresh
- Export the kit as plain text or JSON

## Run it on your computer

You need Node.js 20.19 or newer (or 22.12 or newer).

```
npm install
npm run dev
```

Then open the address that Vite prints in the terminal (usually http://localhost:5173).

To make a production build:

```
npm run build
```

## Project structure

```
src/
  components/   the UI pieces (cards, filters, cart, compare, export)
  data/         the list of parts
  utils/        small helpers (price format, saving, export)
  App.jsx       the main component that holds the state
```

## Note about the data

The parts and prices are sample data for demonstration. Prices and specs are approximate, so check the datasheet or the store before buying.

Made by ENG ~ Al-Hussein ali
