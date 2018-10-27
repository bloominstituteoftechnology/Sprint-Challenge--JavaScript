1.Describe the biggest difference between .forEach & .map.
.forEach runs through the function for each element in an array, .map creates a new array on every element
2.What is the difference between a function and a method?
The difference is semantic, but a method is a function with an object.
3.What is closure?
A closure is a function that can get to the parent function even when it's closed.
4.Describe the four rules of the 'this' keyword.
    1.If 'this' is global the value will be a window/console object.
    2.When a function is called by a dot, the object before is this.
    3.When there's a constructor function, this is the specific object created by the constructor funciton
    4.When call or apply is used, this is defined.
5.Why do we need super() in an extended class?
To keep it from being overriden