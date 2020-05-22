// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const displayNames = [];
console.log(displayNames);


zooAnimals.forEach(function(array){
 displayNames.push(`Name: ${array["animal_name"]}`);
  return displayNames
})

 zooAnimals.forEach(function(array){
  displayNames.push(`Scientific: ${array["scientific_name"]}`);
    return displayNames
  })




console.log(displayNames)

/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.

*/

const lowCaseAnimalNames = [];


zooAnimals.forEach(function(array){
  lowCaseAnimalNames.push(array["animal_name"].toLowerCase());
   return lowCaseAnimalNames;
 })

 console.log(lowCaseAnimalNames);

/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

*/
const lowPopulationAnimals = [];

zooAnimals.filter(function(array){
  if(array["population"]<5){
  lowPopulationAnimals.push(array["population"]);
  }
   return lowPopulationAnimals;
 })


console.log(lowPopulationAnimals);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

*/
let populationTotal = 0;

populationTotal=zooAnimals.reduce(function (accumulator, item) {
  return accumulator + item['population'];
}, 0)

console.log(populationTotal);



// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/



function consume(a,b,cb){

return cb(a,b)

  }



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const add = (a, b) => a + b;
const greeting = (a, b) => `Hello ${a} ${b}`;




/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

console.log(consume(2, 4,add));
console.log(consume(2, 10,divide));
console.log(consume(2, 20,multiply));
console.log(greeting("Cameron", "Lares",greeting));


/*

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

