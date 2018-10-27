function Dinosaur(attributes) {
  this.objectName = attributes.objectName;
  this.diet = attributes.diet;
  this.weight = attributes.weight;
  this.length = attributes.length;
  this.period = attributes.period;
}

const tyrannosaurus = new Dinosaur({
  objectName: 'tyrannosaurus',
  diet: 'carnivorous', 
  weight: '7000kg',
  length: '12m',
  period: 'Late Cretaceious'
});

const stegosaurus = new Dinosaur({
  objectName: 'stegosaurus',
  diet: 'herbivorous', 
  weight: '2000kg',
  length: '9m',
  period: 'Late Jurassic'
});

const velociraptor = new Dinosaur({
  objectName: 'velociraptor',
  diet: 'carnivorous', 
  weight: '15kg',
  length: '1.8m',
  period: 'Late Cretaceious'
});

tyrannosaurus.roar = function() {
  return "RAWERSRARARWERSARARARRRR!";
}

console.log(tyrannosaurus.weight);
console.log(velociraptor.diet);
console.log(stegosaurus.length);
console.log(tyrannosaurus.period);
console.log(tyrannosaurus.roar());

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

const universities = [];
for (i = 0; i< graduates.length; i++) {
  universities.push(graduates[i].university);
 }
universities.sort();
console.log(universities);

const contactInfo = [];
for (i = 0; i< graduates.length; i++) {
  contactInfo.push(graduates[i].first_name+' '+graduates[i].email);
 }
console.log(contactInfo);

const uni = [];
for (i = 0; i< graduates.length; i++) {
  if (graduates[i].university.indexOf("Uni") > -1) {
   uni.push(graduates[i].university);  
  }
}
console.log(uni);

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

const animalNames = [];
zooAnimals.forEach(item => animalNames.push(item.animal_name+" "+item.scientific_name));
console.log(animalNames);

let lowerCase = [];
lowerCase = zooAnimals.map(item => item.animal_name.toLowerCase());
console.log(lowerCase); 

let largerPopulation = [];
largerPopulation = zooAnimals.filter(item => {
  return item.population < 5;
});
console.log(largerPopulation);

let populationTotal;
populationTotal = zooAnimals.reduce((x,y) => x + y.population,0);
console.log(populationTotal);