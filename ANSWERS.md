# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
# .forEach() executes a provided function once for each array element, while .map() will actually create a new array with the results of calling the function on every element in the calling array.
2. What is the difference between a function and a method?
# Methods are called from another object. Functions are independent and can be called alone.
3. What is closure?
# A closure is an inner function that has access to the outer (enclosing) function’s variables.
4. Describe the four rules of the 'this' keyword.
# Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
# Whenever a function is called by a preceding dot, the object before that dot is this.
# Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
# Whenever JavaScript’s call or apply method is used, this is explicitly defined.
5. Why do we need super() in an extended class?
# So we can invoke the parent class.