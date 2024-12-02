const input = require('sync-input')

//Variables
let machineWater = 400;  // water existing in coffee machine in ml
let machineMilk = 540;   // milk existing in coffee machine in ml
let machineCoffee = 120; // coffee existing in coffee machine in gr
let machineCups = 9;     // cups existing in coffee machine
let machineMoney = 550;  // money existing in coffee machine


//FUNCTIONS
// 01 - print coffee machine status
function printStatus(){
    console.log(`The coffee machine has:
        ${machineWater} ml of water
        ${machineMilk} ml of milk
        ${machineCoffee} g of coffee beans
        ${machineCups} disposable cups
        $${machineMoney} of money`)
}
// 03 - Buy type of coffee
function typeOfCoffee(type){
    if(type === 1){                            //espresso coffee
        machineWater = machineWater - 250; 
        machineCoffee = machineCoffee - 16; 
        machineCups = machineCups - 1;     
        machineMoney = machineMoney + 4
    }else if(type === 2){                      //latte coffee
        machineWater = machineWater - 350;
        machineMilk = machineMilk - 75;
        machineCoffee = machineCoffee - 20; 
        machineCups = machineCups - 1;     
        machineMoney = machineMoney + 7
    }else if(type === 3){                     //capuccino coffee
        machineWater = machineWater - 200;
        machineMilk = machineMilk - 100;
        machineCoffee = machineCoffee - 12; 
        machineCups = machineCups - 1;     
        machineMoney = machineMoney + 6
    }
}
// 02 - user selection of machine options
function machineOptions(){
    console.log("Write action (buy, fill, take): ");
    let machineOptionSelected = input().toLowerCase().trim()
    if(machineOptionSelected === "buy"){
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
        let coffeeOptionSelected = Number(input());
        typeOfCoffee(coffeeOptionSelected)
        printStatus()
    }else if(machineOptionSelected === "fill"){
        console.log("Write how many ml of water you want to add:");
        machineWater = machineWater + Number(input());
        console.log("Write how many ml of milk you want to add:");
        machineMilk = machineMilk + Number(input());
        console.log("Write how many grams of coffee beans you want to add:");
        machineCoffee = machineCoffee + Number(input());
        console.log("Write how many disposable cups you want to add:");
        machineCups = machineCups + Number(input());

        printStatus()
    }else if(machineOptionSelected === "take"){
        console.log(`I gave you $${machineMoney}\n`);
        machineMoney = 0
        printStatus()
    }
}
function main(){
    printStatus()
    machineOptions()
}

main()
