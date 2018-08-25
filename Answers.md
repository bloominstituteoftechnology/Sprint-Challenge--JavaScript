1. Describe the biggest difference between `.forEach` & `.map`.
        forEach preforms an action on each array element and the array is mutated. .map returns a new array with the results of the array elements and the original array is not mutated.
        
2. What is the difference between a function and a method?
        A method is a function that is a part of an object and has local scope to that object. A function has global scope and coud be referred to as a method in resepect to the window object.
        
3. What is closure?
        A closure is a function and it's surrounding environment within which the function is defined and contains the local variables for that function.
        
4. Describe the four rules of the 'this' keyword.
'This' can refer to the global or window element if it's a part of a simple function. 'This' can refer to a newly created instance of an object if used with the 'new' keyword. With implicit binding, 'this' will be bound to the object that is declared before the dot. With explicit binding, 'this' refers to whatever object is called with the function using .call, .apply or .bind.

5. Why do we need super() in an extended class?
        Super() is used to call the parent constructor, allowing for inheritance from the Parent to the Child.
