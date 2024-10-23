// E1: 
//  Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.

const timesTwo = nums.map((nums) => {
    return nums * 2
})

console.log("E1:", timesTwo)

//E2:
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [Topping1, Topping2] = pizzaToppings;

console.log("E2: ", Topping1, Topping2)

// E3:
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

const { make, model } = car
console.log("E3: ",  make , model)

// E4: 
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.


const controversialPizzaToppings = [...pizzaToppings]

console.log("E4: ", controversialPizzaToppings)

// E5:
// Duplicate the following object and spread its values into a new variable `myCar`.
// Change the `model` property of `myCar` to 'q7'. Log both objects.

const myCar = {...car}
myCar.model = "q7"
  

console.log("E5: ", myCar)

// E6:
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const propertyName = 'username'

const userProfile = {
    [propertyName]: "Matt"
}

console.log("E6: ", userProfile);

// E7:
// Created ImportingFile.js and exportingFile.js 

// E8:
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

const words = (noun="cat", adjective="white") => {
    return(`This ${noun} is ${adjective}`)
}

console.log("E8: ",  words("dog", "red"))
// E9:
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

let isTasty = pizza == "tasty" ? 'Yummy!' : 'Yuck!!!!'

console.log("E9: ", isTasty)

// E10:
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || 'EN'

console.log('E10: Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || 'light'

console.log('E10a: User theme setting:', USER_THEME);


// E11:
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
};
  
let cat; 
const catAge = cat?.age

console.log("E11: ", cat )