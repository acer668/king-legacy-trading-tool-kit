// Edit values here whenever you want to update the calculator.
// Material entries like "2 for 1 fin" are converted into a per-item value.
const ITEMS = [
  // Fruits
  { name: "Demon Fruit", category: "Fruits", value: 7 },
  { name: "Tree Fruit", category: "Fruits", value: 7 },
  { name: "Dragon Fruit", category: "Fruits", value: 6 },
  { name: "Phoenix Fruit", category: "Fruits", value: 5 },
  { name: "Gate Fruit", category: "Fruits", value: 5 },
  { name: "Dough Fruit", category: "Fruits", value: 5 },
  { name: "Pter Fruit", category: "Fruits", value: 3 },
  { name: "Melody Fruit", category: "Fruits", value: 2 },
  { name: "Toy Fruit", category: "Fruits", value: 1 },
  { name: "Rumble Fruit", category: "Fruits", value: 1 },
  { name: "Gas Fruit", category: "Fruits", value: 1 },
  { name: "Magma Fruit", category: "Fruits", value: 1 },
  { name: "Light Fruit", category: "Fruits", value: 1 },
  { name: "Quake Fruit", category: "Fruits", value: 1 },
  { name: "Flame Fruit", category: "Fruits", value: 1 },
  { name: "Snow Fruit", category: "Fruits", value: 1 },
  { name: "Ice Fruit", category: "Fruits", value: 1 },
  { name: "Control Fruit", category: "Fruits", value: 0.75 },
  { name: "Buddha Fruit", category: "Fruits", value: 0.75 },
  { name: "Gravity Fruit", category: "Fruits", value: 0.75 },
  { name: "Dark Fruit", category: "Fruits", value: 0.75 },

  // Swords
  { name: "Noirceur", category: "Swords", value: 2900 },
  { name: "Cerulean Blossom", category: "Swords", value: 800 },
  { name: "Ancient Sword", category: "Swords", value: 130 },
  { name: "Abyssal Crab Axe", category: "Swords", value: 20 },
  { name: "Ethereal", category: "Swords", value: 4.5 },
  { name: "Phoenix Blade", category: "Swords", value: 4.5 },
  { name: "Acroscythe", category: "Swords", value: 4 },
  { name: "Scepter of Flames", category: "Swords", value: 3.5 },
  { name: "Authentic Triple Katana", category: "Swords", value: 3.5 },
  { name: "Avalon", category: "Swords", value: 1 },
  { name: "Longaevus", category: "Swords", value: 1 },
  { name: "Daybreak Cleaver", category: "Swords", value: 1 },
  { name: "Aquatic Anchor", category: "Swords", value: 1 },

  // Accessories
  { name: "Dragon Band", category: "Accessories", value: 350 },
  { name: "EXP Crown", category: "Accessories", value: 100 },
  { name: "Crustacean Armor", category: "Accessories", value: 80 },
  { name: "Water Kimono", category: "Accessories", value: 42.5 },
  { name: "Night Necklace", category: "Accessories", value: 19 },
  { name: "Drakenfyr Cape", category: "Accessories", value: 13 },
  { name: "Oceanic tanto", category: "Accessories", value: 12 },
  { name: "Dominion Cloak", category: "Accessories", value: 10 },
  { name: "Inferno Cloak", category: "Accessories", value: 4 },
  { name: "Floffy Glasses", category: "Accessories", value: 4 },
  { name: "Glacies Shoulder", category: "Accessories", value: 4 },
  { name: "Nativitatis", category: "Accessories", value: 4 },
  { name: "Green Dryadalis", category: "Accessories", value: 4 },
  { name: "Cervus", category: "Accessories", value: 4 },
  { name: "Dark Beard Hat", category: "Accessories", value: 3.5 },
  { name: "Abyss Sentinel Armor", category: "Accessories", value: 2 },
  { name: "Metal Fin", category: "Accessories", value: 1.5 },
  { name: "Oceanic Tentacle", category: "Accessories", value: 1 },
  { name: "Tomoe Taiko", category: "Accessories", value: 1 },
  { name: "Lucidus Coat", category: "Accessories", value: 1 },
  { name: "Sally Crown", category: "Accessories", value: 1 },
  { name: "Dragon Necklace", category: "Accessories", value: 1 },
  { name: "Tengu Mask", category: "Accessories", value: 1 },
  { name: "Oni Mask", category: "Accessories", value: 1 },
  { name: "Shadow Cloak", category: "Accessories", value: 1 },
  { name: "Sentinel Armor", category: "Accessories", value: 1 },
  { name: "Flame Hair", category: "Accessories", value: 1 },
  { name: "Crimson Scarf", category: "Accessories", value: 1 },

  // Materials
  { name: "Dragon Fang", category: "Materials", value: 20, note: "1 for 20 fins" },
  { name: "Kraken's Ink", category: "Materials", value: 6.5, note: "1 for 6.5 fins" },
  { name: "Phoenix's Tear", category: "Materials", value: 5, note: "1 for 5 fins" },
  { name: "Crab Meat", category: "Materials", value: 4, note: "1 for 4 fins" },
  { name: "Hydra's Tail", category: "Materials", value: 3, note: "1 for 3 fins" },
  { name: "Severed Kraken", category: "Materials", value: 3, note: "1 for 3 fins" },
  { name: "Sea King's Fin", category: "Materials", value: 1, note: "1 for 1 fin" },
  { name: "Serpent Fin", category: "Materials", value: 0.5, note: "2 for 1 fin" },
  { name: "Sea's Wraith", category: "Materials", value: 0.4, note: "2.5 for 1 fin" },
  { name: "Aqua Gem", category: "Materials", value: 1 / 3.5, note: "3.5 for 1 fin" },
  { name: "Lost Ruby", category: "Materials", value: 0.25, note: "4 for 1 fin" },
  { name: "Essence of Fire", category: "Materials", value: 0.25, note: "4 for 1 fin" },
  { name: "Dragon Scale", category: "Materials", value: 0.2, note: "5 for 1 fin" },
  { name: "Twilight's Orb", category: "Materials", value: 0.2, note: "5 for 1 fin" },
  { name: "Samurai's Bandage", category: "Materials", value: 1 / 7.5, note: "7.5 for 1 fin" },
  { name: "Sea King's Blood", category: "Materials", value: 0.1, note: "10 for 1 fin" },
  { name: "Dragon Orb", category: "Materials", value: 0.1, note: "10 for 1 fin" },
  { name: "Shark's Canine", category: "Materials", value: 1 / 12.5, note: "12.5 for 1 fin" },
  { name: "Pearl", category: "Materials", value: 1 / 15, note: "15 for 1 fin" },
  { name: "Vampire's Vital Fluid", category: "Materials", value: 1 / 22.5, note: "22.5 for 1 fin" },
  { name: "Lucidus's Totem", category: "Materials", value: 0.04, note: "25 for 1 fin" },
  { name: "Magma Crystal", category: "Materials", value: 0.04, note: "25 for 1 fin" },
  { name: "Ice Crystal", category: "Materials", value: 0.04, note: "25 for 1 fin" },
  { name: "Dark Beard's Totem", category: "Materials", value: 1 / 30, note: "30 for 1 fin" },
  { name: "Shark's Fin", category: "Materials", value: 0.025, note: "40 for 1 fin" },
  { name: "Coral", category: "Materials", value: 0.025, note: "40 for 1 fin" },
  { name: "Gunpowder", category: "Materials", value: 1 / 300, note: "300 for 1 fin" },
  { name: "Fresh Fish", category: "Materials", value: 1 / 375, note: "375 for 1 fin" },
  { name: "Iron Ingot", category: "Materials", value: 0.002, note: "500 for 1 fin" },
  { name: "Sea Artifact", category: "Materials", value: 0.002, note: "500 for 1 fin" },
  { name: "Rusted Scrap", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Carrot", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Pile of Bones", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Angellic's Feather", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Thief's Rag", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Leather", category: "Materials", value: 1 / 600, note: "600 for 1 fin" },
  { name: "Undead's Ooze", category: "Materials", value: 1 / 750, note: "750 for 1 fin" },

  // Gamepasses
  { name: "Volt Bundle", category: "Gamepasses", value: 775 },
  { name: "Conqueror", category: "Gamepasses", value: 725 },
  { name: "BlazeIce Pack", category: "Gamepasses", value: 375 },
  { name: "Night Blade", category: "Gamepasses", value: 300 },
  { name: "+1 Slot (Passive)", category: "Gamepasses", value: 290 },
  { name: "2x Money", category: "Gamepasses", value: 265 },
  { name: "2x Drop Item", category: "Gamepasses", value: 240 },
  { name: "Coffin Boat", category: "Gamepasses", value: 90 },
  { name: "+1 Fruit Storage", category: "Gamepasses", value: 85 },
  { name: "Legacy Pose", category: "Gamepasses", value: 80 },
  { name: "Animation (Any)", category: "Gamepasses", value: 30 },
  { name: "2x exp (12 hours)", category: "Gamepasses", value: 5.5 },
  { name: "Race Rerolls", category: "Gamepasses", value: 4 },
  { name: "Refund Stats", category: "Gamepasses", value: 2.5 },

  // Bundles
  { name: "Hellroot Bundle", category: "Bundles", value: 1300 },
  { name: "Primal Pack", category: "Bundles", value: 500 },
  { name: "Acrospear (Mats)", category: "Bundles", value: 32.5 },
  { name: "Phoenix Blade V2 (Mats)", category: "Bundles", value: 27.5 },
  { name: "Dark Stone (Mats)", category: "Bundles", value: 25.5 },
  { name: "Spark Stone (Mats)", category: "Bundles", value: 22.5 },
  { name: "Poison Stone (Mats)", category: "Bundles", value: 22.5 },
  { name: "Cyborg V2 (Mats)", category: "Bundles", value: 22.1 },
  { name: "Blaze Stone (Mats)", category: "Bundles", value: 14.5 },
  { name: "Abyss Stone (Mats)", category: "Bundles", value: 13 },
  { name: "Gale Stone (Mats)", category: "Bundles", value: 11.5 },
  { name: "Light Stone (Mats)", category: "Bundles", value: 7 },
  { name: "Bloodthirsty Stone (Mats)", category: "Bundles", value: 6 },
  { name: "Glacier Stone (Mats)", category: "Bundles", value: 5.5 },
  { name: "Tempestas Stone (Mats)", category: "Bundles", value: 5 },
  { name: "Disillusion Stone (Mats)", category: "Bundles", value: 1 },

  // Perm Fruits
  { name: "Perm Dragon", category: "Perm Fruits", value: 825 },
  { name: "Perm Dough", category: "Perm Fruits", value: 775 },
  { name: "Perm Phoenix", category: "Perm Fruits", value: 735 },
  { name: "Perm Pter", category: "Perm Fruits", value: 725 },
  { name: "Perm Tree", category: "Perm Fruits", value: 700 },
  { name: "Perm Gate", category: "Perm Fruits", value: 690 },
  { name: "Perm Toy", category: "Perm Fruits", value: 637.5 },
  { name: "Perm Melody", category: "Perm Fruits", value: 615 },
  { name: "Perm Demon", category: "Perm Fruits", value: 550 },
  { name: "Perm Quake", category: "Perm Fruits", value: 425 },
  { name: "Perm Rumble", category: "Perm Fruits", value: 410 },
  { name: "Perm Gas", category: "Perm Fruits", value: 410 },
  { name: "Perm Control", category: "Perm Fruits", value: 325 },
  { name: "Perm Light", category: "Perm Fruits", value: 275 },
  { name: "Perm Snow", category: "Perm Fruits", value: 265 },
  { name: "Perm Spino", category: "Perm Fruits", value: 250 },
  { name: "Perm Gravity", category: "Perm Fruits", value: 215 },
  { name: "Perm Buddha", category: "Perm Fruits", value: 210 },
  { name: "Perm Flame", category: "Perm Fruits", value: 205 },
  { name: "Perm Magma", category: "Perm Fruits", value: 190 },
  { name: "Perm Brachio", category: "Perm Fruits", value: 175 },
  { name: "Perm Venom", category: "Perm Fruits", value: 155 },
  { name: "Perm Ice", category: "Perm Fruits", value: 125 },
  { name: "Perm Dark", category: "Perm Fruits", value: 110 },
  { name: "Perm Love", category: "Perm Fruits", value: 110 },
  { name: "Perm Allo", category: "Perm Fruits", value: 50 },
  { name: "Perm Rubber", category: "Perm Fruits", value: 45 },
  { name: "Perm Paw", category: "Perm Fruits", value: 45 },
  { name: "Perm Telekinesis", category: "Perm Fruits", value: 25 },
  { name: "Perm Bomb", category: "Perm Fruits", value: 12.5 }
];

const state = {
  your: {},
  their: {}
};

const els = {
  yourTotal: document.getElementById("yourTotal"),
  theirTotal: document.getElementById("theirTotal"),
  tradeResult: document.getElementById("tradeResult"),
  differenceText: document.getElementById("differenceText"),
  resultBox: document.getElementById("resultBox"),
  yourItems: document.getElementById("yourItems"),
  theirItems: document.getElementById("theirItems"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  sortFilter: document.getElementById("sortFilter"),
  itemsContainer: document.getElementById("itemsContainer"),
  template: document.getElementById("itemTemplate"),
  themeBtn: document.getElementById("themeBtn")
};

function formatValue(value) {
  if (Number.isInteger(value)) return String(value);
  if (value >= 1) return String(Number(value.toFixed(2)));
  return String(Number(value.toFixed(4)));
}

function getItem(name) {
  return ITEMS.find(item => item.name === name);
}

function addItem(side, itemName) {
  state[side][itemName] = (state[side][itemName] || 0) + 1;
  renderSelected();
}

function changeQty(side, itemName, delta) {
  state[side][itemName] = (state[side][itemName] || 0) + delta;
  if (state[side][itemName] <= 0) delete state[side][itemName];
  renderSelected();
}

function setQty(side, itemName, value) {
  const qty = Math.floor(Number(value));

  if (!Number.isFinite(qty) || qty <= 0) {
    delete state[side][itemName];
  } else {
    state[side][itemName] = qty;
  }

  renderSelected();
}

function sideTotal(side) {
  return Object.entries(state[side]).reduce((total, [name, qty]) => {
    const item = getItem(name);
    return total + (item ? item.value * qty : 0);
  }, 0);
}

function renderSelectedList(side, container) {
  const entries = Object.entries(state[side]);
  container.innerHTML = "";

  if (!entries.length) {
    container.className = "selected-list empty";
    container.textContent = "No items added.";
    return;
  }

  container.className = "selected-list";
  entries.forEach(([name, qty]) => {
    const item = getItem(name);
    if (!item) return;

    const row = document.createElement("div");
    row.className = "selected-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        <small>${item.category} • ${formatValue(item.value)} fins each</small>
      </div>
      <div class="qty-controls">
        <button aria-label="decrease">−</button>
        <input class="qty-input" type="number" min="1" step="1" value="${qty}" aria-label="quantity for ${item.name}">
        <button aria-label="increase">+</button>
      </div>
      <div>
        <strong>${formatValue(item.value * qty)}</strong> fins<br>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    const [minusBtn, plusBtn] = row.querySelectorAll(".qty-controls button");
    const qtyInput = row.querySelector(".qty-input");

    minusBtn.addEventListener("click", () => changeQty(side, name, -1));
    plusBtn.addEventListener("click", () => changeQty(side, name, 1));
    qtyInput.addEventListener("change", () => setQty(side, name, qtyInput.value));
    qtyInput.addEventListener("keydown", event => {
      if (event.key === "Enter") qtyInput.blur();
    });
    row.querySelector(".remove-btn").addEventListener("click", () => {
      delete state[side][name];
      renderSelected();
    });

    container.appendChild(row);
  });
}

function renderSelected() {
  const your = sideTotal("your");
  const their = sideTotal("their");
  const diff = your - their;

  els.yourTotal.textContent = formatValue(your);
  els.theirTotal.textContent = formatValue(their);
  els.differenceText.textContent = `Difference: ${formatValue(Math.abs(diff))} fins`;

  els.resultBox.classList.remove("win", "lose", "even");
  if (Math.abs(diff) < 0.00001) {
    els.tradeResult.textContent = "Even";
    els.resultBox.classList.add("even");
  } else if (diff < 0) {
    els.tradeResult.textContent = "Win";
    els.resultBox.classList.add("win");
  } else {
    els.tradeResult.textContent = "Lose";
    els.resultBox.classList.add("lose");
  }

  renderSelectedList("your", els.yourItems);
  renderSelectedList("their", els.theirItems);
}

function filteredItems() {
  const query = els.searchInput.value.trim().toLowerCase();
  const category = els.categoryFilter.value;
  const sort = els.sortFilter.value;

  let items = ITEMS.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCategory = category === "All" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  if (sort === "value-desc") items.sort((a, b) => b.value - a.value);
  if (sort === "value-asc") items.sort((a, b) => a.value - b.value);
  if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "category") items.sort((a, b) => a.category.localeCompare(b.category) || b.value - a.value);

  return items;
}

function renderItems() {
  const items = filteredItems();
  els.itemsContainer.innerHTML = "";

  if (!items.length) {
    els.itemsContainer.innerHTML = `<p class="category-title">No items found.</p>`;
    return;
  }

  const grouped = items.reduce((acc, item) => {
    acc[item.category] ||= [];
    acc[item.category].push(item);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([category, categoryItems]) => {
    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = category;
    els.itemsContainer.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "item-grid";

    categoryItems.forEach(item => {
      const node = els.template.content.cloneNode(true);
      const card = node.querySelector(".item-card");
      card.querySelector("h3").textContent = item.name;
      card.querySelector("p").textContent = item.note
        ? `${formatValue(item.value)} fins each • ${item.note}`
        : `${formatValue(item.value)} fins`;
      card.querySelector(".add-your").addEventListener("click", () => addItem("your", item.name));
      card.querySelector(".add-their").addEventListener("click", () => addItem("their", item.name));
      grid.appendChild(node);
    });

    els.itemsContainer.appendChild(grid);
  });
}

function setupFilters() {
  const categories = [...new Set(ITEMS.map(item => item.category))];
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categoryFilter.appendChild(option);
  });

  els.searchInput.addEventListener("input", renderItems);
  els.categoryFilter.addEventListener("change", renderItems);
  els.sortFilter.addEventListener("change", renderItems);
}

document.querySelectorAll(".clear-btn").forEach(button => {
  button.addEventListener("click", () => {
    state[button.dataset.side] = {};
    renderSelected();
  });
});

els.themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

setupFilters();
renderItems();
renderSelected();
