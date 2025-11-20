let cart = [];
let totalCalories = 0;
let totalFat = 0;
let totalProtein = 0;
let totalCarbs = 0;

function findCounterElement(button) {
  const parent = button.closest('.cartbutton');
  return parent ? parent.querySelector('#itemCounter') : null;
}

function addtoCart(item, protein, fat, calories, carbs, button) {
  const counterElement = findCounterElement(button);
  let existingProduct = cart.find(p => p.item === item);

  if (existingProduct) {
    existingProduct.count += 1;
  } else {
    existingProduct = { item, protein, fat, calories, carbs, count: 1 };
    cart.push(existingProduct);
  }

  if (counterElement) counterElement.innerText = existingProduct.count;

  totalCalories += calories;
  totalProtein += protein;
  totalFat += fat;
  totalCarbs += carbs;

  updateCalories();
  updateProtein();
  updateFat();
  updateCarbs();
  updateSelectedItems();
}

function removeFromCart(item, protein, fat, calories, carbs, button) {
  const counterElement = findCounterElement(button);
  const existingProduct = cart.find(p => p.item === item);
  if (!existingProduct) return;

  if (existingProduct.count > 1) {
    existingProduct.count -= 1;
    if (counterElement) counterElement.innerText = existingProduct.count;
  } else {
    cart = cart.filter(p => p.item !== item);
    if (counterElement) counterElement.innerText = 0;
  }

  totalCalories = Math.max(0, totalCalories - calories);
  totalProtein = Math.max(0, totalProtein - protein);
  totalFat = Math.max(0, totalFat - fat);
  totalCarbs = Math.max(0, totalCarbs - carbs);

  updateCalories();
  updateProtein();
  updateFat();
  updateCarbs();
  updateSelectedItems();
}

function updateCalories() {
  const el = document.getElementById('totalCalories');
  if (el) el.innerText = totalCalories;
}

function updateProtein() {
  const el = document.getElementById('totalProtein');
  if (el) el.innerText = totalProtein;
}

function updateFat() {
  const el = document.getElementById('totalFat');
  if (el) el.innerText = totalFat;
}

function updateCarbs() {
  const el = document.getElementById('totalCarbs');
  if (el) el.innerText = totalCarbs;
}

function updateSelectedItems() {
  const el = document.getElementById('sletedItems');
  if (!el) return;

  const distinctCount = cart.length;
  const totalQuantity = cart.reduce((s, p) => s + p.count, 0);

  if (distinctCount === 0) {
    el.innerText = '0';
    return;
  }

  const names = cart
    .map(p => `${p.item}${p.count > 1 ? ` (${p.count})` : ''}`)
    .join(', ');

  el.innerText = `${distinctCount} item${distinctCount > 1 ? 's' : ''} (total ${totalQuantity}) — ${names}`;
}

function resetCart() {
  cart = [];
  totalCalories = 0;
  totalProtein = 0;
  totalFat = 0;
  totalCarbs = 0;

  document.querySelectorAll('#itemCounter').forEach(c => c.innerText = '0');

  updateCalories();
  updateProtein();
  updateFat();
  updateCarbs();
  updateSelectedItems();
}

window.addEventListener('DOMContentLoaded', () => {
  updateCalories();
  updateProtein();
  updateFat();
  updateCarbs();
  updateSelectedItems();
});
