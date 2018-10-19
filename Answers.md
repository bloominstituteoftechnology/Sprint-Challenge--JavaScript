1) As stated in the learning kit, the biggest difference between the two methods is the .forEach method is like a gentlemen's 
version of our iterator loop, where it passes over every item in an array and does something to it. .map actually RETURNS a new 
array of elements whilst it is passing over every one of those items (basically a great way to iterate over an array without
mutating it!).

2) It seemed to me it was mostly a semantics thing, but as far as I have learned in this course, a function is simply a set of 
statements that performs a task or calculates some sort of value (it does work for you). To use it, you have to define it somewhere in the scope from which you want to call it. Once that scope is set, though, within that scope or object, that function is now part of that object, and is now refered to as a method. In this way, functions are almost always some object's method (a function can even be a method in some other function!). For example, by default in a browser, the "this" keyword points to the window object, so functions defined in the global scope are still "methods" under the window object! Nuts...

3) A closure is, as per MDN, the combination of a function and the lexical environment whithin which that function was declared.

Now, what does that actually mean? Well, it means that objects in Javascript can call functions that might share very similar body definitions, but because their parameters are defined within their own lexical enviorments, can pass different values and parameters. Put simply, closure allows for objects to retain a lineage and memory of what was declared inside of it, and allow other objects and/or functions to have access to those parameters.

A big thing for me is the fact that lexical scope goes up, not down; inner functions have access to variables defined in its outer functions, BUT NOT VICE VERSA THIS TRIPPED ME UP HARDCORE. This is probably the most important thingy about closure; in Javascript, inner functions can access variables/parameters in the outerfunction, but not the other way around. Trippy.

4) 
1) The first thing to remember is that if you use the "this" keyword when no other
binding has been explicitly assigned, outside of any other function, "this" will refer 
to the global object, which in web browsers is the window object.
2) The second principle is the idea behind Implicit binding, where the "this" is set to the object the method is called on.
Meaning, simply, that "this" will point to the object whenever that object is invoked in the code. On top of this, 
only the most immediate ref to an object matters.
3) the third principle is using the "new" keyword to make an object, which then assigns "this" to that
new object! So, when you use a function as a constructor, its "this" is bound to the new obj that was made!
4) The forth princible is explict binding, where you use the call, apply and bind methods to assign the "this" keyword with arguments!


5) Super is like our call function in ES5; it allows us to build a __proto__ chain and use the parameters and key:value pairs from a parent class within our child class. Its how we can have base classes, like "human dude" and build on that to make a "soldier" class and a "medic" class; the medic and soldier class will need to use the "extend" keyword and the super() function/method to be able to pass the parameters of the base class into those classes.  

(that concept was super easy to understand woot woot!)