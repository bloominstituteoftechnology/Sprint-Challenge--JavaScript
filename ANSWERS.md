# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
.map() returns an array while the .forEach Method returns undefined. forEach is also alloweed to alter the calling array while map does not
2. What is the difference between a function and a method?
Function exists on a global scrope while a mehod is defined within / for an object and can only be called with that. 
3. What is closure?
A closure is created whenever we have nested functions. It is to enable the nested functions to reach out of their own scope to use var / array / obj etc defined above them.
4. Describe the four rules of the 'this' keyword.
It is either bound globally to the window object, implicitly to the object in which it is being used, 
can newly be bound when used in constructor functions to assign properties to newly created objects or explicitly bound to an object of our choosing ( that we are passing into a function)
5. Why do we need super() in an extended class?
super() exists as an improvement over call and makes it possible to inherit all properties from a class we are extending
