### 1. Describe the biggest difference between `.forEach` & `.map`.

### The biggest difference between the two is forEach doesn't actually return anything, it just runs a function that you provide it as the call back function on each element in your array, whereas map uses return values to create a new array.

### 2. What is the difference between a function and a method?

### A method is simply a function that is a property of an object. Suchas when its stored on the prototype would be an example of a method.

### 3. What is closure?

### Closure is the ability to access an outer function within an inner function. Closures always remember the scope in which they were created in.

### 4. Describe the four rules of the 'this' keyword.

### The window this keyword refers to when an item is in the global scope, its bound to the window object.

### Implicit binding refers to when a function is called by a preceeding dot. The object before the dot is the this reference. An example would in a function when returning something using the keyword this, such `thank you ${this.name}`

### New binding refers to when a constructor function is performed, the this is the imstance of the object that is created by the constructor function.

### Explicit binding is when a Bind, Call, or Apply method is used to explicitly bind an two objects together, an example might include in ES5 to make sure prorotypes are inherited.

### 5. Why do we need super() in an extended class?

### The super function is a function that calls the parent class of an object with the paremeters that the parent will accept. It replaces need for the call, or apply method in previous versions of JavaScript in most situations.
