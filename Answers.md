Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?

1. .map creates a new array whereas .forEach does not. 
2. A function is a piece of code which is called by name that can operate on and return data. A method is a piece of code that is called by a name that is associated with an object. A method can operate on the data that is contained within the class.
3. A closure is a persistent scope which holds on to local variables even after the code execution has moved out of that block.
4. Implicit binding (most common) = whatever is to the left of the dot becomes the context for the this function
Explicit binding = telling a function what the context of the this keyword will be by using call, apply or bind
New binding = when you have a function invoked with the new keyword. This keyword is bound to the object being constructed
Window binding = if none of the other three apply, the this keyword will default to the window object unless you're in strict mode which will be undefined/error
5. Super ensures that we get the .this information