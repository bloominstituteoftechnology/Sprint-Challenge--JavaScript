// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

tyrannosaurus = { // T-Rex object
  name: "tyrannosaurus",
  diet: "carnivorous",
  weight: 7000,
  length: 12,
  period: "Late Cretaceious",
  roar: () => {return "RAWERSRARARWERSARARARRRR!";} //A function that makes the T-Rex Roar(method)
}

stegosaurus = { // Stegosaurs object
  name: "stegosaurus",
  diet: "herbivourous",
  weight: 2000,
  length: 9,
  period: "Late Jurassic"
}

velociraptor = { // Velociraptor Object
  name: "velociraptor",
  diet: "carnivorous",
  weight: 15,
  length: 1.8,
  period: "Late Cretaceious"
}


// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight); //prints out the weight of the T-Rex
// What was the diet of a velociraptor?
console.log(velociraptor.diet); //prints out the diet of the Velociraptor
// How long was a stegosaurus?
console.log(stegosaurus.length); //prints out the length of the Stegosaurus
// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period); //prints out the period in which the T-Rex lived

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(tyrannosaurus.roar()); //by passing the roar function as a value in the T-Rex's roar key value pair, the roar method returns and prints "RAWERSRARARWERSARARARRRR!"


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests without using any array methods like .forEach(), .map(), .reduce(), .filter()
// The graduate array-object contains a number of key-value pairs that contain the necessary information for each student.
const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}];

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
let universities = []; //defines universities as an empty array
for(let i=0; i < graduates.length; i++) { // a for-loop is used to iterate over the graduates array-object
  universities.push(graduates[i].university); // .push is a method used to add the graduates to the new universities array
}
universities = universities.sort(); //.sort is a method used to reorder the array alphabetically
console.log(universities); //prints out the contents of the universities array

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = []; //creates a new empty contactInfo array
for(let i=0; i < graduates.length; i++) { //for-loop iterates over the graduates array-object
  contactInfo.push(`${graduates[i].first_name} ${graduates[i].email}`); //each graduates fistname and lastname are added to the new contactInfo array using the push method and formatted with template literals
}

console.log(contactInfo); //prints out the contents of the contactInfo array onto the console


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = []; //creates an empty uni array
console.log(uni); //prints the contents of the uni array
for (let i = 0; i < universities.length; i++) { //a for-loop to traverse the universities array
  if (universities[i].includes('Uni')) { //a conditional that checks to see if the name of the univeristy includes the string 'Uni' in its name.
    uni.push(universities[i]); //if a university contains the string 'Uni' in its name, it is pushed to the new uni array
  }
}
console.log(uni); //prints the contents of the uni array

// ==== Array Methods ====

// Given this zoo data from around the United States, follow the instructions below
//created an array-object of zoo animals
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
let lowerCase = []; //creates a new empty array named lowerCase
for (let i = 0; i < zooAnimals.length; i++) { //traverses over the array until the end of the array
  lowerCase.push(zooAnimals[i].animal_name.toLowerCase()); //converts the animal names to lowercase and adds them to the lowerCase array
}
console.log(lowerCase); //prints the contents of the lowerCase array
// The zoos need to know their total animal population across the United States.  Add up all the population numbers from all the zoos using the .reduce() method.
let populationTotal = []; //creates a new empty array named populationTotal
for (let i = 0; i < zooAnimals.length; i++) { //traverses over the array until the end of the array
  populationTotal.push(zooAnimals[i].population); //adds the population of each zoo animal in the array to the new populationTotal array
}
console.log(populationTotal.reduce((accumulator, currentValue) => accumulator + currentValue)); //using the reduce method, the total number of all zoo animals is printed in the console