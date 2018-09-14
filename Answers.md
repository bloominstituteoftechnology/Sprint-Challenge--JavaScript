1. The biggest difference between forEach and map is the output. Map will create a new array to store the result of the callback function. ForEach will run the function for each element in the array and will always return undefined.

2. A function is it's own seperate entity. A method is a function that is a property of an object. when a function is envoked, nothing else has to be referenced. myFunc(). When a method is envoked, the object must be referenced. myObj.myMethod().

3. closure is the backpack that carries the required variables into a deeper scope. If let num = 'thing' is created in a function and within that function another function is created and num is used, num = 'thing' will be in the closure.

4a. Window binding. When the this doesn't reference anything in particular it references the coding environment.

4b. Implicit binding. When the this references a property of it's containing object within a method.

4c. New binding. When a constructor uses the this keyword to assign properties of the objects it will create.

4d. Explicit binding. When a function method is invoked to attatch the properties of an object to a function.

5. Using super() in an extended class will carry over the information on what to do with the passed attributes from the class from which it extends. if you have a class of Parent with an this.name = parameters.name  key value pair and you extend that class, super() takes the place of having to enter that key value pair again.