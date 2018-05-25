# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

`.forEach` creates a function that iterates with a callback through the items in an array, passing through multiple times.

The biggest difference with `.map` is that it returns a new array elements.

2. What is the difference between a function and a method?

A method is is called by a name that is associated with an object. All that is passed to a function is explicitly passed.

3. What is closure?

It means that functions have access to variables outside their scope.

4. Describe the four rules of the 'this' keyword.

Window Binding: If you invoke the this keyword but don't place anything to the left of the dot, or use call, apply, or bind, then the this keyword will default to the window object - likely undefined.

* 2. Implicit When you call a function and the this function is invoked, look to the left of the keyword to see what's being called.

* 3. New Binding: When a function is invoked with the new keyword. The this keyword inside that function is bound to the new object being constructed.

* 4. Explicit Binding: .call and .apply both immediately invoke the function but with .call you pass in arguments one by one where as .apply you can pass them all in at once as an array. .bind works like .call but returns you a brand new call thay uou can invoke later.

5. Why do we need super() in an extended class?

To pass any new attributes back up to the constructor of the parent object.