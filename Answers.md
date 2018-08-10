Describe the biggest difference between .forEach & .map.


.forEach loops over an array and passes back the item and its index. .forEach calls a provided function on each element in your array. .map is different than .forEach because it returns a new array in addition to passing each item to the callback.

What is the difference between a function and a method?

A function is a defined block of code with set instructions that carries out some type of cast. A method is a function. The only different between a method and a function is that a method exists inside an object.

What is closure?

Closure has everything to do with scope. Close can be thought of as like what do I currently have access to in my program. For example when funcion is created a new scope is created. Any variables closed within will be inclosed in a lexical privat scope. 

Describe the four rules of the 'this' keyword.

first rule is called implicit binding

we have to look at when a function is invoked. when you call a function you look to the left of the dot which will be directly referencing the information.

second rule is called explicit binding

instead of being a method on the object we could have a method on the global scope. Every function has a .call method that allows us to reference a this on the object. if you use .call on the function and pass in our object as the parameter we can use this explicitly. We could also use .apply on the function. the difference between .call and .apply is we can pass in an array of arguments after the object was passed in as the first argument. .call we pass in each additional argument one by one. .bind is just like .call except that saves us a brand new function that we can use later.

third rule

the third rule is when a new binding happens. When a function is invoked with the new keyword this is bound to the new object being constructed.

fourth rule window binding

when this is used and none of the other three rules where used this will default to the window object. It is possible to run javascript with the "use strict" keyword which will make it undefined. 

Why do we need super() in an extended class?

super is used to get all the access and call functions on an objects parent. When we used it in the homework it will get all the this info from its parent when we passed in its attributes in the constructor. 




