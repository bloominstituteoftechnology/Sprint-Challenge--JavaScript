1. The biggest difference between the two is that .forEach does not return anything but calls a function for each element in an array, .map returns a new array.
2. Data that is passed into a function is passed explicitly where a method is passed implicitly to the object in which it was called. A method is called by a name that is linked to an object. 
3. Closures are functions inside of other functions that can access the outer functions variables/information, it also has access to the global information.  
4. 1.Window binding is the default binding.
    2.Implicit binding is when . or dot notation to invoke a function and uses whatever is to the left of the . to as the context for 'this'.
    3. New binding is the use of an user defined or built in object type that contains a constructor function.
    4. Explicit Binding is when you use the .call(), .apply() or .bind(), and when using explicit binding we ignore anything that is placed before the . because whatever we are calling after is exaclty what we want returned.
5. super() is a keyword that is used to access and call fucntions in an opjects parent.
