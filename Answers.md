``Describe the biggest difference between .forEach & .map``
forEach will iterate over an array but does not return anything. map(), on the other hand, does and will. This is why you will see variables be assigned directly to the result of a map function. This is helpful so as to not mutate the original array.

``What is the difference between a function and a method?``
A function is a block of code that can be executed. A method sits in a function and is tied to the function. Functions __can__ have methods, methods __must__ belong to a function.



``What is closure?``
A closure is a function having access to the parent scope, even after the parent function has closed.



``Describe the four rules of the 'this' keyword.``
1. Global/window binding: 'this' refers to the global object; in the context of the browser the global would the the window object.

2. Implicit binding: 'this' is bound to the object that is calling it. Implicit binding works like a pointer to say "this right here is what ***this*** refers to"

3. New Binding: 'this' refers to the object which is created and subsequently returned by a constructor function. It has access to the DNA of the __prototype__. Each object that is created by the constructor will have access to the properties within.

4. Explicit Bind: A constructor function's prototype can be overridden or rearranged using explicit binding.



``Why do we need super() in an extended class?``
Executing the super() keyword is what will give us access to the this keyword. This is similar to using a call method with prototypes. This allows us to call the parent constructor.

