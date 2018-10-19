

1. Describe the biggest difference between `.forEach` & `.map`.
.forEach doesn't return us anything, whereas .map does.

2. What is the difference between a function and a method?
A method is a function in an object.

3. What is closure?
closure is sort of a type of scope. It is a way for variables to get passed into another scope. For example, if functionB is inside of functionA, and functionB uses a variable that isn't declared inside of it's own local scope, but is instead declared in functionA's scope, closure allows functionB to identify that variable and use it.

4. Describe the four rules of the 'this' keyword.
Window Binding: Window Binding occurs when no other binding has been explicitly assigned. In this case, the this keyword will be assigned to the global window.

Implicit Binding: Using the this keyword with an object. The this keyword in this case will bind to the object.

Explicit Binding: You can specifically assign what the this keyword binds to by calling .call, .apply, and .bind


New Binding: You can use constructor functions to create objects. Then using the new keyword, you can pass data into the constructor function to create a instance of the object. The this keyword will be to the new instance of the object.


5. Why do we need super() in an extended class?
super() will allow you to gain access to the this keyword in the extended class.
