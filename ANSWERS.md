# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
Map creates a new array, forEach alters the existing array.
2. What is the difference between a function and a method?
A method is called upon the object in which it was created, functions are more flexible and may be casted with any
piece of data.
3. What is closure?
A function that has access to data outside its scope, this data is persistent even after the function is invoked.
4. Describe the four rules of the 'this' keyword.
  A. implicit binding - this will refer to object entities when used in an object. ex: this.name
  B. explicit binding- occurs when using the .call or .apply methods to bind `this`
  C. default- the default binding of `this` is to the window object
5. Why do we need super() in an extended class?
Super is used so that any inherited properties can be set
