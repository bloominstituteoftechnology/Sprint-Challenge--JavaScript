# Your responses to the short answer questions should be laid out here using Mark Down.

1. Describe the biggest difference between `.forEach` & `.map`.

1. When you stop and think about it, they're really similar, and there are a lot of cases
where either could be used. Map is more concise, and useful for applying a simple
change across the elements an array, and outputting the changed array without mutating
the origonal. For each needs more written to accomplish the same thing.

2. What is the difference between a function and a method?

2. Functions have ending parenthasees(), and can accept paramaters. 
Methods are functions an object has access to.

3. What is closure?

3. Basically the ides that you can make a variable inside a function, 
use it, and it cannot be accessed in the global scope.

4. Describe the four rules of the 'this' keyword.

I only know 2 rules. 1. If you mess up and use this not refering to anything, it grabs the window. 
2. This is a placeholder value for the piece of data invoking the method, or calling the function.

5. Why do we need super() in an extended class?

super() covers both the parent.call(childAttributes,this); and the prototype.child=constructor(prototpe.parent);
 or however those lines go, I know I'm close. Super is essentially both of those for classes.