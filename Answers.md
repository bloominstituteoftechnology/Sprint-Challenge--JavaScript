
1..forEach() and .map() are both HOF with this being said  .map() creates a new array with the results of calling the function on every element, where as .forEach() just executes the function on each array element.

2. A method is a function that is declared inside of a function constuctor, where as a function is created outside of a function constructor. All methods are functions but not all functions are methods.

3. Functions are clousures, meaning the functions have access to variables defined outside of the function.

4. Implicit Binding : Looking to the left of the function call to find the this keyword 
   Explicit Binding : Explicitly stating what the this keyword should be using one of the three methods : .call(), .apply(), .bind() 
   new Binding : when a function is invoked with the "new" keyword, the "this" keyword inside that functions is bound to the new object that is being constructed.
   window Bindind : when the this keyword defaults to the window Object. 

5. We use the super() to  call the objects parent constructor, giving us access to all of the features of the parent.
