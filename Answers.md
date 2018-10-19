1. Describe the biggest difference between `.forEach` & `.map`.

foreach returns does something for each item in an array and doesn't necessarily need to return something. whereas map returns a new array generally composed of items from the array that it was called on.

2. What is the difference between a function and a method?

A method is pretty much just a function that is contained within an object. Though technically all functions outside of explicitly defined objects are methods of the global scope object but that's probably not important.

3. What is closure?

It is when you have a a function inside of a scope besides global for example a function inside of a function can access the variables of the function above it. It's pretty much just a way to create a new scope.

4. Describe the four rules of the 'this' keyword.

Window binding where this is referencing the global scope generally a big no-no
implicit is when you use a method the this keyword references whatever object is to the left of it.
New binding is when you use the new keyword to generate and object with a constructor the this keyword would reference the object that was created.
explicit is when you use call or apply which basically lets you explicitly change the context to anythingn you want.

5. Why do we need super() in an extended class?

it does all of the inheritance heavy lifting of grabbing all of the methods and props of whatever the parent is of the object it's in.
