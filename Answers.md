1. Describe the biggest difference between `.forEach` & `.map`.

   The biggest difference between `.forEach` & `.map` is the effect they have on the original array after execution.

   '.forEach()' mutates the original array. If the callback function inside the method is defined to somehow alter the information inside the array, those changes will persist inside the original array.

   On the other hand, we have '.map()'. The callback function will have no effect on the original array, only the return. But there is a very small detail DO NOT SET YOUR ORIGINAL ARRAY EQUAL TO THE RETURN OF THE '.map()' METHOD. Ok a big detail to me. It is important. If you want to access those changes later on, set the return of this method equal to a separate variable that can be called later.

2. What is the difference between a function and a method?

   Both are functions, however, it becomes a method when it is attached to an object. Basically, a method is a property of an object.

3. What is closure?

   A closure is a type of lexical scoping for higher-order functions based on something about a dual bypass, I forgot the exact phrase.

   How I can explain it is the closure holds information for a nested function that it needs from its parent function without having to redefine it or specifically ask for it in the variable. This scope looks within the nested function and if it can not fund a specific parameter matching what's being used in the code block, it scopes back out to the functions parent to get the value. Since the nested function cannot be called without first calling the parent function, that value will always be provided to it I think.

4. Describe the four rules of the 'this' keyword.

   - Window/Global Object Binding is the automatic defining of the 'this' keyword as the entire window that is being rendered since it is an object.

   - Implicit Binding is the definition of 'this' is the definition of the 'this' keyword as a specific object that has been defined and is usually followed by one of its attributes or methods. So something.doSomething() makes 'something' equal to 'this'. It is implied that the attached object is 'this' thing being called upon. That specific object and all its attributes are being defined as 'this'.

   - Explicit Binding is the definition of the 'this' keyword to any object invoking a globally defined method. When invoking a globally defined function, the specific object equal to 'this' must be .call()ed with it's attributes individually inserted based on the parameters of the method, .apply()ed with an array of its attributes inserted as the parameters, or .bind()ed and stored as a variable to be used for later.

   - New Binding is the definition of the 'this' keyword as the specific object being created by a constructor method to the attributes that are attached and specifically defined for the object within the prototype or template of the object.

5. Why do we need super() in an extended class?

   The super() is equivalent to it's pre ES6 version of 'ParentObject.call(this, childProps);' but extremely sugared. If we just extend the parent class into its child class, that just tells that child it has a parental guardian. But that child is only adopted at that point, no matching DNA. But once we add that super() keyword and give it the parameter of the child's attributes, it gains that blood relation and the parents DNA. The child's attributes just tell the computer it's a lot like it's parent, but it's also unique, so don't reject these extra qualities.
