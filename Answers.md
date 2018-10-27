
1. Describe the biggest difference between .forEach & .map.

Ans1: .forEach  executes a provided function once for each array element. It does not return anything. Whereas,
      .map processes each element in the array but also and gives a new  processedArray of same size where the
      original array is intact. It will return the new array that it created consisting of return values of
      function for each element.

2. What is the difference between a function and a method?

Ans2:A function inside an Object is called method. Method is a function when object is associated with it, while
function has no object associated with it.

3. What is closure?

Ans3: Closure gives the access to an outer function’s scope from an inner function.
 In JavaScript, closures are created every time a function is created, at function creation time.
 The inner function will have access to the variables in the outer function scope,
 even after the outer function has returned.


4. Describe the four rules of the 'this' keyword.

Ans4:

Rule1:
When in global scope the value of this  is the Window Object.
The global binding of "this" can be prevented by putting "Use Strict" on top of our code.
 Window and global binding occurs when no other binding is explicitly assigned.

RULE2:
Whenever a function is called by a preceding dot, the object before that dot is "this".The context of "this"
changes with the passage of different objects.

RULE3:
We can construct new objects with the new keyword from constructor function.Whenever a constructor function
is used, "this" refers to the specific instance of the object that is created and
returned by the constructor function.

RULE4:
WE have to explicitly define "this" when we are using  methods like call, apply and bind on functions.


5. Why do we need super() in an extended class?

Ans5: Because of the super() keyword  extended class inherits all the methods and property from the Parent class.

