1. Map creates a new array by applying the same function to every element in the originating array whereas forEach applies any amount of custo logic to each element in the originating array.

2. In javascript everything function is an object and an object is a collection of key:value pairs. If a value is primitive (integar, string, etc.) it's considered a property, if it's a function it's considered a method. You can say methods accept functions as parameters but you wouldn't generally say that a function can accept a method as a parameter. (TBH my understanding of this is still a little shakey).

3. Closure is the ability of javascript's 2-pass compiler to reference variables that would otherwise be out of the local scope. They are accesible, however, because they are within a larger family of nested objects/functions.

4. The four rules of the 'this' keyword refer to how values for this are assigned. #1 default binding (Window), #2 Implicit Binding, #3 Explicit binding, #4 new binding (instantiating a new object)

5. The super keyword is used to access and call functions on an object's parent. By calling the parent constructor we can assign values to the parent's attributes.