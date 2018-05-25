# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
.forEach executes a provided callback one time for each element in an array in ascending order while .map does this AND creates a new array from the results
2. What is the difference between a function and a method?
A method becomes a function when it is associated with an object.
3. What is closure?
A closure is a combination of a function and the lexical environment within which that function was declared.
4. Describe the four rules of the 'this' keyword.
If the 'new' keyword is used when calling a function, 'this' inside the function is a brand new object
If 'apply', 'call, or 'bind'are used to call a function, 'this' inside the function is the object that is passed in as the argument
If a function is called as a method-that is, if dot notation is used to invoke the function-'this' is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, 'this' is the object to the left of the dot
If a function is invoked as a 'free function invocation' meaning it was invoked without any of the conditions present above, 'this' is the global object. In a browser, its 'window'
5. Why do we need super() in an extended class?
to gain access to the methods used in the previous class
