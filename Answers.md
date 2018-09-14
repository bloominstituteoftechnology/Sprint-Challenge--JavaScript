1. Describe the biggest difference between .forEach & .map.
    .forEach does the specified operation for each item that it works through, while .map does the specified operation, transforms each item, and returns a new array of the transformed items.

2. What is the difference between a function and a method?
    A function exists on the global scope, while a method is part of an object. (though after we went over the whole 'this' thing with the window object, aren't all functions in that global scope technically part of the window object?)

3. What is closure?

    When a function is created, it contains a function definition and a closure. The closure is a little backpack of all the variables that were available to it when it was created, including variables in the global scope and variables in the calling scope (and its calling scope, and its calling scope, and its calling scope...). After a function is executed, internal variables no longer exist as far as the global execution stack is concerned, but the function keeps its little backpack of variables that were in scope.

4. Describe the four rules of the 'this' keyword.
    1 - Window or Global Object Binding - if you call `this` in the global scope, it'll reach to the window object to figure out what it is.
      <!-- function principleOne(name) {
        console.log(`Hello ${this}!`)
      } -->
    2 - Implicit Binding - when you call a function that involves `this` with a dot (e.g. object.function();), `this` knows that it referrs to the object before the dot.
      <!-- const pricipleTwoCall = {
          question: 'How are you',
          ask: function (name) {
          console.log(`${this.question}, ${name}?`);
          }
        }; -->
     When the function takes an object as an argument, `this` knows that it belongs to the object.
    3 - New Binding - when using a constructor function, when you call it with `new` the `this` understands that it belongs to the newly created object that you're returning from the constructor.
      <!-- function PrincipleThree(name) {
          this.ask = `Are you doing okay`;
          this.name = name;
          this.check = function(){
            console.log(`${this.ask}, ${this.name}?`);
          }
        }
        const me = new PrincipleThree('Kyran'); -->
    4 - Explicit Binding - when you call a function with .call() .apply() or .bind() you specify the object that `this` refers to in the first parameter.
      <!-- const myInfo = {
        'name': 'Kyran',
        'pronoun': 'her'
      }
      const cats = ['Tortie', 'Stuart', 'Homer'];
      function sayHi(cats1, cats2, cats3) {
        console.log(`Say hello to ${this.name} and ${this.pronoun} trash gremlins ${cats1}, ${cats2}, and ${cats3}!`)
      }
      sayHi.call(myInfo, ...cats); -->

5. Why do we need super() in an extended class?
    It tells the child's constructor that we should be pulling in the parent's constructor for use with the object that is being passed in to the child constructor. Like Parent.call(this, ). 
