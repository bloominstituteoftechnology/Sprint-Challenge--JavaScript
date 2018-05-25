# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
They both call functions for each element in an array, but map creates a new array.

2. What is the difference between a function and a method?
They are super similar, but a method is implicitly passed, and a method is able to be called on data within a class, while a function can not. 

3. What is closure?
A closure holds all of the variables in the scope at the time the function was created.

4. Describe the four rules of the 'this' keyword.
1. If 'new' keyword is used when calling the function, then 'this' is a brand new object
2. If apply, call, or bind, are used to call the function, then 'this' is the object passed in as the argument.
3. If the . is to the left of the function invokation, then 'this' is the object to the left of the dot. 
4. If a function is invoked without conditions above it, then 'this' is window. 

5. Why do we need super() in an extended class?
Super() lets us access and call functinos of an object's parent, so if we have multiple classes and functions, we need super. 