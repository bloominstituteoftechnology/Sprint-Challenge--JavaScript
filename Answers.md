
1. Describe the biggest difference between `.forEach` & `.map`.

foreach doesnt retun anything but what it does is go through and perform a function on every index in an array basically mutating the array as it goes. 
but map does the same thing without mutating the array instead it returns a new instance of an array. 

2. What is the difference between a function and a method?

functions are defined outside of an object where as methods are defined as a property of an object/class. Basically both are functions but when you have a function in an object/class its called a method. 

3. What is closure?

So closures are when the function has acces to and retains variable data so it can use it. If oyu were to declare a variable in the global scope and then use it inside the function or local scope you'd have a closure.

4. Describe the four rules of the 'this' keyword.

window = GLOBAL. If you dont specify the scope of the "this keyword it will always go to the global or window. 

implicit = or method is the most common. whatever is on the left of the invocation is where the this keyword will bind to. 

new bindings = constructor functions. they create objects

explicit = functions methods. call apply and bind. You use these methods to explicitly bind the this keyword so it doesnt go to the global scope. 

5. Why do we need super() in an extended class?

when using classes if you need a child class to your parent in your constructor you need super to bind the "this" keyword. 