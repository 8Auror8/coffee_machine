const input = require('sync-input')

//Variables
let cupWater = 200;    // water needed for a cup of coffee in ml
let cupMilk = 50;      // milk needed for a cup of coffee in ml
let cupCoffee= 15;     // coffee beans needed for a cup of coffee in gr

let machineWater = 0;  // water existing in coffee machine in ml
let machineMilk = 0;   // milk existing in coffee machine in ml
let machineCoffee = 0; // coffee existing in coffee machine in gr

let neededWater = 0;   // water needed for the quantity selected by user
let neededMilk = 0;    // milk needed for the quantity selected by user
let neededCoffee = 0;  // coffee needed for the quantity selected by user

let hasSupplies = 0;  // Check if the machine has all the supplies needed for the users selection. 0 = no / 1 = yes
let nSupplies = 0;       // How many cups can be done N more times that que quantity asked by user
let xSupplies = 0;       // In case that the user requirement is not possible, it will be needed to calculate the quantity that is possible

//Function
function enoughSupplies() {
    neededWater = userSelect * cupWater;
    neededMilk = userSelect * cupMilk;
    neededCoffee = userSelect * cupCoffee;

    if( machineWater >= neededWater && machineMilk >= neededMilk && machineCoffee >= neededCoffee){
        hasSupplies = 1;
        }else{
            hasSupplies = 0;
        }

    nSupplies = Math.floor(Math.min((machineWater - neededWater) / cupWater, (machineMilk - neededMilk) / cupMilk, (machineCoffee - neededCoffee) / cupCoffee)) //Will calculate how many n cup of coffee can be done despite the ones asked by user
    xSupplies = Math.floor(Math.min(machineWater / cupWater, machineMilk / cupMilk, machineCoffee / cupCoffee))  //In case that the quantity of cups the user is asking for are not possible, will calculate how many cups are possible to deliver to the user


    //Print selection
    if(hasSupplies === 1 && nSupplies > 0){
        console.log(`Yes, I can make that amount of coffee (and even ${nSupplies} more than that)`)
    }else if(hasSupplies === 1 && nSupplies <= 0){
        console.log(`Yes, I can make that amount of coffee`)
    }else{
        console.log(`No, I can make only ${xSupplies} cups of coffee`)
    }
}

// Input from user
console.log(`Write how many ml of water the coffee machine has:`)
machineWater = Number(input());

console.log(`Write how many ml of milk the coffee machine has:`)
machineMilk = Number(input());

console.log(`Write how many grams of coffee beans the coffee machine has:`)
machineCoffee = Number(input());

console.log(`Write how many cups of coffee you will need:`)
let userSelect = Number(input());
enoughSupplies()
