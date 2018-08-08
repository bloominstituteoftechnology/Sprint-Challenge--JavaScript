# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?

1. Foreach just take array and output the result as a regular for loop. While .map has it pre-built in function to output what you need in return. You also don’t need to create another variable to hold your new result, while foreach, you need to manually create a separate variable.
2. A function is created in a global scope, while a method is a function created in an object.
3. Closure is where the function can access the variable outside of the function itself, while for language that doesn’t support closure, if you were to call a function that doesn’t have a variable inside of it, but outside of the function. Then you would need to call that function and then put in a parameter to fulfill that variable inside.
4. Implicit binding - is where you call the function within an object.
5. Explicit binding - is where the object and function are separated on a global scope. but you call the object into the function via call, bind, apply.
   New binding - Is where you set-up your function to intake parameters to create a new object whenever you set-up a variable with the keyword ‘new’ after it.
   Window binding - is where you call the function with the keyword ‘this’ but no parameter or reference. 