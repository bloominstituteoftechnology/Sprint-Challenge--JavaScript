Describe the biggest difference between .forEach & .map. <br>
.forEach() calls a function on each element in your array, which can mutate the array. .map() will also call a provided function on every element in the array, but will return a new array of the same size.
<br><br>

What is the difference between a function and a method? <br>
A method is simply a function on an Object.
<br><br>

What is closure? <br>
A closure gives you access to an outer function’s scope (and thus its variables) from within an inner function. 
<br><br>

Describe the four rules of the 'this' keyword. <br>
By default, 'this' in global scope is window bound (i.e. to the window object). In implicit binding, 'this' is pointing to the object whose scope it is within (i.e. "left of the dot"). In explicit binding, when we use the .apply, .call, or .bind methods we must specify what 'this' refers to within the method parentheses. In new binding, when using constructor functions, to prevent from getting undefined when we want to assign properties to the object, we need to use 'this' to refer to the object.
<br><br>

Why do we need super() in an extended class? <br>
The super keyword is used to call the parent class with the parameters passed to child class (i.e. enables the child class to access the parent's properties).