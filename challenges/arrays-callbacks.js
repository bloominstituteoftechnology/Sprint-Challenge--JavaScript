// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
const tWeight = [];
dinosaurs.forEach(function (element) {
  return tWeight.push(element.weight.tWeight[0]());
});
console.log(tweight);

// What was the diet of a velociraptor?
const vDiet = [];

dinosaurs.map(function (element) {
  return vDiet.push(element.diet.vDiet[2]());
});
console.log(vDiet);

// How long was a stegosaurus?

const sLength = [];

dinosaurs.map(function (element) {
  return sLength.push(element.length.sLength[1]());
});
console.log(sLength);

// What time period did tyrannosaurus live in?
const tPeriod = [];

dinosaurs.map(function (element) {
  return tPeriod.push(element.period.tPeriod[0]());
});

console.log(tPeriod);

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.

function speak(name) {
  this.name = dinosaurs[0].name;
  return `${this.name} says 'RAWEREARARARARARRR`;
}

console.log(functname.tostring());

// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [
  {
    id: 1,
    first_name: "Cynde",
    university: "Missouri Southern State College",
    email: "ctorry0@macromedia.com",
  },
  {
    id: 2,
    first_name: "Saundra",
    university: "The School of the Art Institute of Chicago",
    email: "swhal1@state.gov",
  },
  {
    id: 3,
    first_name: "Lambert",
    university: "Marian College",
    email: "lparham2@techcrunch.com",
  },
  {
    id: 4,
    first_name: "Modestine",
    university: "International Medical & Technological University",
    email: "mdolder3@symantec.com",
  },
  {
    id: 5,
    first_name: "Chick",
    university: "Sultan Salahuddin Abdul Aziz Shah Polytechnic",
    email: "camorts4@google.com.au",
  },
  {
    id: 6,
    first_name: "Jakob",
    university:
      "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft",
    email: "jharken5@spiegel.de",
  },
  {
    id: 7,
    first_name: "Robbi",
    university: "Salem University",
    email: "rbrister6@redcross.org",
  },
  {
    id: 8,
    first_name: "Colline",
    university: "Coastal Carolina University",
    email: "cbrosh7@alibaba.com",
  },
  {
    id: 9,
    first_name: "Michail",
    university: "Universidad Católica de Ávila",
    email: "mrome8@shinystat.com",
  },
  {
    id: 10,
    first_name: "Hube",
    university: "Universitat Rovira I Virgili Tarragona",
    email: "hlethbrig9@foxnews.com",
  },
];

/* Request 1: Create a new array called universities that contains all the universities in the graduates array. This will be an array of strings.
Once you have the new array created, log the result. */

const universities = []; //creates new empty array

//run loop to look over the data
graduates.forEach(function (element) {
  //push items into the new array
  universities.push(graduates[index].universities());
  //return the new array

  return universities;
});

console.log(universities.toString);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. This will be an array of strings.
The resulting contact information strings should have a space between the first name and the email, like this: 
"Josh josh@example.com"
Log the result of your new array. */
const contactInfo = [];

graduates.forEach(function (element) {
  //push items into the new array
  contactInfo.push(graduates[index].contactInfo());
  //return the new array

  return contactInfo;
});
console.log(`${contactInfo.first_name} ${contactInfo.email}`);

/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called unisWithUni that contains them all. This will be an array of objects. Log the result. */
const unisWithUni = [];

graduates.map(function (univerity, index) {
  let x = university.toString(); //convert univerity to string
  //push items into the new array

  if (x.includes("uni")) {
    t = true;
  }
  if (t) {
    return graduates.univerity.toString;
  }
});

console.log(unisWithUni);

// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];

/* Request 1: .forEach()
The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
*/
const displayNames = [];

//create a variable that includes both names

let bothNames = zooAnimals.forEach(function (i) {
  //return both names in an array formatted Name:Jackal, asiatic, Scientific: Canis aureus."
  displayNames.push(`Name: ${i.animal_name}, Scientific: ${i.scientific_name}`);
});

console.log(displayNames);

/* Request 2: .map()
The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
*/

const lowCaseAnimalNames = []; //creates the empty array

//run through the data to pull animal names
let lowCaseAnimalNames = zooAnimals.map(function (animal) {
  return animal.animal_name.toLowerCase();
});
console.log(lowCaseAnimalNames);

/* Request 3: .filter() 
The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
*/
const lowPopulationAnimals = [];

let lowPopulationAnimals = zooAnimals.filter(function (less) {
  return less.population < 5;
});

console.log(lowPopulationAnimals);

/* Request 4: .reduce() 
The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
*/
const populationTotal = 0;

let populationTotal = zooAnimals.reduce(function (populationTotal, amount) {
  return populationTotal + amount.population;
});
console.log(populationTotal);

/*
Stretch: If you haven't already, convert your array method callbacks into arrow functions.
*/

// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
//open function with 3 parameters argum1 2, and callback
function consume(argument1, argument2, callback) {
  return callback[(argument1, argument2)];
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num3, num4) {
  return num3 * num4;
}

function greeting(first, last) {
  return `Hello ${first}${last}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2)); // 4
console.log(consume(10, 16)); // 160
console.log(consume("Mary", "Poppins")); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction(); //nested function ca access the const internal  because of the lexical environement. Everything aboter the nested function is available to it but anything outside of the function does not have the same availability
}
myFunction();
