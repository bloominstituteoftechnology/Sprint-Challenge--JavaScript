
# Describe the biggest difference between .forEach & .map.
## .forEach runs a provided function for every element in the array and can mutate the original array
## .map creates a new array with the results of calling the provided function on the initial array


# What is the difference between a function and a method?
## A function can live in any scope, whereas a method is simply a function inside of an object


# What is closure?
## A closure is like a backpack of variables/methods from a different lexical scope that a nested function can access	


# Describe the four rules of the 'this' keyword.
## 1) Window Binding: 'this' is bound to the global window object
## 2) Implicit Binding: 'this' autmoatically bound to the object to the left of the function in which it's invoked.
## 3) Explicit Binding: 'this' bound to an object using the function methods .call(), .apply(), or .bind().
## 4) New Binding: 'this' bound to an object when constructed using a constructor function and the 'new' keyword.




# Why do we need super() in an extended class?
## Super(param) lets us access the properties of the parent class as well as use the keyword 'this' to access those properties.  It is related to the .call method used for prototypal inheritance before class syntax was available in ES6.