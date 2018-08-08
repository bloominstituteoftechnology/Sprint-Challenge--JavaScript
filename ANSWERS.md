# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

    ForEach iterates through a array but does not return any values. With a forEach function, values need to be pushed into an existing array or changed in the existing array. The higher order function, map, returns a new array of the same size as the original array. 

2. What is the difference between a function and a method?

    A method is a type of function that can be called from a key inside of an object. Methods are found inside of objects and classes.

3. What is closure?


    A closure is an inner function that has access to the outer function's variables as well as all global variables. A closure has three scope chains: its own scope, the scope of the function enclosing the closure, and global scope. 

4. Describe the four rules of the 'this' keyword.

    Window Binding: when used in global scope or without a function without an explicit binding, the "this" keyword is represented by the window object in the browser. 
    Implicit Binding: when used within reference to an object and occurs when dot notation is used when invoking a function. Whatever is left of the dot, is the reference to "this" 
    Explicit Binding: added with the use of call(), apply(), and bind()
    New Binding: in a constructor function refers to the specific instance of a new object. 

5. Why do we need super() in an extended class?

    The super() replaces the ParentObject.call(this, properties), which bind the word "this" and allow the child constructor to extend and use the methods of the parent.   


