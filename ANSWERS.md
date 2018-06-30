# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?
1. .forEach is just short-hand of a for...loop, while .map returns an array of list items.
2. Functions are like the verbs of JavaScript.  They're where the action's at.  Methods are a specific kind of function that are properties of objects.  Methods make objects DO.
3. Closure refers to a function and its environs, demarcated in code by {}.  Closures define scope.
4. Window/Global binding- In global scope, 'this' refers to the window.
Implicit binding- When a function is called by a preceding dot, the object preceding the dot is 'this'.
New binding- When a constructor function is used, 'this' is refers to the object being constructed.
Explicit binding- When using .bind, .call, or .apply, 'this' is explicitly defined.
5. Super() bestows the property values of the parent class on the child class.