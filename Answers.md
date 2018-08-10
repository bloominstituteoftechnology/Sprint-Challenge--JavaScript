1. Describe the biggest difference between `.forEach` & `.map`.
    1A. .forEach does not create a new array. .map created a new array.
2. What is the difference between a function and a method?
    2A. Location. A method is simply a function inside of an object.
3. What is closure?
    3A. Closure is a term for a lexical environment and the variables accessible to it within that environment.
4. Describe the four rules of the 'this' keyword.
    4A. When declared global this refers to the window. (global binding)
        When a function is called before a dot this refers to the object dot preceding function. (implicit binding)
        When declared in a constructor this refers to the created object. (new binding)
        When declared in a call or apply method this is explicitly defined. (explicit binding)
5. Why do we need super() in an extended class?
    5A. We need super in a class to gain access to .this. It gives access to a parents calls and methods.