
<!--  Describe the biggest difference between .forEach & .map.-->
1- The main difference between .map() and .foreach(), Is that .map() iterates inside of  an array and returns a new  array with changes inside. Unlike .foreach() it doesn’t return a new array it just makes changes on every vape inside of the array.

<!-- What is the difference between a function and a method? -->
2- functions have values, or operations  to return and the have their own block. Unlike methods they are used in oriented programing and usually they belong to a class, and they are used to manipulate or add a functionality to a class. 

<!-- What is closure? -->
3- closure is used when a nested function keep the scope (environment) of the parent scope after the execution of the parent function . 

<!--  Describe the four rules of the 'this' keyword.-->
4-
*  window Binding:-
-- When using this in a local scope function then consoling the object, it will print the whatever you invoke the function outside the scope ( in the global scope). So this will always indicate into something specific 
and if there is nothing to point at . This will point out the window(live broweser).
*  Implicit or (Automatic) Binding:-
--It basically refers to the object before the dot. so for an example,
instead of calling the object by ( myObj.key) you can use (this.key).
and it is useful to use incase the object's name gets changed. it is more dynamic.
*  New Binding:-
--It is a keyword that is used to creat a new object inside of constructor functions(Always).
*  explicit binding -functions/ 
-- It occures when one of the three methods are being used on a function. blind(),call(), apply().

<!-- Why do we need super() in an extended class? -->
5- super() it is to call the the object inside of the inherited constroctor function or class with its properties and methods. 
In other word, it is is equivalent to call() in ES5 syntax. But it is used in vanilla JS.


