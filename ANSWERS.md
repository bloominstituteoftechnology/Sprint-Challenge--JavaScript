# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

they both use a passed in function to manipulate arrays but map() instead creates a new array with the results instead of mutating the original.

2. What is the difference between a function and a method?

Functions are defined outside of classes while methods are defined inside, assigned as a value to the classes property.

3. What is closure?

Closure has to do with scope and the values a variable has access to inside a function. if the value is not assigned the JavaScript interprter will climb the scope chain until it reaches the global scope to find one.

4. Describe the four rules of the 'this' keyword.

Window binding is when the value for 'this' is in the global scope. Implicit binding is when dot notation is used to access and objects key and the 'this' before the dot is the object. New Binding is when the 'new' keyword is used to create a new object whose properties are inherited from a parent object. Explicit binding is when .call(), .apply(), or .bind() is used and explicitly defined in a constructor object. 

5. Why do we need super() in an extended class?

super() accesses and calls function of a constructor objects parent. 
