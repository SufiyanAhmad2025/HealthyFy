// This function calculates the macro split based on calorie intake and fitness goal.
function calculateMacros() {
    // Get user input from the HTML elements
    let calories = Number(document.getElementById("calories").value);
    let goal = document.getElementById("goal").value;

    // Validate that calories are a positive number
    if (isNaN(calories) || calories <= 0) {
        alert("Please enter a valid positive number for calories.");
        return; // Exit the function if input is invalid
    }
    
    // Validate that a goal has been selected
    if (goal === "") {
        alert("Please select a fitness goal.");
        return; // Exit the function if no goal is selected
    }

    // Initialize macro percentage variables
    let proteinPerc, carbsPerc, fatPerc;

    // Set macro percentages based on the selected goal
    switch (goal) {
        case "fatloss":
            // Macro split matching our previous example (40/30/30)
            proteinPerc = 0.30;
            carbsPerc = 0.40;
            fatPerc = 0.30;
            break;
        case "muscle":
            // A more common split for muscle gain (40/30/30)
            proteinPerc = 0.40;
            carbsPerc = 0.30;
            fatPerc = 0.30;
            break;
        case "maintenance":
        default:
            // Balanced split for weight maintenance
            proteinPerc = 0.30;
            carbsPerc = 0.40;
            fatPerc = 0.30;
            break;
    }

    // Convert total calories into calories per macronutrient
    let proteinCals = calories * proteinPerc;
    let carbsCals = calories * carbsPerc;
    let fatCals = calories * fatPerc;

    // Convert calories to grams (1g protein/carb = 4 cal, 1g fat = 9 cal) and round the results
    let proteinGrams = Math.round(proteinCals / 4);
    let carbsGrams = Math.round(carbsCals / 4);
    let fatsGrams = Math.round(fatCals / 9);

    // Display the calculated values in the designated HTML elements
    document.getElementById("protein").innerText = proteinGrams + "g";
    document.getElementById("carbs").innerText = carbsGrams + "g";
    document.getElementById("fats").innerText = fatsGrams + "g";
}

// This function resets the input fields and displayed values.
function resetMacros() {
    // Clear the output display elements
    document.getElementById("protein").innerText = "0g";
    document.getElementById("carbs").innerText = "0g";
    document.getElementById("fats").innerText = "0g";

    // Reset the input fields
    document.getElementById("calories").value = "";
    document.getElementById("goal").value = ""; // Assuming goal is a select element
}