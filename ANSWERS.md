# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
.forEach loops through an array and changes but doesn't return any value while .map loops through and creates a new 
array based on the old array changing it however is oultined inside the function. In .map, the original array remains unchanged.

2. What is the difference between a function and a method?
The difference between a function and a method is that a method is a function that is specifically attached to an object.

3. What is closure?
Closure takes advantage of the difference between global and local variables by giving functions that are 
defined in the global scope access to local variables defined and only accessible within that function.
Basically its functional inception.

4. Describe the four rules of the 'this' keyword.

When trying to figure out what the this keyword is, 
you need to figure where the function was invoked. 
* 1) Window Binding --
If you invoke a function that uses the this keyword but doesn't have the 
features of the three following principles (implicit, explicit, new), the
this keyword defaults to the window object, which is the base javascript object
in the browser.

* 2) Implicit Binding --
Left of the dot at the time of the function call.

* 3) New Binding --
When a function is invoked with the new keyword, the this is bound
 to the new object that is being constructed with the 'new' keyword.

* 4) Explicit Binding -- 
Explicit binds are called explicitly (obvi) using call, apply and bind. 


5. Why do we need super() in an extended class?
The super keyword is used to access and call functions on an object's parent.
