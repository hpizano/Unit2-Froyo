//Prompt the user to order Froyo flavors from Menu.

const userInputFlavors = prompt (
    "Please enter you order",
    "vanilla, vanilla, straberry, chocolate, mango, mango"
)

//Flavors input are then split into an array of strings

const flavorsArray = userInputFlavors.split(',')

// Create a 'for' loop
const stats ={

};

for (let i = 0; i <flavorsArray.length; i++) {
    const flavor = flavorsArray[i];
    if (stats[flavor] === undefined) {
        stats[flavor] = 0;
    }
    stats[flavor] = stats[flavor] +1;
}

// Array of string is then converted into an array of numbers 

let flavorsCount = [];
for (let i = 0; i < flavorsArray.length; i++ ) {
    const str = flavorsArray[i];
    if(flavorsCount.hasOwnProperty(userInputFlavors)){
        flavorsCount[userInputFlavors]++;
    }
    else {
    flavorsCount[userInputFlavors] = 1;
    }

}

console.log(flavorsCount)

//for (let key in flavors) {
    //sum = sum arr[key];


//console.log(sum)