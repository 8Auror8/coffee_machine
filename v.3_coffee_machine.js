const input = require('sync-input')

//Variables
let machineWater = 400;  // water existing in coffee machine in ml
let machineMilk = 540;   // milk existing in coffee machine in ml
let machineCoffee = 120; // coffee existing in coffee machine in gr
let machineCups = 9;     // cups existing in coffee machine
let machineMoney = 550;  // money existing in coffee machine
var machineOptionSelected = ""



//FUNCTIONS
// 01 - print coffee machine status
function printStatus(){
    console.log(`The coffee machine has:
        ${machineWater} ml of water
        ${machineMilk} ml of milk
        ${machineCoffee} g of coffee beans
        ${machineCups} disposable cups
        $${machineMoney} of money\n`)
}

//04 - enough supplies
function enoughSupplies(type) {
    let hasSupplies = 0;
    if(type === 1){
        if(machineWater >= 250){
            if(machineCoffee >= 16){
                if(machineCups >= 1){
                    console.log("I have enough resources, making you a coffee!\n")
                    machineWater = machineWater - 250; 
                    machineCoffee = machineCoffee - 16; 
                    machineCups = machineCups - 1;     
                    machineMoney = machineMoney + 4
                }
                else{
                    console.log("Sorry, not enough cups!\n")
                }
            }else{
                console.log("Sorry, not enough coffee!\n")
            }
        }else{
            console.log("Sorry, not enough water!\n")
        }            
    }else if(type === 2){
        if(machineWater >= 350){
            if(machineMilk >= 100){
                if(machineCoffee >= 20){
                    if(machineCups >= 1){
                        console.log("I have enough resources, making you a coffee!\n")
                        machineWater = machineWater - 350;
                        machineMilk = machineMilk - 75;
                        machineCoffee = machineCoffee - 20; 
                        machineCups = machineCups - 1;     
                        machineMoney = machineMoney + 7
                    }else{
                        console.log("Sorry, not enough cups!\n")
                    }
                }else{
                    console.log("Sorry, not enough coffee!\n")
                }
            }else{
                console.log("Sorry, not enough milk!\n")
            }
        }else{
            console.log("Sorry, not enough water!\n")
        }
    }else if(type === 3){
        if(machineWater >= 200){
            if(machineMilk >= 100){
                if(machineCoffee >= 12){
                    if(machineCups >= 1){
                        console.log("I have enough resources, making you a coffee!\n")
                        machineWater = machineWater - 200;
                        machineMilk = machineMilk - 100;
                        machineCoffee = machineCoffee - 12; 
                        machineCups = machineCups - 1;     
                        machineMoney = machineMoney + 6
                    }else{
                        console.log("Sorry, not enough cups!\n")
                    }
                }else{
                    console.log("Sorry, not enough coffee!\n")
                }
            }else{
                console.log("Sorry, not enough milk!\n")
            }
        }else{
            console.log("Sorry, not enough water!\n")
        }

    }

}

// 03 - Buy type of coffee
function typeOfCoffee(type){
    if(type === 1){
        enoughSupplies(type)                  //espresso coffee
    }else if(type === 2){
        enoughSupplies(type)                  //latte coffee
    }else if(type === 3){   
        enoughSupplies(type)                  //capuccino coffee

    }
}
// 02 - user selection of machine options
function machineOptions(){
    console.log("Write action (buy, fill, take, remaining, exit): ");
    machineOptionSelected = input().toLowerCase().trim()
    console.log("")
    if(machineOptionSelected === "buy"){
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
        let coffeeOptionSelected = Number(input());
        typeOfCoffee(coffeeOptionSelected)
    }else if(machineOptionSelected === "fill"){
        console.log("Write how many ml of water you want to add:");
        machineWater = machineWater + Number(input());
        console.log("Write how many ml of milk you want to add:");
        machineMilk = machineMilk + Number(input());
        console.log("Write how many grams of coffee beans you want to add:");
        machineCoffee = machineCoffee + Number(input());
        console.log("Write how many disposable cups you want to add:");
        machineCups = machineCups + Number(input());
        console.log("")
    }else if(machineOptionSelected === "take"){
        console.log(`I gave you $${machineMoney}\n`);
        machineMoney = 0
    }else if(machineOptionSelected === "remaining"){
        printStatus()
    }else if(machineOptionSelected === "back"){
        
    }
}
function main(){
    while( machineOptionSelected !== "exit"){
        machineOptions();
    }
}

main()
