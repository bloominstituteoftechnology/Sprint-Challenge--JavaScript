# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
 `.forEach is similar to a for loop in that it loops through all the objects/items in an array. .forEach requires that a callback function be passed in, i.e. array.forEach(cb).  the .forEach passes in all the objects/items to the callback function. it leaves the original array unchanged and doesn't return a value, unless you reasssign the array variable within the callback function and the callback function returns that array.` 
 `.map is similar to .forEach in that it also loops through all the objects/items in an array in order to be used in a callback function that's passed in, except that it outputs a copy of the new array that is the output of the callback function that was performed on each array item `
2. What is the difference between a function and a method?
`A method is a function, but a function isn't necessarily a method. A method is a function within the prototype of an object. If it's not in the protoype, it's not a method. `
3. What is closure?
` Closure is the idea that when you have a function within a function, the function that's nested within the function and any variables that were defined in the nested function will be stored when the outer function is invoked. The outer function will remember whatever variables and/or functions used within the nested function. These variables and/or functions are in the closure of the outer function.`

4. Describe the four rules of the 'this' keyword.
`1) when used in a global context, the this refers to the window object, which is the global object containing every other object of whatever application you're using the this in. `
`2) implicit binding. whenever the this is called within an object, the this is referring to the object within which it was called. `
`3) new binding. whenever a new object is created from a constructor, the this inside the new object refers to the new object, not the constructor `
`4) explicit binding. this refers to the idea that, when using a method that contains the this, the this will refer to the object to the left of the dot before the method name. This also applies when you want to use the method of a different object as long as you use .call or .apply. The this referenced in the method will refer to the object within which it is called, not within the object from which the method was created.  `

5. Why do we need super() in an extended class?
`We use super in an extended class in order to inherit the constructor of the parent class. This way we can use the key:value pairings created in the parent class and apply it to the pseudo class without having to copy and paste all the key:value pairings that were created in the parent class.  `