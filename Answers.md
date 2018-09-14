1) Describe the biggest difference between .forEach & .map.

Both forEach and map will invoke the supplied function once for each item in the array. Map additionally returns a new array containing the return values of each invocation.

2) What is the difference between a function and a method?

A method is a function invoked in the context of an object.

3) What is closure?

A closure is a name-space created by the javascript environment to provide nested functions with access to the identifiers defined in their parent scope.

4) Describe the four rules of the 'this' keyword.

4.1) When used in the global scope within a browser, 'this' references the Window object.
4.2) When used in a method, 'this' references the object the method is being invoked in the context of.
4.3) When used in a constructor with the new keyword, 'this' references a newly created object.
4.4) Any function can be invoked as a method using the call or apply methods of the function instance, or by using the bind method to create a new function which will always execute in the context of the supplied object.

5) Why do we need super() in an extended class?

super allows derived classes to reference the constructor of parent classes. This esures that derived instances will have all the properties expected from the parent class.

