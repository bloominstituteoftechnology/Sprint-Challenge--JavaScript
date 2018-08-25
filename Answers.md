
1) Describe the biggest difference between .forEach & .map.

        .forEach runs a function on every array element, modifying the array.
        .map creates a new array with the function results ran on each array item of the original array.


2) What is the difference between a function and a method?

        A function is code that runs when named. 
        A method is a function within (belonging to) an object.



3) What is closure?

        Closure's are a way of writing functions and variable that allow for global access to the results of a function without allowing access to the variables within so that not just any function or scipt can edit said function.



4) Describe the four rules of the 'this' keyword.
        If the 'new' keyword is used when calling the function, 'this' inside the function is a brand new object.
        If apply, call, or bind are used to call a function, 'this' inside the function is the object that is passed in as the argument
        If dot notation is used to call the function — 'this' is the object that the function is a property
        If 'this' is called while not attached to any key or function, it's binded to the window. 

5) Why do we need super() in an extended class?

        super allows us to call the parent class within a child class giving us access to the parent classes keys.


