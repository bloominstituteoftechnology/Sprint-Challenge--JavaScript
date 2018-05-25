# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
 forEach does not return anything, it simply calls a specific function on each item in the array, while map utilizes the return values to create a new array
2. What is the difference between a function and a method?
A method is a special type of function that works on an object
3. What is closure?
Closure or lexical scope is basically nested functions, you can only access the child function while calling the parent.
4. Describe the four rules of the 'this' keyword.
Explicit Binding Implicit Binding, new Binding, window Bindings
Explicit binding take places when this is used on an object's properties, implicit binding is used when a method is not linked to an object but called by the object, and the method takes on the properties of the object. new binding occurs in a factory function where the new object is created and this keyword applies to the new object, and window binding is the default where none of the others apply, then this is bound to the window, or the code at the time, or undefined
5. Why do we need super() in an extended class?
super pulls keywords from the parent class and also links the parent and the extended class, all in one function
