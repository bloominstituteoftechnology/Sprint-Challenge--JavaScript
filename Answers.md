
1. Describe the biggest difference between `.forEach` & `.map`.

The .forEach method iterates over each index searching for a specified parameter and returns it as an array.
The .Map method returns a new array with the index being altered by a function.

2. What is the difference between a function and a method?

The function is the instruction set with the actions within. 

The method is whats used to call on the function. for example, the map method takes in the parameters and is used to call on the map function while passing the parameters to it to be used.


3. What is closure?

There are two types of closure global and local. The closure allows for a function to keep its actions isolated from affecting the global scope are other functions unless specifically instructed to do so through call back or calling on a variable located outside its scope.


4. Describe the four rules of the 'this' keyword.

* 1. Implicit Binding

Occurs when the this is used in conjunction with a . infront of it.  and normally used to point a inner function to a variable within its parent scope.

* 2. Explicit Binding

occurs when this is used with a function method call,apply or bind. In the case of the Bind it could be mistook for implicit because the this is lead by a paramater ..


* 3. New Binding
The new binding is using this with a constructor with the instructions to create a new object with .this assigning keys to their respective parameters passed in  by the constructor.


* 4. Window Binding

window binding is using the this keyword to call on an object in the global scope.
most of the time this occurs on accident and it returns undefined

5. Why do we need super() in an extended class?

The super() is used to prevent object  values from being duplicated when a a child class is inheriting from the parent class. 
 It also is used to call on the method of the extends class. so a parent can use a childs method when the child has used the super method in it. 