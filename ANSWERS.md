# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`. 
ForEach iterates through each object and is a simplified syntax for a for loop. Map loops through and creates a new array
2. What is the difference between a function and a method? 
A function is a block of code that can take in parameters to complete certain actions that you later have to call passing through the arguments that match the parameters. 
Methods are functions within functions that you can call with dot syntax. I.E: function.method()
3. What is closure?
Closure is the lexical scope/environment an invoked statement can see. 
4. Describe the four rules of the 'this' keyword.
Window Binding = is when you directly bind something to the this keyword and it will assign a key/value pair to the Window itself.
Implicit Binding = Is automatic. If you have a method in a function and you use the this keyword it will look for what is left of the dot.
Explicit Binding = Is when you use the following function methods to apply this this keyword: Call, Bind, and Apply.
New Binding is where you link the New variable to the parent via using "new ParentNam". That way you can keep the features of the parent on the child
5. Why do we need super() in an extended class?
Extends just takes care of the proto. Super applies Call and create so that the parent can see it's values and get methods to work. 