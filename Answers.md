
1. Describe the biggest difference between .forEach & .map.
 The biggest difference between .forEach and .map is that .forEach will execute a function for each array element, .map will create a new array and return it with the same array size. .forEach does not return anything on its own.  

2. What is the difference between a function and a method?
A function is a block of code (or set of statements) that runs with given parameters to run a value or task. A method is something that can tell a function what to do when executing a function in a particular matter. 

3. What is closure?
A closure is like a local scope object, in which its values are enclosed in a scope that belongs to its function. 

4. Describe the four rules of the 'this' keyword.

The four rules of the 'this' keyword are implicit, explicit, constructor and window binding. Implicit binding is the most common use of this and it operates by looking to the left of the '.' sign to see what is being invoked. Explicit works with .call, .apply and .bind. .call and .apply work similiarly except for the fact that the .call returns a piece of code one by one and .apply returns entire arrays of the code. .Bind works like .call except that it returns a new function that you can invoke separately/later. .Apply can work like .call if you return .apply with an array argument like this: .apply[1] 

5. Why do we need super() in an extended class?
We use super() in an extended class so that the constructor object can pass back new attributes up to the parent object. 
