1. Describe the biggest difference between `.forEach` & `.map`.
- The biggest difference between forEach and Map is that: forEach returns undefined and allows to mutate the array and Map returns a new array of the same size.
2. What is the difference between a function and a method?
- we might be using “method” for functions located inside an object other than the global object (window object), and “function” for functions located inside  global object (window object.)
3. What is closure?
- a closure gives us access to an outer function’s scope from an inner function
4. Describe the four rules of the 'this' keyword.

- 1.Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.

function greetName(name) {
    console.log('Hello ' + name);
    console.log(this);
}
greetName('Witanday');

- 2.Whenever a function is called by a preceding dot, the object before that dot is this.

var sayHello = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

sayHello.speak('John');

- 3.New Keyword : Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

function GreetAnyname(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

var greetJohn = new GreetAnyname('John');
var greetJane = new GreetAnyname('Jane');

greetJohn.speak();
greetJane.speak();

or 
by using a Constructor Function Prototype Method

GreetAnyname.prototype.sayGoodbye = function() {
    console.log('Goodbye ' + this.name);
    console.log(this);
};

greetJohn.sayGoodbye();
greetJane.sayGoodbye();

- 4. Explicit Binding : Whenever JavaScript’s bind, call or apply method is used, this is explicitly defined.

greetJohn.sayGoodbye.call(greetJane);
greetJane.sayGoodbye.apply(greetJohn);

5. Why do we need super() in an extended class?
- We call super() inside of a subclass' constructor method in order to call the parent constructor... and that's pretty much what super is in JavaScript: a reference to the parent prototype

