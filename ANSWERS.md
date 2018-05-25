# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`. 
    `.forEach` is used to apply functions or changes to an existing array. `.map` does the same but returns a new array and 
    does not alter the original array.

2. What is the difference between a function and a method?
    A function is used in a global setting and is not tied to an object. Methods are functions that are specifically made for objects.

3. What is closure?
    The scope within a function that seperates it from the global scope. Any variables declared inside a function only exist within that function.

4. Describe the four rules of the 'this' keyword.
    Global Binding - 'this' used outside of an object will refer to the window object.
    Implicit Binding - object that invokes the function is referred to as this. "objectForThis.this"
    New Binding - this refers to the copy built with the constructor function
    Explicit Binding - When using call or apply, this will refer to the object that inheritance is being received from.

5. Why do we need super() in an extended class?
    This calles the properties and functions of the extended class. The extends just refers to what class will be called with 'super()'.
