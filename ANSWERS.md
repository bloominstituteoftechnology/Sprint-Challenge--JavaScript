# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.


Our .forEach method executes a provided function once for each array element.
Our .map method creates a new array with the results of calling a provided function on every element in the calling array.
One of the major differences between the method is that the .forEach method is allowed to mutate the calling array.
The .map method utilizes the return values and return a new array.

2. What is the difference between a function and a method?


A function is called by the name. A method is called by a name that is associated with an object

3. What is closure?


Closure is an inner function that contains access to the outer functions variables.

4. Describe the four rules of the 'this' keyword.


If the "new" keyword is used when calling the function, "this" inside the function is a brand new object.


If apply, call, or bind are used to call a function, this inside the function is the object that is passed in as the argument.


If a function is called as a method — that is, if dot notation is used to invoke the function  " this" is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, "this" is the object to the left of the dot.


If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it’s window.


5. Why do we need super() in an extended class?


super() serves as a reference to the parent prototyp
