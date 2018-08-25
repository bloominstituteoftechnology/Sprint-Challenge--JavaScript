1) Describe the biggest difference between .forEach & .map.

- forEach affects our original array.
- map returns an entirely new array.

Assuming that the biggest difference is singular so I've provided one answer for both. In my opinion this is the biggest difference because not knowing this can lead to less performant logic and/or unintended consequences if you're expecting to not change the original array and use either method interchangeably.

2) What is the difference between a function and a method?

In a simple response, a function is when there is no object associated with it (by itself in a class). A method is when a function is associated with and object (function is inside the object).


3) What is closure?

Also in simplest terms an example of a closure would be a function within a function, for example:

function greet() {
    var name = 'Ken';
    function sayHello() { // this is considered a closure.
        console.log(`Hello ${name}`);
    }
    sayHello();
}

greet();


4) Describe the four rules of the 'this' keyword.
5) Why do we need super() in an extended class?