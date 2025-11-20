let cart = [];
let totalCalories = 0;
let totalFat = 0;
let totalProtein = 0;
let totalCarbs = 0;

// Function to add items in the cart
function addtoCart(item, protein, fat, calories, carbs, button) {
    // Get the parent div of the clicked button
    let parent = button.closest(".cartbutton");
    let counterElement = parent.querySelector("#itemCounter");

    // Check if product already exists in cart
    let existingProduct = cart.find(product => product.item === item);

    if (existingProduct) {
        // Increase count if item already exists
        existingProduct.count++;
        counterElement.innerText = existingProduct.count;
    } else {
        // If new item, add it with count = 1
        let product = {
            item: item,
            protein: protein,
            fat: fat,
            calories: calories,
            carbs: carbs,
            count: 1
        };
        cart.push(product);
        counterElement.innerText = 1;
    }

    // Update totals
    totalCalories += calories;
    totalProtein += protein;
    totalFat += fat;
    totalCarbs += carbs;

    // Update totals in UI
    updateCalories();
    updateProtein();
    updateFat();
    updateCarbs();
}

// Function to remove items from the cart
function removeFromCart(item, protein, fat, calories, carbs, button) {
    let parent = button.closest(".cartbutton");
    let counterElement = parent.querySelector("#itemCounter");

    // Find product in cart
    let existingProduct = cart.find(product => product.item === item);

    if (existingProduct) {
        if (existingProduct.count > 1) {
            // Reduce count
            existingProduct.count--;
            counterElement.innerText = existingProduct.count;
        } else {
            // Remove product if count becomes 0
            cart = cart.filter(product => product.item !== item);
            counterElement.innerText = 0;
        }

        // Update totals
        totalCalories -= calories;
        totalProtein -= protein;
        totalFat -= fat;
        totalCarbs -= carbs;

        // Update totals in UI
        updateCalories();
        updateProtein();
        updateFat();
        updateCarbs();
    }
}

// Functions to update totals in UI
function updateCalories() {
    document.getElementById("totalCalories").innerText = totalCalories;
}
function updateProtein() {
    document.getElementById("totalProtein").innerText = totalProtein;
}
function updateFat() {
    document.getElementById("totalFat").innerText = totalFat;
}
function updateCarbs() {
    document.getElementById("totalCarbs").innerText = totalCarbs;
}

// Reset Cart Function
function resetCart() {
    cart = [];
    totalCalories = 0;
    totalProtein = 0;
    totalFat = 0;
    totalCarbs = 0;

    // Reset UI counters to 0
    document.querySelectorAll("#itemCounter").forEach(counter => {
        counter.innerText = 0;
    });

    updateCalories();
    updateProtein();
    updateFat();
    updateCarbs();
}
