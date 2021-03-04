// step 1: get/prompt user pet name, store in variable
// step 2: assign numeric values to feed, pet, walk
// step 3: loop a prompt for feed, pet, or walk
// step 4: console log the total happiness and energy
// : six iterations of loop
// step 5: error messages/alert for 0 energy



let petName = prompt("Name your pet.");
let happiness = 0;
let energy = 0;

for (let i = 0; i < 6; i++) {
    let userAnswer = prompt("feed, pet, or walk " + petName + "?");
    if (userAnswer === "feed") {
        energy += 2
    } else if (userAnswer === "pet") {
        happiness += 1
    } else if (userAnswer === "walk") {
        happiness += 2, energy -= 1
    }
}

if (energy <= 0) {
    alert("Not enough energy to enjoy a walk.");
}

console.log(petName + ' ' + "has " + happiness + ' ' + "happiness and " + energy + ' ' + "energy.");
