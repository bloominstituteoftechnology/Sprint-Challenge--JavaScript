1. Describe the biggest difference between `.forEach` & `.map`.
    The biggest difference is that .forEach loops through every item in an array once and performs a specific function for each item, while map is actually creating
    a new array based on the returned data of a function called for every object. 
2. What is the difference between a function and a method?
    A function is a process that can be called independently of any other data structure; a method is generally bound to a specific object/class of objects.
3. What is closure?
    Closure is the result of creating a nested function; it perhaps can be thought of as a stored imprint of the local variables present at the time of the nested function's creation.
    That imprint can be stored in memory and all its components accessed any time the nested function is called.   
4. Describe the four rules of the 'this' keyword.
    Assuming this is related to binding principles related to 'this':
        -Window bpinding is the core principle of "this" makes the keyword link to the highest global object; generally the window by default. 
        -Implicit binding is used in relation to the object scope; instances of implicit bindings are a) calling this.name on an object within its inner function. b) calling a function on an object with dot notation. 
        -New binding is used to connect a child object to its constructor. 
        -Explicit binding is using the method .bind, .call, or .apply to explicitly define what the "this" keyword references.
5. Why do we need super() in an extended class?
    Super(short for super class! :D) is needed in order to link the prototypic data of a parent object passed into the extended class to 'this' when an instance of the extended class needs to call its inherited properties using 'this'. It replaces Parent.call(this, props);    
