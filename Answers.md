##1.
.forEach does one thing really really well, iterate over a list of  
 data and in turn pass back an item and index to us for use.

.map() is commonly used to achieve immutability and take a  
set of data and transform it in some way.
.map specifically creates a new array with the results of   
calling a provided function on every element in the   
calling array.
------------------------------------------------------------------------------------------------------

##2.
Functions are a set of code to do an specific task in JavaScript.

Methods are also a function which is used as a property in    
Object.
------------------------------------------------------------------------------------------------------

##3.
Closure is the combination of a function and the lexical 	      
environment within which that function was declared. 
(For Ex: nesting a function inside a parent 
function allows the child function you nested in the 
parent to have access to the content inside the parent function.)
------------------------------------------------------------------------------------------------------

##4.
(They all have to do with where an object is bound.)

Window/Global Object Binding 
 When in the global scope, the value of “this” will be the window/console Object;

Implicit Binding 
 Whenever a function is called by a preceding dot, the object before that dot is this.

New binding 
 Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.


Explicit binding 
Whenever JavaScript’s call or apply method is used, this is explicitly defined.
------------------------------------------------------------------------------------------------------

##5.
We need super() in extended classes to allow us to pass any new attributes back up to the constructor  
of the parent object.