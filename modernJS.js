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

