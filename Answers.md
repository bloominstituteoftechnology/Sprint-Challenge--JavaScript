1. Describe the biggest difference between `.forEach` & `.map`.

While they both iterate through an array and allow the array to be mutated in some way by a function, the forEach() method doesn't actually return anything while the map() function returns a new, mutated array of the same size.


2. What is the difference between a function and a method?

A function is independent of an object or class whereas a method is implicitly passed in the object on which it was called.
A method is able to operate on data that is contained within a class (an object being an instance of the class, a method can be called upon that object). 

In short: method === function within an object;


3. What is closure?

A closure is what gives you access to the scope of an outer function (or global scope) from an inner function. Closures are created at the time the function is created. 

4. Describe the four rules of the 'this' keyword.

 * a. Window Binding: When in the global scope, the value of “this” will be the window/console Object. Much like when Josh was using codepen and this.name displayed as "Codepen". This is generally undesired behavior.

* b. Implicit Binding: Whenever a function is called by a preceding dot, the object immediately to the left of the dot is 'this'.

* c. New Binding: A constructor function is a function that makes objects. In this case, 'this' refers to the specific instance of the object that is created and returned by the constructor function When we call it we have to use the new keyword.

* d. Explicit Binding: We can override the default binding of this that the constructor sets using the .call or .apply methods. This is called explicit binding. 

5. Why do we need super() in an extended class?

The super keyword is used to access and call functions on an object's parent. It must be called before you
   can use the "this" keyword. If not, you get a reference error. 
