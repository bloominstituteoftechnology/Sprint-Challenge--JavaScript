1. Describe the biggest difference between `.foreach` & `.map`.

    .forEach and .map both loop over your data, .forEach excutes the provided function once for each data item. 
    .map creates a new array with results of the provided function. 

2. What is the difference between a function and a method?

    a method is a function that is a member of an object or class.

3. What is a closure?

    a closure is when a inner function has access to the outer function's scope. 

4. Describe the four rules of the 'this' keyword.

    1. Window/Global Object Binding - this will have access to the window/global scope. 
    2. Implicit Binding - this will have access to the object after the dot. (this.-function-).
    3. New Binding - when a constructor function is used this refers to the object created by this function
    4. Explicit Binding - when .call or .apply is used this explicitly points to the object it is set to. 

5. Why do we need super() in an extended class?

    We need super() in an extended class to tell the code that the parent needs to be concerned with child
    attributes and in return. 