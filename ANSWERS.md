# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

.map is used when you want to apply an operation on ALL  elements in an array, and creates a new array of the same size

.forEach is used to execute a function per each element in the array, and does not return anything it calls the array and changes it in place.


2. What is the difference between a function and a method?

a method is similar to a function, in that it may execute a specific action, but it is a 'chained' property of an object and only accesible 'through' it, for example with.notation().

a function is global in scope, and such is accessible at anytime for it's computational actions.

3. What is closure?

closure is a namespace for functions and variables, so it is a sort of barrier that is dependent on where the functio/varibles were declared.


4. Describe the four rules of the 'this' keyword.
1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.

2. Whenever a function is called by a preceding dot, the object before that dot is this.

3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.



5. Why do we need super() in an extended class?

super() is necessary to access properties and methods of the class we are extending.
It accomplished both, object.create and .prototype syntax in one swoop.


