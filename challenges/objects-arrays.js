// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious
const  tyrannosaurus = {
  name:  "tyrannosaurus",
  diet: "carnivorous",
  weight: "7000kg",
  length: "12m",
  period: "Late Cretaceious"
};

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const  stegosaurus = {
  name:  "stegosaurus",
  diet: "herbivorous",
  weight: "2000kg",
  length: "9m",
  period: "Late Jurassic"
};

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious
const  velociraptor = {
  name:  "velociraptor",
  diet: "carnivorous",
  weight: "15kg",
  length: "1.8m",
  period: "Late Cretaceious"
};

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight);
// What was the diet of a velociraptor?
console.log(velociraptor.diet);
// How long was a stegosaurus?
console.log(stegosaurus.length);
// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period);

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
tyrannosaurus.roar = function() {
  return "RAWERSRARARWERSARARARRRR!" 
}
console.log(tyrannosaurus.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests without using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
// helper function to sort an array
function sortArray(arr) {
  //define the variables for count and itterators
  var count = arr.length - 1, temp, x, y;

  //decided to mix it up a bit and do the swap function as part of the code to be refactored later
  for (x = 0; x < count; x++) {
    for (y = 0; y < count; y++) {
      if (arr[y] > arr[y + 1]) {
        // swap items
        temp = arr[y + 1];
        arr[y + 1] = arr[y];
        arr[y] = temp;
      }
    }
  }
}

const universities = [];

//extract the universities from the graduates array
for (let i = 0; i < graduates.length; i++) {
  universities[i] = graduates[i].university;
}

// sort the universities
sortArray(universities);

console.log(...universities); // used spread opperator to make the items look cleaner

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [];
console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];
console.log(uni);


// ==== Array Methods ====

// Given this zoo data from around the United States, follow the instructions below

zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

// The zoos need a list of all their animal's names converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.
const lowerCase = [];

// initially done with a for loop
// for(let i = 0; i < zooAnimals.length; i++) {
//     lowerCase.push(zooAnimals[i].animal_name.toLowerCase());
// }
// doing same with a map()
lowerCase.push(zooAnimals.map((x) => {
  return x.animal_name.toLowerCase();
}));
console.log(lowerCase); 

// The zoos need to know their total animal population across the United States.  Add up all the population numbers from all the zoos using the .reduce() method.
let populationTotal = 0;
//extract the population from the zooAnimals array
const population = [];
for (let i = 0; i < zooAnimals.length; i++) {
    population[i] = zooAnimals[i].population;
}
// use reduce to add al numbers in the population array and assgin the result to populationTotal
populationTotal = population.reduce((total, amount) => total + amount);
console.log(populationTotal);