1. Describe the biggest difference between .forEach & .map.
  
  a.) .map is a method on the Array object that creates a new array, and allows you to make changes to the old array to a new array by using a callback function on each element in the original array; furthermore, it returns a brand new array. A good example of when to use .map() is when you want to copy an array into a variable and also make changes to the new array. .map() does not mutate the original array.
  
  b.) performs an operation based on the provided callback function, but does not return a new array or *hardly anything at all, it infact returns the undefined keyword". A good example of when it could be used is when you need to make changes to array values and store them into a new array using the .push() method and don't want to generate a new array automatically. .forEach does not mutate the original array.

2. What is the difference between a function and a method?

    a.) A function is some code that allows you to take in some input, do some operations on said input and then, *if desired, return some output. Functions have a typeof "function". Functions can create their own scope (the inside of the curly brackets in a function declaration). Furthermore, a function is also an object as it inherits from the Object.prototype *master ancestor object on it's __proto__ property!

    b.) Methods are also functions and have all of the attributes that I listed above in part "a" of my answer, but they are functions that are properties on an object, that is the main difference.

3. What is closure?

    closure is related to scope, but is *NOT* the same thing as a scope. Closures are formed when a function accesses and uses variables outside of their own immediate scope. Functions are the only thing that can initiate a closure as variables on the global object being accessed in a function body are not counted as a closure.

4. Describe the four rules of the 'this' keyword.

    a.) this used in the global scope refers to the window (or global object).
    b.) implicit binding rules state that unless explicitly changed, the object to the left of the decimal in a property call that accesses this will use said object to the left as the "this". An example:
      const person = {name: 'Brian', speak: function(){return `Hello, ${this.name}` }}. When I access the .speak method on the object, it will use the "this" keyword which in this case refers to the person object, notice that this is bound to the left of the .name property accessor syntax, so when I envoke the method call via person.speak() you will see that person is the the left of speak, thus it is implicitly the reference or context of the "this" keyword in this instance.
    c.) Next up is the "new" keyword binding. The "new" keyword is used with constructor functions to create instances of objects, and every instance of said object has its own "this" keyword so...
        const Person = function(props){
          this.name = props.name;
          this.speak = function() {
            return `Hello, my name is ${this.name}`;
          }
        }
    is a constructor function and I instantiate a new instance like this...]
        let brian = new Person({name: 'Brian Ruff'});
        let jessica = new Person({name: 'Jessica'});
    Now when I access the instanceOfPerson.speak() method it will return a "this.name" that is specific to that object instance.

    d.) Finally, explicit bind using the .apply, .bind, and .call method to change the context of the "this" keyword, so if I do the following...
        jessica.speak.call(brian);
    I will now get back "Hello, my name is Brian Ruff" instead of "Jessica" becuase .call changes the context of the "this" keyword!

5. Why do we need super() in an extended class?

    We need to call super() within the constructor function of a class because it allows us to inherit the properties that are being extended with the "extends" keyword in the function definition. It is like creating two constructor functions to make two different Object prototypal *classes, and then using the ObjectOne.call(this, obj2Attrs) line of code to ensure the this of the object now refers to the object that it is inheriting from.