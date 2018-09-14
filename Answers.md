
1. Describe the biggest difference between `.forEach` & `.map`.
- the biggest difference is tht map will return a new array while passing through each element, forEach does not need to create a new array. 


2. What is the difference between a function and a method?
    a method can be used anywhere but a method pretty much just means it's a function that inside a class.

3. What is closure?
    closure is about scope, and it allows you to use a function (or whatever) thats in one scope and use it another. It does this by looking outward for context if some variable isn't defined in the local scope. 

4. Describe the four rules of the 'this' keyword.
 1. Implicit Binding (this is used when you invoke a function and it is telling the this function to look on the left side of the dot. So if I have an object that's const me and it has an attribute called name, and I invoke a function that goes me.sayName, then the me on the left side of the dot is what the This statement will use. If I don't do this I get undefined )
 2. Explicit Binding (Allows you to directly point to/say what you want the This function to grab from. So instead of looking to the left of the dot, you write your const and do .call(insert thing you want your This to pull from) You can also use apply instead of cost if you're passing in an array, and you can use bind like apply/call but instead of immediately invoking the previous function it will return a new function to invoke later).
 3. New Binding (this is used to create whole new objects based off a similar object we already made. So we create an object with a function like const animal = function (color, name, type) and this using the this function in the attributes. You can create new objects quick and easy, (very DRY) but creating new objects and typying in the New function. so Const dog = new Animal (x, y, y) and JS creates it behind the scenes.)
 4. Window Binding (if you invoke the This keyword and there is nothing to the left of the dot, and you don't use explicit or new binding, then it will default to the window binding and more often than not give you undefined as an answer. )

5. Why do we need super() in an extended class?
    super is like object.create. It allows the child access to the parents methods. 