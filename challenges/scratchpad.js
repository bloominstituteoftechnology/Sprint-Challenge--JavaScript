// const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//         length: 2,
//         width: 1,
//         height: 1,
//     },
//     hp: 5,
//     name: 'Bruce',
//     faction: 'Mage Guild',
//     weapons: [
//         'Staff of Shamalama',
//     ],
//     language: 'Common Toungue',
// });



const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Jim');